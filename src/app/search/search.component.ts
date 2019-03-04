import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string ;
  arabic = /[\u0600-\u06FF]/; // arabic range of unicode
   ltr: boolean;
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.ltr = true;
    this.search = this.route.snapshot.queryParamMap.get('filterBy');
    if (this.arabic.test(this.search)) {
      this.ltr = false;
    }
  }
}
