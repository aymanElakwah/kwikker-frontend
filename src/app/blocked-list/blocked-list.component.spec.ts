import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedListComponent } from './blocked-list.component';
import { DataService } from '../services/data.service';
import { BlockedMutedUser } from '../model/bloked-muted-users';
import { from } from 'rxjs';
describe('BlockedListComponent', () => {
  let component: BlockedListComponent;
  let blocked_service:DataService;
  
  

  beforeEach(() => {
    blocked_service = new DataService(null,null);
    component = new BlockedListComponent(blocked_service);
    
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit',()=>{
    let blocked_accounts: BlockedMutedUser[];
    it('should get blocks list',()=>{
      let spy = spyOn(blocked_service,"getBlockedAccounts").and.callFake(()=>{
        return from([blocked_accounts]);
      })
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
/*
    it('should unblock user',()=>{
      let Response:any;
      Response = [1];
      let spy = spyOn(blocked_service,"unblockUser").and.callFake(()=>{
        return from([Response]); 
      })
      component.unBlockUser('as')
      expect(spy).toHaveBeenCalled();
    })*/
  })

  
});
