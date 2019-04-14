// angular componetns
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
// service
import { DataService } from '../services/data.service';
// models
import { MiniUser } from '../model/mini-user';
// angular material
import { MatChipInputEvent } from '@angular/material/chips';
/**
 * search freinds to send message
 */
@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {
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
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  /**
   * empty constructor
   */
  constructor(private data: DataService,
              private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      filterBy: ['']
    });
    this.data.getRecentConversations().subscribe(users => {
      this.users = users; }
      );
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
}
