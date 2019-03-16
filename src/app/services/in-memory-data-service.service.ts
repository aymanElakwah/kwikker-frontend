import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const ARR = [{
      id: "adasdas",
      created_at: new Date(),
      type: "LIKE",
      usernmae: "ahmedasd",
      screen_name: "olaa",
      kweek_id: "asdasdasd",
      kweek_text: "sjahdasd ashduis dihsd iushds dishduish dshd sdshdd",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      id: "adasdsdas",
      created_at: new Date(),
      type: "REKWEEK",
      usernmae: "ahmedasd",
      screen_name: "jimmy",
      kweek_id: "asdasdasd",
      kweek_text: "fffffffffff f f f fffffffff fff f f fffffffsdffffdfff  ",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      id: "adasdsdas",
      created_at: new Date(),
      type: "FOLLOW",
      usernmae: "ahmedasd",
      screen_name: "jimmy",
      kweek_id: "asdasdasd",
      kweek_text: "fffffffffff f f f fffffffff fff f f fffffffffff  ",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      id: "adasdsdas",
      created_at: new Date(),
      type: "REKWEEK",
      usernmae: "ahmedasd",
      screen_name: "jimmy",
      kweek_id: "asdasdasd",
      kweek_text: "fffffffffff f f f ffffffsdsdfff fff f f sdsffffflsdlksjdlksjdklsjdlkddfdfddddddddggggdfdfdfdfdffffff  ",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      id: "adasdsdas",
      created_at: new Date(),
      type: "REKWEEK",
      usernmae: "ahmedasd",
      screen_name: "jimmy",
      kweek_id: "asdasdasd",
      kweek_text: "fffffffffff f f f fffffffff fff f f fffffffffff  ",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    },
    {
      id: "adasdsdas",
      created_at: new Date(),
      type: "REKWEEK",
      usernmae: "ahmedasd",
      screen_name: "jimmy",
      kweek_id: "asdasdasd",
      kweek_text: "11111111111111111111111333333344444444444",
      profie_pic_URL: "https://www.w3schools.com/images/w3schools_green.jpg",
    }
    ];
    return {ARR};
  }
}
