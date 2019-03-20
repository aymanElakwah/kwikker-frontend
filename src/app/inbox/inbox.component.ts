import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Conversation } from '../model/inbox';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  conversations: Conversation[];
  constructor(private data: DataService) { }

  ngOnInit() {
    /* this.data.getConverstations().subscribe(
      list => {this.conversations = list ; }
    ); */
  }

}
