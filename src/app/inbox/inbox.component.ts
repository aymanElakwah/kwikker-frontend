import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Conversation } from '../model/inbox';
/**
 * latest conversations
 */
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversations: Conversation[];
  /**
   *
   * @param data service to make calls to backend
   */
  constructor(private data: DataService) { }
  /**
   * get all conversations
   */
  ngOnInit() {
     this.data.getConverstations().subscribe(
      list => {this.conversations = list ; }
    );
  }

}
