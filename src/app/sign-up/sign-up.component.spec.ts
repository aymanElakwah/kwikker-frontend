import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { DataService } from '../services/data.service';

describe('Signup Component', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let dataService: DataService;
  let route: any = {
    snapshot: {
      root: {
        children: [
          {
            params: {
              username: String
            }
          }
        ]
      },
      url:[
        {
            path: String
        }
      ],
      queryParams: {
        filterBy: String
      }
    }
  };


  beforeEach(() => {
    dataService = new DataService(null, null,null);
    component = new SignUpComponent(dataService,route);

    component.bar2 =  document.querySelector('.secondProgress');
    component.bar3 =  document.querySelector('.thirdProgress');
    component.fs1=  document.querySelector('.fs1');
    component.fs2=  document.querySelector('.fs2');
    component.fs3 =  document.querySelector('.fs3');
    component.cool =  document.querySelector('.progress');
    component.errorOccured =  document.querySelector('.errorOccured');
    component.errorOccured2 =  document.querySelector('.errorOccured2');
    component.errorOccured3 =  document.querySelector('.errorOccured3');
    component.errorOccured4 =  document.querySelector('.errorOccured4');
    });




  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("redesignDateFormat Function", () => {
    it('It should rewrite the date in a new format', () => {
            const result  = component.redesignDateFormat("Sun Jan 01 2011");
            const result2  = component.redesignDateFormat("Sun Feb 01 2011");
            const result3  = component.redesignDateFormat("Sun Jan 01 2011");
            const result4  = component.redesignDateFormat("Sun Jan 05 2011");
            const result5  = component.redesignDateFormat("Sun Feb 05 2011");
            const result6  = component.redesignDateFormat("Sun Mar 05 2011");
            const result7  = component.redesignDateFormat("Mon Apr 01 2011");
            const result8  = component.redesignDateFormat("Tue Apr 02 2011");
            const result9  = component.redesignDateFormat("Wed Apr 03 2011");
            const result10  = component.redesignDateFormat(null);

            //Test the year
            expect(result).toContain("2011");    
            expect(result2).toContain("2011");    
            expect(result3).toContain("2011");
            //Test the month
            expect(result4).toContain("1");
            expect(result5).toContain("2");
            expect(result6).toContain("3"); 
            //Test the day
            expect(result7).toContain("1");
            expect(result8).toContain("2");
            expect(result9).toContain("3"); 
            //Null values
            expect(result10).toBeNull(); 
          });
  });

});
