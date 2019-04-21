import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatChipInputEvent } from '@angular/material';
import { NewKweekComponent } from '../new-kweek/new-kweek.component';
import { isNull } from 'util';
import { InboxComponent } from '../inbox/inbox.component';
import { NgForm,  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../services/title.service';
import { MiniUser } from '../model/mini-user';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public userName: string;
 /**
   * addressed person
   */
  addressee: MiniUser;
  /**
   * creating message form
   */
  myForm2: FormGroup;
  /**
   * if message conatin image add div
   */
  uploadImg = false;
  /**
   * image url if uploaded
   */
  imgURL: any;
  /**
   * filtered list of users
   */
  users: MiniUser[];
  /**
   * selected users list to send message
   */
  selectedUsers: string[] = [];
  /**
   * reactive form
   */
  myForm: FormGroup;
  /**
   * user selected addresses
   */
  secondStep=false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];



  constructor(private modalService: NgbModal,
              private dialog: MatDialog,
              private data: DataService, 
              private route: ActivatedRoute,
              private router: Router, 
              private tabService: TitleService,
              private fb: FormBuilder)

              {

              }

  ngOnInit() {
    this.userName =  localStorage.getItem('username');
    if (isNull(this.userName))
    {
      this.userName = "user"; 
    }
    this.myForm = this.fb.group({
      filterBy: ['']
    });
    this.myForm2 = this.fb.group({
      message: ['', [
        Validators.required
      ]],
      file : [null]
      });
    this.data.getRecentConversations().subscribe(users => {
      this.users = users.slice(0,7); }
      );
  }

  /**
   * Function to open kweek dialog 
   * paneClass -> attach the dialog to specific css class
   */

  openKweekComponent(){
    console.log("working")
    const dialogRef = this.dialog.open(NewKweekComponent, {
      panelClass: 'kweekBox'
    });
  
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log("modal should show");
  }
   /**
   * Function to open kweek dialog 
   * paneClass -> attach the dialog to specific css class
   */

  openInboxComponent(){
    console.log("working")
    const dialogRef = this.dialog.open(InboxComponent, {
      height: '600px',
      width: '1000px',
    });
  
  /**
   * Function for closing the dialog and displaying a msg 
   * 
   */

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    console.log("modal should show");
  }
   /**
   *
   *Log out function, removes the Token and username saved in localStorage
   * @param form {NgForm} the Form parameter, which has all the 'log-out' form information
   * @returns void
   * it navigates to the main page 'welcome page'.
   */
  logOutUser(form: NgForm) {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("username");
    this.router.navigate(["/"]);
  }
  /**
   * after each char send new request
   */
  newSearch() {
    this.data.searchUsers(this.myForm.controls.filterBy.value).subscribe(
      list => { this.users = list; }
    );
  }
  /**
   * remove one of selected users
   * @param user selected user to get removed
   */
  remove(user) {
    const index = this.selectedUsers.indexOf(user);
    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
  }
}
/**
 * on enter add user
 * @param event keyboard shortcuts event
 */
add(event: MatChipInputEvent): void {
  const input = event.input;
  let found = false;
  // tslint:disable-next-line:no-shadowed-variable
  this.selectedUsers.forEach(element => {
    if ( this.users[0].username === element) {
        found = true;
    }
  }
  );
  if ( found) {
    return;
  }
  if (this.users.length > 0) {
    this.selectedUsers.push( this.users[0].username);
  }
  // Reset the input value
  if (input) {
    input.value = '';
  }
}
/**
 * select user by click
 * @param user user that get clicked on
 */
  selectUser(user: MiniUser) {
    let flag = false;
    // tslint:disable-next-line:no-shadowed-variable
    this.selectedUsers.forEach(element => {
      if ( user.username === element) {
          flag = true;
      }
    }
    );
    if ( flag) {
      return;
    }
    this.selectedUsers.push(user.username);
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
    this.myForm2.patchValue({
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
    message.text = this.myForm2.controls.message.value;
    message.media_url = '' ;
    this.selectedUsers.forEach(element => {
      message.username = element;
      this.data.createMessage(message).subscribe();
    });
    this.router.navigate(['/chat/', {outlets : {body: ['inbox']} }]);
  }
  next(){
    this.secondStep = true;
  }
  
}
