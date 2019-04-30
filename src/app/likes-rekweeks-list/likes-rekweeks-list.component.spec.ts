import { LikesRekweeksListComponent } from "./likes-rekweeks-list.component";
import { from } from "rxjs";
import { DataService } from "../services/data.service";

describe("LikesRekweeksListComponent", () => {
  let component: LikesRekweeksListComponent;
  let dataService: DataService;
  beforeEach(() => {
    dataService = new DataService(null, null);
    component = new LikesRekweeksListComponent(dataService);
  });
  describe("ngOnInit", () => {
    let kWK_ARR: any;
    let MINI_USERS_LIKERS: any[];
    let MINI_USERS_REKWEEKERS : any[];
    beforeEach(() => {
      kWK_ARR = { id: 1, liked_by_user: false, number_of_likes: 3 };
      component.clickedKweek = kWK_ARR;
      MINI_USERS_LIKERS = [
        {
          username: "abdo98",
          screen_name: "abdulrahman",
          profile_image_url: "abdulrahman.png",
          following: true,
          follows_you: false,
          blocked: false,
          muted: false,
          bio: "hello world"
        },
        {
          username: "yousef",
          screen_name: "yousef",
          profile_image_url: "yousef.png",
          following: true,
          follows_you: true,
          blocked: false,
          muted: false,
          bio: "hello my name is yousef"
        }
      ];

      MINI_USERS_REKWEEKERS = [
        {
          username: "yousef",
          screen_name: "yousef",
          profile_image_url: "yousef.png",
          following: true,
          follows_you: true,
          blocked: false,
          muted: false,
          bio: "hello my name is yousef"
        }
      ];

    });
    
    it("should call kweekLikers from dataService when likers is true", () => {
      component.likers = true;
      let spy = spyOn(dataService, "kweekLikers").and.callFake(() => {
        return from([MINI_USERS_LIKERS]);
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.users).toBe(MINI_USERS_LIKERS);
    });

    it("should call kweekRekweekers from dataService when likers is false", () => {
      component.likers = false;
      let spy = spyOn(dataService, "kweekRekweekers").and.callFake(() => {
        return from([MINI_USERS_REKWEEKERS]);
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.users).toBe(MINI_USERS_REKWEEKERS);
    });

  });
});
