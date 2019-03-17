import { Component, Input , OnInit } from '@angular/core';
import { Trend } from '../../model/Trend';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  
  /* Array of Tredns: Input from MainProfileComponent */
  @Input() trends:Trend[] = [];
  constructor() { }

  ngOnInit() {
  }

}
