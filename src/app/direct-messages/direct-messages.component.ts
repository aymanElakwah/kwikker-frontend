// angular components
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
// used services
import { ChatService } from '../chat/chat.service';
import {DirectMessagesService } from './direct-messages.service';
// used models
import { MiniUser } from '../model/mini-user';
import { DataService } from '../services/data.service';
import {Message} from '../model/message';
import { BehaviorSubject } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { ChatComponent } from '../chat/chat.component';
@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css'],
  providers: [ DirectMessagesService]
})
export class DirectMessagesComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  /**
   * addressed person
   */
  addressee: MiniUser;
  /**
   * creating message form
   */
  myForm: FormGroup;
  /**
   * if message conatin image add div
   */
  uploadImg = false;
  /**
   * image url if uploaded
   */
  imgURL: any;
  /**
   * list of messages
   */
  messageList :Message[];
  @ViewChild('file') sendElement: ElementRef;
  /**
   *
   * @param chatService to get data of addresse
   * @param fb to build reactive form
   * @param data to request backend endpoints
   * @param socket service contatin all socket functions
   */
  constructor(private chatService: ChatService,
              private fb: FormBuilder,
              private data: DataService,
              private socket:DirectMessagesService,
              public DialogRef: MatDialogRef<ChatComponent>) {
                
                this.sendElement.nativeElement.focus();
   }
   
  ngOnInit() {
    this.chatService.currentAddresse.subscribe(addressee => {this.addressee = addressee;
      this.socket.ReciveMessage(this.addressee.username,localStorage.getItem("username")).subscribe(list => {
        this.messageList.push(list);
      });});
    this.myForm = this.fb.group({
    message: ['', [
      Validators.required
    ]],
    file : [null]
    });
    this.data.getDirectMessages(this.addressee.username).subscribe(list=>{
      this.messageList = list.reverse();
    }
    );
  }
  /**
   * click input tag on button click
   */
  upload() {
    const element: HTMLElement = document.getElementById('fileInput') as HTMLElement;
    element.click();
  }
  /**
   * preview images after uploading it
   * @param files uploaded images
   */
  uploadIamge(files) {
    this.uploadImg = true;
    const reader = new FileReader();
    const imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  /**
   * remove image from uploading it
   */
  removeImg() {
    this.uploadImg = false;
    this.myForm.patchValue({
      file: null
    });
  }
  /**
   * send current message
   */
  send() {
    const message = {
      text: '',
      username: '',
      media_url: ''
    };
    message.text = this.myForm.controls.message.value;
    message.username = this.addressee.username;
    if(this.uploadImg===true){
      // this.data.postMedia()
    }

    // to do
    message.media_url = '' ;
    this.data.createMessage(message).subscribe();
    this.myForm.reset();
  }
  toInbox() {
    this.chatService.setSection(1);
  }
  /**
   * close dialog
   */
  exit(){
    this.DialogRef.close();
  }
}
