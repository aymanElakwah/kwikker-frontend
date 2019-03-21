import { Component, OnInit, Input } from "@angular/core";
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';
import { text } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: "app-kweek",
  templateUrl: "./kweek.component.html",
  styleUrls: ["./kweek.component.css"]
})
export class KweekComponent implements OnInit {
  
  @Input() kweeks: Kweek[] = [];
  
  firstTagHashtag: string = "<a href='' class='Hashtag' (click)='searchHashtag(innerHTML)'>"
  endTag: string = "</a>"
  firstTagMention: string = "<a href='' class='Mention'>"

  // firstTagHashtag: string = "<button type='button' class='btn btn-link p-0' (click)='searchHashtag(innerHTML)'>";
  // endTag: string = "</button>";
  // firstTagMention: string = "<button type='button' class='btn btn-link p-0'>";
  // test:string = "Hello<button type='button' class='btn btn-link p-0' (click)='searchHashtag(innerHTML)'>profile</button>Hello";

  constructor(private kweekService: DataService, private router: Router) { }

  ngOnInit() {
    this.kweekService.getKweeks('', '').subscribe(
      lists=>{this.kweeks = lists;}
   );
    this.manageText();
  }
  
  manageText(): void {
    this.kweeks.forEach(kweek => {
      let iMentions = 0;
      let iHashtags = 0;
      let str = "";
      let start = 0;
      let end = 0;
      while(true) {
        start = end;
        if(iMentions === kweek.mentions.length && iHashtags === kweek.hashtags.length) {
          end = kweek.text.length;
          str += kweek.text.slice(start, end);
          break;
        } else if(iMentions !== kweek.mentions.length && iHashtags !== kweek.hashtags.length) {
          if(start === kweek.mentions[iMentions].indices[0]) { 
            end = kweek.mentions[iMentions].indices[1];
            iMentions += 1;
            str += this.firstTagMention + kweek.text.slice(start, end) + this.endTag;
          } else if(start === kweek.hashtags[iHashtags].indices[0]){
            end = kweek.hashtags[iHashtags].indices[1];
            iHashtags += 1;
            str += this.firstTagHashtag + kweek.text.slice(start, end) + this.endTag;
          } else if(kweek.hashtags[iHashtags].indices[0] < kweek.mentions[iMentions].indices[0]) {
            end = kweek.hashtags[iHashtags].indices[0];
            str += kweek.text.slice(start, end);  
          } else {
            end = kweek.mentions[iMentions].indices[0];
            str += kweek.text.slice(start, end);  
          }
        } else {
          if(iMentions !== kweek.mentions.length) {
            while(iMentions !== kweek.mentions.length) {
              if(start === kweek.mentions[iMentions].indices[0]) {
                end = kweek.mentions[iMentions].indices[1];
                iMentions += 1;
                str += this.firstTagMention + kweek.text.slice(start, end) + this.endTag;    
              }
              else {
                end = kweek.mentions[iMentions].indices[0];
                str += kweek.text.slice(start, end);
              }
              start = end;
            }
          } else{ 
            while(iHashtags !== kweek.hashtags.length) {
              if(start === kweek.hashtags[iHashtags].indices[0]) {
                end = kweek.mentions[iHashtags].indices[1];
                iHashtags += 1;
                str += this.firstTagHashtag + kweek.text.slice(start, end) + this.endTag;
              }
              else {
                end = kweek.mentions[iHashtags].indices[0];
                str += kweek.text.slice(start, end);
              }
              start = end;
            }
          }
          end = kweek.text.length;
          str += kweek.text.slice(start, end);
          break;
        }
      }
      kweek.text = str;
    });
  }

  searchHashtag(str: string): void {
    this.router.navigate(['/search'], { queryParams: { filterBy: str } });
  }
}