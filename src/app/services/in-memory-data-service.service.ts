import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    //const ARR = [];
    const profileUserTest = 
    {
      userName: "Ahmed Mahmoud",
      screenName: "Ahmed_Mahmoud14",
      Bio: "Play the best of EA for $4.99 a month! EA Access brings you great games for a great price with The Vault, an evolving collection of EA games for Xbox One!",
      birthDate: Date.now(),
      joinedDate: Date.now(),
      profilePicUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
      bannerUrl: "https://www.gstatic.com/webp/gallery/1.jpg",
      following: false,
      followsYou: true,
      followersCount: 2000,
      followingCount: 248,
      kweeksCount: 244,
      likesCount: 155,
      blocked: false,
      muted: false
    };

    const trendsTest = [
      {
        Id: 1,
        Text: "#Detective_Conan",
        NumberOfKweeks: 458
      },
      {
        Id: 2,
        Text: "#Cairo",
        NumberOfKweeks: 458
      },
      {
        Id: 3,
        Text: "#Egypt",
        NumberOfKweeks: 458
      },
      {
        Id: 4,
        Text: "تحيا_مصر",
        NumberOfKweeks: 742
      },
      {
        Id: 5,
        Text: "الأهلى_بطل_مصر",
        NumberOfKweeks: 754
      },
      {
        Id: 16,
        Text: "#Fasting",
        NumberOfKweeks: 155
      },
      {
        Id: 7,
        Text: "New Zeland",
        NumberOfKweeks: 999
      },
      {
        Id: 8,
        Text: "#ALZamalek",
        NumberOfKweeks: 305
      },
      {
        Id: 9,
        Text: "#Ralph_breaks_the_Internet",
        NumberOfKweeks: 2000
      },
      {
        Id: 10,
        Text: "#Avengers",
        NumberOfKweeks: 458
      }
    ];
    
    return {trendsTest, profileUserTest};
           
  }
}
