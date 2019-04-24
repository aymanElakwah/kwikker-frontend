import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, Inject} from '@angular/core';
import { LyTheme2, ThemeVariables, Platform } from '@alyle/ui';
import { ImgCropperConfig, ImgCropperEvent, 
         LyResizingCroppingImages, ImgCropperErrorEvent } from '@alyle/ui/resizing-cropping-images';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


const styles = (theme: ThemeVariables) => ({
  actions: {
    display: 'flex'
  },
  cropping: {
    maxWidth: '400px',
    height: '300px'
  },
  flex: {
    flex: 1
  },
  range: {
    textAlign: 'center',
    maxWidth: '400px'
  },
  rangeInput: {
    maxWidth: '150px',
    margin: '1em 0',

    // http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html
    // removes default webkit styles
    '-webkit-appearance': 'none',

    // fix for FF unable to apply focus style bug
    border: `solid 6px ${theme.background.tertiary}`,

    // required for proper track sizing in FF
    width: '100%',
    '&::-webkit-slider-runnable-track': {
        width: '300px',
        height: '3px',
        background: '#ddd',
        border: 'none',
        borderRadius: '3px'
    },
    '&::-webkit-slider-thumb': {
        '-webkit-appearance': 'none',
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default,
        marginTop: '-6px'
    },
    '&:focus': {
        outline: 'none'
    },
    '&:focus::-webkit-slider-runnable-track': {
        background: '#ccc'
    },

    '&::-moz-range-track': {
        width: '300px',
        height: '3px',
        background: '#ddd',
        border: 'none',
        borderRadius: '3px'
    },
    '&::-moz-range-thumb': {
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default
    },

    // hide the outline behind the border
    '&:-moz-focusring': {
        outline: '1px solid white',
        outlineOffset: '-1px',
    },

    '&::-ms-track': {
        width: '300px',
        height: '3px',

        // remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead
        background: 'transparent',

        // leave room for the larger thumb to overflow with a transparent border
        borderColor: 'transparent',
        borderWidth: '6px 0',

        // remove default tick marks
        color: 'transparent'
    },
    '&::-ms-fill-lower': {
        background: '#777',
        borderRadius: '10px'
    },
    '&::-ms-fill-': {
        background: '#ddd',
        borderRadius: '10px',
    },
    '&::-ms-thumb': {
        border: 'none',
        height: '16px',
        width: '16px',
        borderRadius: '50%',
        background: theme.primary.default,
    },
    '&:focus::-ms-fill-lower': {
        background: '#888'
    },
    '&:focus::-ms-fill-upper': {
        background: '#ccc'
    }
  }
});

@Component({
    selector: 'app-edit-image',
    templateUrl: './edit-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
  })
  
  
  export class EditImagesComponent implements AfterViewInit {

    classes = this.theme.addStyleSheet(styles);
    croppedImage?: string;
    fileToUpload: ImgCropperEvent = null;
    ImageUrl: string;
    result: string;
    scale: number;
    img: LyResizingCroppingImages;
    @ViewChild(LyResizingCroppingImages) cropper: LyResizingCroppingImages;
    myConfig: ImgCropperConfig = {
      autoCrop: true,
      width: 200, // Default `250`
      height: 200, // Default `200`
      fill: '#ff2997', // Default transparent if type = png else #000,
      type: 'image/jpeg'
    };
  
    constructor(
      private theme: LyTheme2,
      private EditImageService: DataService,
      private dialogRef: MatDialogRef<EditImagesComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  
    ngAfterViewInit() {
  
      // demo: Load image from URL and update position, scale, rotate
      // this is supported only for browsers
      if (Platform.isBrowser) {
        const config = {
          scale: 0.745864772531767,
          position: {
            x: 642.380608078103,
            y: 236.26357452128866
          }
        };
        this.cropper.setImageUrl('',() => {
            this.cropper.setScale(config.scale, true);
            this.cropper.updatePosition(config.position.x, config.position.y);
            this.cropper.rotate(90);
          }
        );
      }
    }
  
    onCropped(e: ImgCropperEvent) {
      this.croppedImage = e.dataURL;
      console.log('cropped img: ', e);
      this.fileToUpload = e as File;
      console.log(this.fileToUpload);
    }

    onloaded(e: ImgCropperEvent) {
      console.log('img loaded', e);
    }

    onerror(e: ImgCropperErrorEvent) {
      console.warn(`'${e.name}' is not a valid image`, e);
    }

    changeImage()
    {

      let image = this.dataURItoBlob(this.fileToUpload.dataURL);
       this.dialogRef.close( image );
    } 

    dataURItoBlob(dataURI): Blob {
      const binary = atob(dataURI.split(',')[1]);
      const array = [];
      console.log(binary);

      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      return new Blob([new Uint8Array(array)], {
        type: 'image/png'
      });
    }
  }

   