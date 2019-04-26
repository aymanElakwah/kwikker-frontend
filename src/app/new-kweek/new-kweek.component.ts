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
export class NewKweekComponent implements OnInit {
  kweekData:string="";
  selectedImage: File=null;
  imageUrl:any = null;
  res:string = null;
  reply: boolean ;
  kweek:Kweek;
  image_id:string = null;
  username:string ;
  screenname:string ;

  replyData:string = "@";
  

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
      if(this.reply == true){
        this.username = this.kweek.user.username;
        this.screenname = this.kweek.user.screen_name;
      }
    }

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
    console.log(this.kweek);

    
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
      if(this.selectedImage){
        console.log("there is an image")
      }
      /** this.newKweekService.postMedia(this.selectedImage).subscribe
      (Response=>{
        this.image_id = Response;
        console.log(this.image_id);
      })*/
      /**
       * to differ between a reply or a new kweek when sending request
       */
      if(this.reply == true){
        
        this.replyData = this.replyData+this.username+" "+this.kweekData;
        console.log(this.replyData)

        this.newKweekService.addNewKweek(this.replyData, this.kweek.id).subscribe
        (response => {this.res = response})

      }
      else{
      this.newKweekService.addNewKweek(this.kweekData, null).subscribe
      (response => {this.res = response})
    }
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
