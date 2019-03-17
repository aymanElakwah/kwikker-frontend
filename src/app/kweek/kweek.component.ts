import { Component, OnInit } from "@angular/core";
import { DataService } from '../services/data.service';
import { Kweek } from '../model/kweek';

@Component({
  selector: "app-kweek",
  templateUrl: "./kweek.component.html",
  styleUrls: ["./kweek.component.css"]
})
export class KweekComponent implements OnInit {
  kweeks: Kweek[] = [
    {
      "id": "1",
      "created_at": "2011-04-11T10:20:30Z",
      "text": "hello world",
      "media_url": "https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png",
      "user": {
        "userName": "ayy_abdulrahman",
        "screenName": "Abdulrahman Khalid",
        "birthDate": new Date(),
        "profilePicUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "following": true,
        "followsYou": true,
        "blocked": false,
        "muted": false,
        "joinedDate": new Date(),
        "bannerUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "Bio": "AnyThing",
        "followersCount": 100,
        "followingCount": 100,
        "kweeksCount": 100,
        "likesCount": 100
      },
      "mentions": [
        {
          "username": "string",
          "indices": [
            0, 3
          ]
        }
      ],
      "hashtags": [
        {
          "id": "string",
          "indices": [
            0, 4
          ]
        }
      ],
      "number_of_likes": 1,
      "number_of_rekweeks": 2,
      "number_of_replies": 3,
      "reply_to": "string",
      "rekweek_info": {
        "rekweeker_name": "string",
        "rekweeker_username": "string"
      },
      "liked_by_user": true,
      "rekweeked_by_user": true
    },
    {
      "id": "1",
      "created_at": "2011-04-11T10:20:30Z",
      "text": "hello world",
      "media_url": "",
      "user": {
        "userName": "ayy_abdulrahman",
        "screenName": "Abdulrahman Khalid",
        "birthDate": new Date(),
        "profilePicUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "following": true,
        "followsYou": true,
        "blocked": false,
        "muted": false,
        "joinedDate": new Date(),
        "bannerUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "Bio": "AnyThing",
        "followersCount": 100,
        "followingCount": 100,
        "kweeksCount": 100,
        "likesCount": 100
      },
      "mentions": [
        {
          "username": "string",
          "indices": [
            0, 3
          ]
        }
      ],
      "hashtags": [
        {
          "id": "string",
          "indices": [
            0, 4
          ]
        }
      ],
      "number_of_likes": 2,
      "number_of_rekweeks": 0,
      "number_of_replies": 0,
      "reply_to": "string",
      "rekweek_info": {
        "rekweeker_name": "string",
        "rekweeker_username": "string"
      },
      "liked_by_user": false,
      "rekweeked_by_user": false
    },
    {
      "id": "1",
      "created_at": "2011-04-11T10:20:30Z",
      "text": "hello world",
      "media_url": "https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png",
      "user": {
        "userName": "ayy_abdulrahman",
        "screenName": "Abdulrahman Khalid",
        "birthDate": new Date(),
        "profilePicUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "following": true,
        "followsYou": true,
        "blocked": false,
        "muted": false,
        "joinedDate": new Date(),
        "bannerUrl": "https://pbs.twimg.com/profile_images/1030601937115381760/tYVfVdN__400x400.jpg",
        "Bio": "AnyThing",
        "followersCount": 100,
        "followingCount": 100,
        "kweeksCount": 100,
        "likesCount": 100
      },
      "mentions": [
        {
          "username": "string",
          "indices": [
            0, 3
          ]
        }
      ],
      "hashtags": [
        {
          "id": "string",
          "indices": [
            0, 4
          ]
        }
      ],
      "number_of_likes": 1,
      "number_of_rekweeks": 2,
      "number_of_replies": 3,
      "reply_to": "string",
      "rekweek_info": {
        "rekweeker_name": "string",
        "rekweeker_username": "string"
      },
      "liked_by_user": true,
      "rekweeked_by_user": true
    },

  ];

  createDates: Date[];
  constructor(private kweekService: DataService) { }

  ngOnInit() {
    // this.kweekService.getKweeks("").subscribe(
    //   lists=>{this.kweeks = lists;}
    // );
  }
  
}
