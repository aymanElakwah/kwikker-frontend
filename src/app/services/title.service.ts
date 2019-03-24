import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * title service is injected in app module as all component are using it
 */
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  /**
   * service constructor
   * @param titleService built in service for configuering the title
   */
  constructor(private titleService: Title) { }
  /**
   * set the title for general pages
   * @param page the name of the routed page
   */
  setTitlePages(page: string): void {
    switch (page) {
      case('Moments'): {
        this.titleService.setTitle('Today - kwikker moments');
        break;
      }
      default: {
        this.titleService.setTitle('kwikker');
        break;
      }
    }
  }

  /**
   * set title for profile
   * @param name the username of the profile owner
   * @param id the id of the profile owner
   */
  setTitleProfile(name: string, id: String): void {
    this.titleService.setTitle(`${name} (@${id}) | kwikker`);
  }

  /**
   * set the title for opened tweets
   * @param name screen name of the owner
   * @param body the first characters body string of the tweet
   */
  setTitleTweets(name: string , body: string): void {
    this.titleService.setTitle(`${name} on kwikker : "${body}"`);
  }
  /**
   * set the title for searching pages
   * @param name the filterBy name
   */
  setTitleSearch(name: string) {
    this.titleService.setTitle(`${name} - kwikker search`);
  }
}
