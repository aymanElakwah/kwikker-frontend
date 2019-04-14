import { Injectable } from '@angular/core';
import { Kweek } from '../model/kweek';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class KweeksService {
  /**
   * No Params
   * No Return
   */
  constructor(private kweekService: DataService) { }
    /**
   * inject tags before and after mentions or hashtags and inject the redirection link foreach one of them
   * No Parameters
   * @returns void
   */
  injectTagsInText(kweeks: Kweek[]): void {
    const hashtagStartTagOpen = '<a href=\'';
    const mentionStartTagOpen = '<a href=\'';
    const startTagClose = '\'>';
    const endTag = '</a>';
    kweeks.forEach(kweek => {
      let iMentions = 0;
      let iHashtags = 0;
      let str = '';
      let start = 0;
      let end = 0;
      while (true) {
      // The function is looping until the injection completion
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
        ) {
          // if the start index stopped on a mention do the injection of tags and mention
          if (start === kweek.mentions[iMentions].indices[0]) {
            end = kweek.mentions[iMentions].indices[1];
            iMentions += 1;
            const sliceStr = kweek.text.slice(start + 1, end);
            str +=
              mentionStartTagOpen +
              '/profile/' +
              sliceStr +
              startTagClose +
              '@' +
              sliceStr +
              endTag;
          } else if (start === kweek.hashtags[iHashtags].indices[0]) {
            // if the start index stopped on a hashtag do the injection of tags and hashtag
            end = kweek.hashtags[iHashtags].indices[1];
            iHashtags += 1;
            const sliceStr = kweek.text.slice(start, end);
            str +=
              hashtagStartTagOpen +
              '/search/people?filterBy=' +
              sliceStr +
              '&src=hash' +
              startTagClose +
              sliceStr +
              endTag;
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
                  mentionStartTagOpen +
                  '/profile/' +
                  sliceStr +
                  startTagClose +
                  '@' +
                  sliceStr +
                  endTag;
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
                  hashtagStartTagOpen +
                  '/search/people?filterBy=' +
                  sliceStr +
                  '&src=hash' +
                  startTagClose +
                  sliceStr +
                  endTag;
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

  like(kweek: Kweek): void {
    kweek.liked_by_user = !kweek.liked_by_user;
    kweek.liked_by_user ?  kweek.number_of_likes++ : kweek.number_of_likes--;
    this.kweekService.likeOrUnlikeKweek(kweek.id).subscribe();
  }

  rekweek(kweek: Kweek): void {
    kweek.rekweeked_by_user = !kweek.rekweeked_by_user;
    kweek.rekweeked_by_user ?  kweek.number_of_rekweeks++ : kweek.number_of_rekweeks--;
    this.kweekService.rekweekOrUnrekweekKweek(kweek.id).subscribe();
  }
}
