// angular components
import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
// used services
import { ChatService } from '../chat/chat.service';
// used models
import { MiniUser } from '../model/mini-user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-direct-messages',
  templateUrl: './direct-messages.component.html',
  styleUrls: ['./direct-messages.component.css']
})
export class DirectMessagesComponent implements OnInit {
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
   * to click on hidden element
   */
  /**
   * image url if uploaded
   */
  imgURL: any;
  /**
   *
   * @param chatService to get data of addresse
   * @param fb to build reactive form
   * @param data to request backend endpoints
   */
  constructor(private chatService: ChatService,
              private fb: FormBuilder,
              private data: DataService) {
   }
  ngOnInit() {
    this.chatService.currentAddresse.subscribe(addressee => this.addressee = addressee);
    this.myForm = this.fb.group({
    message: ['', [
      Validators.required
    ]],
    file : [null]
    });
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
    // to do
    message.media_url = '' ;
    this.data.createMessage(message).subscribe();
    this.myForm.reset();
  }
}
