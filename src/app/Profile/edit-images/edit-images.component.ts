import { Component, ChangeDetectionStrategy, ViewChild, AfterViewInit, Inject} from '@angular/core';
import { LyTheme2, ThemeVariables, Platform } from '@alyle/ui';
import { ImgCropperConfig, ImgCropperEvent, 
         LyResizingCroppingImages, ImgCropperErrorEvent } from '@alyle/ui/resizing-cropping-images';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

/** Page Styles */
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

/**
 * Edit Image Component is responsible 
 * for editing The Profile Picture
 * Resizing, Rotating and Croping
 */
@Component({
    selector: 'app-edit-image',
    templateUrl: './edit-images.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
  })
  
  
  export class EditImagesComponent implements AfterViewInit {

    /** Component Themes */
    classes = this.theme.addStyleSheet(styles);
     /** The Cropped Image Url */
    croppedImage?: string;
     /** The File That will be sent to Main Component To be used In Upload Request */
    fileToUpload: ImgCropperEvent = null;
    /** The First Image Url Before Changing */
    ImageUrl: string;
    /** The Image Scale (Zooming in and Out) */
    scale: number;
    /** The Cropped Image But with another Type */
    img: LyResizingCroppingImages;

    /**
     *  Set Default Changes To The Image 
     * */
    @ViewChild(LyResizingCroppingImages) cropper: LyResizingCroppingImages;

     /**
     *  The Default Config To The Image 
     * */
    myConfig: ImgCropperConfig = {
      autoCrop: true,
      width: 200, // Default `250`
      height: 200, // Default `200`
      fill: '#ff2997', // Default transparent if type = png else #000,
      type: 'image/jpeg'
    };
  
  /**
   * Edit Image Component Constructor
   * 
   * @param theme  The Component Default Theme
   * 
   * @param dialogRef  Dialog Service which is used to open Pop up windows
   * 
   * @param data  is Used To Send Data To The Main Profile Component   
   * 
   */
    constructor(
      private theme: LyTheme2,
      private dialogRef: MatDialogRef<EditImagesComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }
  
     /**
      *  Set Default Changes To The Image
      *  */
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
  
     /** For Each Change In The Image, Make It ready To Be Uploaded
      * @param e The Cropped Image
      */
    onCropped(e: ImgCropperEvent) {
      this.croppedImage = e.dataURL;
      this.fileToUpload = e as File;
    }

     /** When The Original Image Loaded at First */
    onloaded(e: ImgCropperEvent) {
    }

      /** When Error Occurs While Loading */
    onerror(e: ImgCropperErrorEvent) {
    }

    /** Save The Changes And Send The Cropped Image To The Main Component  */
    changeImage()
    {
      let image = this.dataURItoBlob(this.fileToUpload.dataURL);
       this.dialogRef.close( image );
    } 

     /** Ignore The Changes And Close The Dialog  */
    CancelChanging()
    {
      this.dialogRef.close();
    }

    /**  Convert The Th Image To Blob To be able To Upload it
    * @param dataURI The Image Want To Be Converted Url
    */
    dataURItoBlob(dataURI): Blob {
      const binary = atob(dataURI.split(',')[1]);
      const array = [];
 
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }

      return new Blob([new Uint8Array(array)], {
        type: 'image/png'
      });
    }
  }

   