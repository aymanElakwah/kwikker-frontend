import { Component, OnInit } from '@angular/core';
import {  NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Kweek } from '../model/kweek';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-new-kweek',
  templateUrl: './new-kweek.component.html',
  styleUrls: ['./new-kweek.component.css']
})
export class NewKweekComponent implements OnInit {
  kweekData:string="";
  selectedImage: any=null;
  imageUrl:any = null;
  res:string = null;
  reply: boolean ;
  kweek:Kweek;
  media_id:string = null;
  username:string ;
  screenname:string ;
  kweekTO:boolean;
  replyData:string = "@";
  mediaResponse:any;
  disableButton:boolean;
  kweekButtonText:string = "Kweek";
  

  /**
   * Constructor 
   * @param thisDialogRef to close the dialog
   * @param Httpclient test purposes parameter 
   * @param newKweekService used for http requests
   */

  constructor(public thisDialogRef: MatDialogRef<NewKweekComponent>, 
    private http: HttpClient, private newKweekService: DataService) {
    }
    /**
     * to check if it's a reply then set varibales of screen name and username
     */
    ngOnInit(): void {
      if(this.reply == true && this.kweekTO == false){
        this.username = this.kweek.user.username;
        this.screenname = this.kweek.user.screen_name;
      }
      this.disableButton = false;
    }

    /**
   * Function to close the dialog by a button 
   *
   */

  onClose(){
    this.thisDialogRef.close()

  }

  /**
   * function for the uploded image (file) 
   * @param event {file(image)} to get the uploded image and add it
   * to selected image param then add it as a url to imageUrl param to 
   * preview it 
   * 
   */

  onFileSelected(event){
    
    // read image as binary
    this.selectedImage =event.target.files[0];
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
     
      this.disableButton = true;
      this.kweekButtonText = "Uploading";
      if(this.selectedImage){
        
        this.newKweekService.postMedia(this.selectedImage).subscribe
       (Response=>{
        this.mediaResponse = Response;
        this.media_id = this.mediaResponse.media_id;
        

        /**
       * to differ between a reply or a new kweek when sending request
       */
       if (this.reply == true) {
        this.replyData = this.replyData+this.username+" "+this.kweekData;
        
      }
      if(this.reply == true && this.kweekTO == false){
        
        this.newKweekService.addNewKweek(this.replyData, this.kweek.id, this.media_id).subscribe
        (response => {this.res = response})

      }else if (this.reply == true && this.kweekTO == true) {
        this.newKweekService.addNewKweek(this.replyData, null, this.media_id).subscribe
        (response => {this.res = response})
      }
      else{
      this.newKweekService.addNewKweek(this.kweekData, null, this.media_id).subscribe
      (response => {this.res = response})
    }
      
      this.thisDialogRef.close()
      })
      }else{
        this.media_id = null;
        

      /**
       * to differ between a reply or a new kweek when sending request
       */
       if (this.reply == true) {
        this.replyData = this.replyData+this.username+" "+this.kweekData;
       
      }
      if(this.reply == true && this.kweekTO == false){
        
        this.newKweekService.addNewKweek(this.replyData, this.kweek.id, this.media_id).subscribe
        (response => {this.res = response})

      }else if (this.reply == true && this.kweekTO == true) {
        this.newKweekService.addNewKweek(this.replyData, null, this.media_id).subscribe
        (response => {this.res = response})
      }
      else{
      this.newKweekService.addNewKweek(this.kweekData, null, this.media_id).subscribe
      (response => {this.res = response})
    }
      
      this.thisDialogRef.close()
      }
      
    }

    /**
   * removes selected photo
   * 
   */
    removeImage()
    {
      this.selectedImage=null;
    }

    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
  
}
