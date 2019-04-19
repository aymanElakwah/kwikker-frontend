import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MiniUser } from "../model/mini-user";
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
  muted_accounts: BlockedMutedUser[];
  res:any;
  /**
   * empty
   */
  constructor(private mutedAccounts_service: DataService) { }
  /**
   * empty
   */
  ngOnInit() {
    this.mutedAccounts_service.getMutedAccounts().subscribe(
      list=>{this.muted_accounts = list;}
    )
    console.log("testing");  
    console.log(this.muted_accounts);
  }

  unMuteUser(username:string){
    console.log(username)
    this.mutedAccounts_service.unmuteUser(username).subscribe(
      response => {this.res = response})

      console.log(this.res);
      this.mutedAccounts_service.getMutedAccounts().subscribe(
        list=>{this.muted_accounts = list;}
      )
      console.log("testing");  
  }


}
