import { Component, Input , OnInit } from '@angular/core';
import { Trend } from '../../model/Trend';
import { DataService } from 'src/app/services/data.service';

/**
 * Trends Components is Used To Show Trends Bar in The whole Website "Shared Component"
 */
@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})


export class TrendsComponent implements OnInit {
  
  /* Array of Tredns */
  trends:Trend[] = [];

  
   /**
   * @param trendsService DataService Parameter To Send Request getting
   *  The First 10 Trends To show
   */
  constructor(private trendsService: DataService) { }

  /**
   * ngOnInit is used to start the process of Sending request to get Trends
   */
  ngOnInit() 
  {
    //Get The first 10 trends [Hashtags , Number Of Kweeks]
    this.trendsService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )
  }

}
