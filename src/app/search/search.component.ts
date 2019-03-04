import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.search = this.route.snapshot.queryParamMap.get('filterBy');
  }

}
