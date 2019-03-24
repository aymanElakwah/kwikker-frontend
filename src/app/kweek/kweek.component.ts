
import { Component, OnInit } from '@angular/core';
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

  /*
   * constructor called when component is made
   * @param kweekService to use DataService functions and deal with backend
   * @param route to use snapshot from the url to know which URL you are in
   * No @return
  */
  constructor(private kweekService: DataService, private route: ActivatedRoute) {}

   /**
   * function called after all intialization in constuctor used here to determine which kweeks to retreive
   * No Parameters
   * No reurn
  */
  ngOnInit() {

   /* this.kweekService.getKweeks('', '').subscribe(lists => {
      this.kweeks = lists;
      this.injectTagsInText();
    });*/

    // This part will be updated
    this.KweeksType();
    const userName = this.route.snapshot.params['username'];
    if (this.routeChildName === 'kweeks' || this.routeChildName === '' ) {
      this.kweekService.getUserKweeks(userName , null).subscribe
      ( usersInfo => {
        this.kweeks = usersInfo;
        this.injectTagsInText();
      } );
    } else if (this.routeChildName === 'likes') {
      this.kweekService.getUserLikedKweeks(userName , null).subscribe
      ( usersInfo => {
        this.kweeks = usersInfo;
        this.injectTagsInText();
      } );
    } else {
      this.kweekService.getKweeks().subscribe(lists => {
        this.kweeks = lists;
        this.injectTagsInText();
      });
    }
  }

  // will be Updated
  KweeksType(): void {
    if (this.route.snapshot.firstChild != null) {
       this.routeChildName = this.route.snapshot.children[0].toString();
    }
  }

  /**
   * inject tags before and after mentions or hashtags and inject the redirection link foreach one of them
   * No Parameters
   * @returns void
  */
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
                     // both start and end is used in slice function to get string from start index to end index
        if (
          // first if there is no mentions or hashtags left take the rest of string till the end
          iMentions === kweek.mentions.length &&
          iHashtags === kweek.hashtags.length
        ) {
          end = kweek.text.length;
          str += kweek.text.slice(start, end);
          break;
        } else if (
          // second if there both mentions and hashtags exists
          iMentions !== kweek.mentions.length &&
          iHashtags !== kweek.hashtags.length
        ) { // if the start index stopped on a mention do the injection of tags and mention
          if (start === kweek.mentions[iMentions].indices[0]) {
            end = kweek.mentions[iMentions].indices[1];
            iMentions += 1;
            const sliceStr = kweek.text.slice(start + 1, end);
            str +=
              this.mentionStartTagOpen + '/profile/' + sliceStr + this.startTagClose
              + '@' + sliceStr + this.endTag;
          } else if (start === kweek.hashtags[iHashtags].indices[0]) {
            // if the start index stopped on a hashtag do the injection of tags and hashtag
            end = kweek.hashtags[iHashtags].indices[1];
            iHashtags += 1;
            const sliceStr = kweek.text.slice(start, end);
            str +=
              this.hashtagStartTagOpen + '/search/people?filterBy='
              + sliceStr + '&src=hash' + this.startTagClose + sliceStr + this.endTag;
          } else if (
            // if the start index not on a hashtag nor mention so I need to know which one is my end index to slice the string correctlly
            // if the hashtag comes first make it the end index to slice
            // else the mention comes first do the same
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
          // if there is only mentions and regular string
          // loop and add them respectivly
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
            // if there is only hashtags and regular string
            // loop and add them respectivly
            while (iHashtags !== kweek.hashtags.length) {
              if (start === kweek.hashtags[iHashtags].indices[0]) {
                end = kweek.mentions[iHashtags].indices[1];
                iHashtags += 1;
                const sliceStr = kweek.text.slice(start, end);
                str +=
                  this.hashtagStartTagOpen + '/search/people?filterBy='
                  + sliceStr + '&src=hash' + this.startTagClose + sliceStr + this.endTag;
              } else {
                end = kweek.mentions[iHashtags].indices[0];
                str += kweek.text.slice(start, end);
              }
              start = end;
            }
          }
          // add the rest of the kweek to str
          end = kweek.text.length;
          str += kweek.text.slice(start, end);
          break;
        }
      }
      kweek.text = str; // finally make the kweek text equals the injected str
    });
  }
}
