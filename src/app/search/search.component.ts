import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   /**
    *
    * @param route activated route to get filter by paramter
    * @param router to route to other components
    * @param tabService set page title
    */
  constructor(private route: ActivatedRoute, private router: Router, private tabService: TitleService) { }
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
    this.search = this.route.snapshot.queryParamMap.get('filterBy');
    this.isHashed = this.route.snapshot.queryParamMap.get('src');
    if ( this.search === '' || this.search === null ) {
      this.router.navigate(['/home']);
    } else if (this.arabic.test(this.search)) {
      this.ltr = false;
    }
    if (this.isHashed === 'hash') {
      this.search = '#' + this.search;
    }
  }
}
