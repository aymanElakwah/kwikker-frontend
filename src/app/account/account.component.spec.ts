import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material';
import { from } from 'rxjs';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let account_service:DataService;
  let dialog: MatDialog;
  
  let Email = {email : String()};
  let response = {token:String()};

  beforeEach(() => {
    account_service = new DataService(null,null);
    dialog = new MatDialog(null,null,null,null,null,null,null);
    component = new AccountComponent(account_service,dialog);  
    
  });
  describe("ngOnOnit",()=>{
    it('should create account component', () => {
      expect(component).toBeTruthy();
    });
    
    it('should get email', () => {
      let spy = spyOn(account_service,"getEmail").and.callFake(()=>{
        return from([Email])
      })
      component.ngOnInit()
      expect(spy).toHaveBeenCalled();
      //expect(component.email).toBe(component.oldEmail);
    });

    it('should get email', () => {
      Email.email = "ahmed";  
      let spy = spyOn(account_service,"getEmail").and.callFake(()=>{
        return from([Email])
      })
      component.ngOnInit()
      expect(component.email).toBe("ahmed");
      //expect(component.email).toBe(component.oldEmail);
    });
    it('old mail should equal mail', () => {
      Email.email = "ahmed";  
      let spy = spyOn(account_service,"getEmail").and.callFake(()=>{
        return from([Email])
      })
      component.ngOnInit()
      expect(component.oldEmail).toBe("ahmed");
    });



  });

  describe("password/username change",()=>{
    it("test token change",()=>{
      response.token = "aaa";
      let spy = spyOn(account_service,"updatePassword").and.callFake(()=>{
        return from([response]);
      })
      component.ChangePassword();
      expect(localStorage.getItem('TOKEN')).toBe("aaa");
    });

    it("change user name",()=>{
      component.userName = "a";
      component.oldUserName = "ac";
      let spy = spyOn(account_service,"updateUserName").and.callFake(()=>{
        return from([response])
      })
      component.SaveChanges();
      expect(spy).toHaveBeenCalled();
    });
    it(" change email",()=>{
      component.email = "a";
      component.oldEmail = "ac";
      let spy = spyOn(account_service,"updateEmail").and.callFake(()=>{
        return from([response])
      })
      component.SaveChanges();
      expect(spy).toHaveBeenCalled();
    })
  });
});
