import { Component, Input , OnInit } from '@angular/core';
import { Trend } from '../../model/Trend';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

/** 
 * Trends Components is Used To Show Trends Bar in The whole Website (Shared Component)
 */
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})


export class TrendsComponent implements OnInit {
  
  /** 
   * Array of Tredns Used to Store The Trends Data
   * 
   * */
  trends:Trend[];

  
   /**
   * Trends Constructor
   * 
   * @param trendsService DataService Parameter To Send Request getting The First 10 Trends To show
   * 
   * @param router to navigate to search component
   *  
   */
  constructor(private trendsService: DataService,
              private router:Router) { }

  /**
   * ngOnInit is used to start the process of Sending request to get Trends
   * 
   */
  ngOnInit() 
  {
    //Get The first 10 trends [Hashtags , Number Of Kweeks]
    this.trendsService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )
  }

    
  /**
   * Open Home Page When Kiwkker Logo is Clicked
   */

  openHomePage() {
    this.router.navigate(['/home/']);
  }


   /**
   * When The User Click On Some Trend , This Function will navigate To The Search Page
   * @param trend The Searched Trend
   */
  searchForTrend(trend:Trend){
    const filterBy = trend.text.slice(1,trend.text.length);
    const id = trend.id;
    this.router.navigate(['/search'], { queryParams: { filterBy: filterBy , src:'hash' , ID:id}, })
  }
}
