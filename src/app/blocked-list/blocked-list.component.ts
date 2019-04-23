import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BlockedMutedUser } from '../model/bloked-muted-users';

@Component({
  selector: 'app-blocked-list',
  templateUrl: './blocked-list.component.html',
  styleUrls: ['./blocked-list.component.css']
})
export class BlockedListComponent implements OnInit {
  /** array of muted users */
  blocked_accounts: BlockedMutedUser[];
  res:any;
  /**
   * 
   * @param blockedAccounts_service empty constructor
   */
  constructor(private blockedAccounts_service: DataService) { }

  /**
   * initialize the blocked users array via get request
   */
  ngOnInit() {
    this.blockedAccounts_service.getMutedAccounts().subscribe(
      list=>{this.blocked_accounts = list;}
    )
    console.log("testing");  
    console.log(this.blocked_accounts);
  }

    /**
   * unBlockUser function to unblock a blocked user
   * @param username(string) used in the request to unblock user
   */
  unBlockUser(username:string){
    console.log(username)
    this.blockedAccounts_service.unblockUser(username).subscribe(
      response => {this.res = response})

      this.ngOnInit();
  }

}
