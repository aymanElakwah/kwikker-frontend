import { Component, OnInit } from '@angular/core';
import {  NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogRef} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

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
  constructor(public thisDialogRef: MatDialogRef<NewKweekComponent>, 
    private http: HttpClient, private newKweekService: DataService) {}

  onClose(){
    this.thisDialogRef.close()
    console.log("exit button works");

  }

  onFileSelected(event){
    console.log(event); 
    this.selectedImage = <File>event.target.files[0];
    const fd = new FormData();
    fd.append('image',this.selectedImage, this.selectedImage.name);
    console.log(fd);
    console.log(this.selectedImage);
    
    // this.http.post('gs://testing-8daff.appspot.com/',fd)
    // .subscribe(response=>{
    //   console.log(response);
    // });

    // preview image
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedImage); 
    reader.onload = (_event) => { 
      this.imageUrl = reader.result; 
    }

    }

    addKweek(){
      console.log(this.kweekData)
      this.newKweekService.addNewKweek(this.kweekData).subscribe
      (response => {this.res = response})

      console.log(this.res);
    }

    
  
}
