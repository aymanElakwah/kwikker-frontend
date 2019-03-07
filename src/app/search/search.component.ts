import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string ;
  arabic = /[\u0600-\u06FF]/; // arabic range of unicode
   ltr: boolean;
  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.ltr = true;
    this.search = this.route.snapshot.queryParamMap.get('filterBy');
    if ( this.search === '' || this.search === null ) {
      this.router.navigate(['/home']);
    } else if (this.arabic.test(this.search)) {
      this.ltr = false;
    }
  }
}
