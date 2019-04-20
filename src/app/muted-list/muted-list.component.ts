import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BlockedMutedUser } from '../model/bloked-muted-users';
/**
 * muted list to change in settings
 */
@Component({
  selector: 'app-muted-list',
  templateUrl: './muted-list.component.html',
  styleUrls: ['./muted-list.component.css']
})
export class MutedListComponent implements OnInit {
  /** array of muted users */
  muted_accounts: BlockedMutedUser[];
  res:any;
  /**
   * empty
   */
  constructor(private mutedAccounts_service: DataService) { }
  /**
   * initialize the muted users array via get request
   */
  ngOnInit() {
    this.mutedAccounts_service.getMutedAccounts().subscribe(
      list=>{this.muted_accounts = list;}
    )
    console.log("testing");  
    console.log(this.muted_accounts);
  }
  /**
   * unMuteUser function to unmute a muted user
   * @param username(string) used in the request to un mute user
   */
  unMuteUser(username:string){
    console.log(username)
    this.mutedAccounts_service.unmuteUser(username).subscribe(
      response => {this.res = response})

      this.ngOnInit();
  }


}
