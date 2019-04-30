import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Kweek } from '../model/kweek';
import { NewKweekComponent } from './new-kweek.component';
import { MatDialogRef } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { User } from'../model/user'
import { empty } from 'rxjs';
describe('NewKweekComponent', () => {
  let component: NewKweekComponent;
  let thisDialogRef: MatDialogRef<NewKweekComponent>; 
  let http: HttpClient; 
  let newKweekService: DataService;
  let mockDialogRef = jasmine.createSpyObj(["close"]);
  

  beforeEach(() => {
   // thisDialogRef = new MatDialogRef<NewKweekComponent>(null,null,null,null);
    http = new HttpClient(null);
    newKweekService = new DataService(null,null);
    component = new NewKweekComponent( mockDialogRef, http, newKweekService);
  });

  

  it('should delete image', () => {
    component.removeImage();
    expect(component.selectedImage).toBeNull()
  });

  describe("ngOnInit",()=>{

    it("it's a reply",()=>{
      component.reply = true;
      expect(component.reply).toBeTruthy()
    });

    it("gets kweek data",()=>{
      component.reply = true;
      component.kweekTO = false;
      //component.kweek.user.username = "ahmed";
      //component.kweek.user.screen_name = "h";
      expect(component.username).toBeNull;
      expect(component.screenname).toBeNull;
    })

    describe("new kweek interactions",()=>{
      it("should diable button",()=>{
        let spy = spyOn(newKweekService,"postMedia").and.callFake(()=>{
          return empty();
        })
        let spy2 = spyOn(newKweekService,"addNewKweek").and.callFake(()=>{
          return empty();
        })
        component.addKweek();
        expect(component.disableButton).toBeTruthy();
        expect(component.kweekButtonText).toBe("Uploading");
      })

      it("adding add to reply",()=>{
        let spy = spyOn(newKweekService,"postMedia").and.callFake(()=>{
          return empty();
        })
        let spy2 = spyOn(newKweekService,"addNewKweek").and.callFake(()=>{
          return empty();
        })
        
        component.reply = true;
        component.replyData = "@";
        component.username = "aa";
        component.kweekData = "ss";
        component.addKweek();
        expect(component.replyData).toBe("@aa ss");

      })
      
      it("calling new kweek request function",()=>{
        let spy = spyOn(newKweekService,"postMedia").and.callFake(()=>{
          return empty();
        })
        let spy2 = spyOn(newKweekService,"addNewKweek").and.callFake(()=>{
          return empty();
        })
        
        component.addKweek();
        expect(spy2).toHaveBeenCalled();

      })

      it("not reply data stay the same",()=>{
        let spy = spyOn(newKweekService,"postMedia").and.callFake(()=>{
          return empty();
        })
        let spy2 = spyOn(newKweekService,"addNewKweek").and.callFake(()=>{
          return empty();
        })
        component.reply = false;
        component.kweekData = "aaa";
        component.replyData = "@";
        component.addKweek();
        expect(component.kweekData).toBe("aaa");
        expect(component.replyData).toBe("@");
      })

      it("call post media if there is an image",()=>{
        let spy = spyOn(newKweekService,"postMedia").and.callFake(()=>{
          return empty();
        })
        let spy2 = spyOn(newKweekService,"addNewKweek").and.callFake(()=>{
          return empty();
        })
        component.selectedImage = "aaa";
        component.addKweek();
        expect(spy).toHaveBeenCalled();
      })

      

    })
  })
});
