import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutedListComponent } from './muted-list.component';

import { DataService } from '../services/data.service';
import { BlockedMutedUser } from '../model/bloked-muted-users';
import { from, empty } from 'rxjs';
describe('MutedListComponent', () => {
  let component: MutedListComponent;
  let muted_service:DataService;

  

  beforeEach(() => {
    muted_service = new DataService(null,null);
    component = new MutedListComponent(muted_service)
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit",()=>{
    let muted_accounts: BlockedMutedUser[];

    it("get muted accounts list",()=>{
      let spy = spyOn(muted_service,"getMutedAccounts").and.callFake(()=>{
        return from([muted_accounts]);
      })
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    })
/*
    it("unmute user",()=>{
      let res:any;
      let spy = spyOn(muted_service,"unmuteUser").and.callFake(()=>{
        return empty();
      })
      component.unMuteUser("sds");
      expect(spy).toHaveBeenCalled();
    })
*/
  })
});
