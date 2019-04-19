import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BlockedMutedUser } from '../model/bloked-muted-users';

@Component({
  selector: 'app-blocked-list',
  templateUrl: './blocked-list.component.html',
  styleUrls: ['./blocked-list.component.css']
})
export class BlockedListComponent implements OnInit {
  blocked_accounts: BlockedMutedUser[];
  res:any;

  constructor(private blockedAccounts_service: DataService) { }

  ngOnInit() {
    this.blockedAccounts_service.getMutedAccounts().subscribe(
      list=>{this.blocked_accounts = list;}
    )
    console.log("testing");  
    console.log(this.blocked_accounts);
  }

  unBlockUser(username:string){
    console.log(username)
    this.blockedAccounts_service.unmuteUser(username).subscribe(
      response => {this.res = response})

      console.log(this.res);
      this.blockedAccounts_service.getMutedAccounts().subscribe(
        list=>{this.blocked_accounts = list;}
      )
      console.log("testing");  
  }

}
