import { Component, Input , OnInit } from '@angular/core';
import { Trend } from '../../model/Trend';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  
  /* Array of Tredns: Input from MainProfileComponent */
  trends:Trend[] = [];

  constructor(private trendsService: DataService) { }

  ngOnInit() 
  {
    this.trendsService.getTrends().subscribe
    ( trendsInfo => {this.trends = trendsInfo; } )
  }

}
