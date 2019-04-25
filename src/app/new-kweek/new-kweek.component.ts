import { Component, OnInit } from '@angular/core';
import {  NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Kweek } from '../model/kweek';

@Component({
  selector: 'app-new-kweek',
  templateUrl: './new-kweek.component.html',
  styleUrls: ['./new-kweek.component.css']
})
export class NewKweekComponent  {
  kweekData:string="";
  selectedImage: File=null;
  imageUrl:any = null;
  res:string = null;
  reply: boolean;
  kweek:Kweek;
  

  /**
   * Constructor 
   * @param thisDialogRef to close the dialog
   * @param Httpclient test purposes parameter 
   * @param newKweekService used for http requests
   */

  constructor(public thisDialogRef: MatDialogRef<NewKweekComponent>, 
    private http: HttpClient, private newKweekService: DataService) {}

    /**
   * Function to close the dialog by a button 
   *
   */

  onClose(){
    this.thisDialogRef.close()
    console.log("exit button works");

  }

  /**
   * function for the uploded image (file) 
   * @param event {file(image)} to get the uploded image and add it
   * to selected image param then add it as a url to imageUrl param to 
   * preview it 
   * 
   */

  onFileSelected(event){
    console.log(event); 
    // read image as binary
    this.selectedImage = <File>event.target.files[0];
    //another way to save the image
    const fd = new FormData();
    fd.append('image',this.selectedImage, this.selectedImage.name);
    console.log(fd);
    console.log(this.selectedImage);
    
    // this.http.post('gs://testing-8daff.appspot.com/',fd)
    // .subscribe(response=>{
    //   console.log(response);
    // });

    // save image as url in imageUrl to preview it
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedImage); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result; 
    }

    }

    /**
   * addkweek function to post the kweek through http post request
   * 
   * @returns Request Response
   */

    addKweek(){
      console.log(this.kweekData)
      this.newKweekService.addNewKweek(this.kweekData).subscribe
      (response => {this.res = response})

      console.log(this.res);
      this.thisDialogRef.close()
    }

    /**
   * removes selected photo
   * 
   */


    removeImage()
    {
      this.selectedImage=null;
    }
    
  
}
