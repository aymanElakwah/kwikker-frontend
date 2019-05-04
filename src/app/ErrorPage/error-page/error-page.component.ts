import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 * The Error Page , if anything Wrong happened 
 * It should be navigated To this Page
 * 
 */
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  /**
   *  The Value That the User want To Search About 
   * */
  filterBy: string;

     
  /**
   * Error Page Constructor 
   * 
   * @param router  Service that used To Naviagte To Search Page
   * 
   */
  constructor(private router: Router) { }

  /**
   * Empty ngOnInit
   */
  ngOnInit() {

  }

  /**
   * After each char send new request or navigate
   */
  newSearch() {
    this.router.navigate(['/search'] , { queryParams: { filterBy: this.filterBy } });
  }

}
