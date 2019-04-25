import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TitleService } from '../services/title.service';
/**
 * search component
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string ;
  arabic = /[\u0600-\u06FF]/; // arabic range of unicode
   ltr: boolean;
   isHashed: string;
   hashId:string;
   mySubscription:any;
   /**
    *
    * @param route activated route to get filter by paramter
    * @param router to route to other components
    * @param tabService set page title
    */
  constructor(private route: ActivatedRoute, private router: Router, private tabService: TitleService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
   }
  /**
   * call test search and set title functions
   */
  ngOnInit() {
    this.ltr = true;
    this.testSearchingParams();
    this.tabService.setTitleSearch(this.search);
  }

  /**
   * testing search paramters to check if it is arabic or null
   */
  testSearchingParams(): void {
    //subscribe to activated route

    this.search = this.route.snapshot.queryParamMap.get('filterBy');
    this.isHashed = this.route.snapshot.queryParamMap.get('src');
    this.hashId = this.route.snapshot.queryParamMap.get('ID'); 
    if ( this.search === '' || this.search === null ) {
      this.router.navigate(['/home']);
    } else if (this.arabic.test(this.search)) {
      this.ltr = false;
    }
    if (this.isHashed === 'hash') {
      if(this.search[0]!='#'){
        this.search = '#' + this.search;
      }
    }
  }
}
