import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private titleService: Title) { }

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

  setTitleProfile(name: string, id: String): void {
    this.titleService.setTitle(`${name} (@${id}) | kwikker`);
  }

  setTitleTweets(name: string , body: string): void {
    this.titleService.setTitle(`${name} on kwikker : "${body}"`);
  }
}
