
import { Component, OnInit, Input } from "@angular/core";
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kweek',
  templateUrl: './kweek.component.html',
  styleUrls: ['./kweek.component.css']
})
export class KweekComponent implements OnInit {

  kweeks: Kweek[] = [];

  /* route children name which based on it, The right request will be sent */
  public routeChildName: string;

  hashtagStartTagOpen: String = '<a href=\'';
  mentionStartTagOpen: String = '<a href=\'';
  startTagClose = '\'>';
  endTag: String = '</a>';

  constructor(private kweekService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
    //This part will be updated
    this.KweeksType();
    let userName = this.route.snapshot.params['username'];
    if(this.routeChildName == 'kweeks' || this.routeChildName == '' )
    {
      this.kweekService.getUserKweeks(userName ,null).subscribe
      ( usersInfo => {
        this.kweeks = usersInfo; 
        this.injectTagsInText(); 
      } )
    }

    else if (this.routeChildName == 'likes')
    {
      this.kweekService.getUserLikedKweeks(userName ,null).subscribe
      ( usersInfo => {
        this.kweeks = usersInfo; 
        this.injectTagsInText();
      } )
    }
    else
    {
      this.kweekService.getKweeks('', '').subscribe(lists => {
        this.kweeks = lists;
        this.injectTagsInText();
      });
    }
  }

  //will be Updated
  KweeksType(): void
  {
    if (this.route.snapshot.firstChild != null)
    {
       this.routeChildName = this.route.snapshot.children[0].toString();
    }
  }

  injectTagsInText(): void {
    this.kweeks.forEach(kweek => {
      let iMentions = 0;
      let iHashtags = 0;
      let str = '';
      let start = 0;
      let end = 0;
      // The function is looping until the injection completion
      while (true) {
        start = end; // There is two indices jumps on the string charcters
                    // both start and end is used
        if (
          iMentions === kweek.mentions.length &&
          iHashtags === kweek.hashtags.length
        ) {
          end = kweek.text.length;
          str += kweek.text.slice(start, end);
          break;
        } else if (
          iMentions !== kweek.mentions.length &&
          iHashtags !== kweek.hashtags.length
        ) {
          if (start === kweek.mentions[iMentions].indices[0]) {
            end = kweek.mentions[iMentions].indices[1];
            iMentions += 1;
            const sliceStr = kweek.text.slice(start + 1, end);
            str +=
              this.mentionStartTagOpen + '/profile/' + sliceStr + this.startTagClose
              + '@' + sliceStr + this.endTag;
          } else if (start === kweek.hashtags[iHashtags].indices[0]) {
            end = kweek.hashtags[iHashtags].indices[1];
            iHashtags += 1;
            const sliceStr = kweek.text.slice(start, end);
            str +=
              this.hashtagStartTagOpen + '/search/people?filterBy='
              + sliceStr + this.startTagClose + sliceStr + this.endTag;
          } else if (
            kweek.hashtags[iHashtags].indices[0] <
            kweek.mentions[iMentions].indices[0]
          ) {
            end = kweek.hashtags[iHashtags].indices[0];
            str += kweek.text.slice(start, end);
          } else {
            end = kweek.mentions[iMentions].indices[0];
            str += kweek.text.slice(start, end);
          }
        } else {
          if (iMentions !== kweek.mentions.length) {
            while (iMentions !== kweek.mentions.length) {
              if (start === kweek.mentions[iMentions].indices[0]) {
                end = kweek.mentions[iMentions].indices[1];
                iMentions += 1;
                const sliceStr = kweek.text.slice(start + 1, end);
                str +=
                  this.mentionStartTagOpen + '/profile/' + sliceStr + this.startTagClose
                  + '@' + sliceStr + this.endTag;
              } else {
                end = kweek.mentions[iMentions].indices[0];
                str += kweek.text.slice(start, end);
              }
              start = end;
            }
          } else {
            while (iHashtags !== kweek.hashtags.length) {
              if (start === kweek.hashtags[iHashtags].indices[0]) {
                end = kweek.mentions[iHashtags].indices[1];
                iHashtags += 1;
                const sliceStr = kweek.text.slice(start, end);
                str +=
                  this.hashtagStartTagOpen + '/search/people?filterBy='
                  + sliceStr + this.startTagClose + sliceStr + this.endTag;
              } else {
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
}
