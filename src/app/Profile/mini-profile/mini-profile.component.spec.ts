import { MiniProfileComponent } from './mini-profile.component';
import { DataService } from "../../services/data.service";
import { from } from "rxjs";
import { User } from "../../model/user";


describe('MiniProfileComponent', () => {
  let component: MiniProfileComponent;
  let dataService: DataService;
  let route: any = {
    snapshot: {
      root: {
        children: [
          {
            params: {
              username: String
            }
          }
        ]
      },
      url:[
        {
            path: String
        }
      ],
      queryParams: {
        filterBy: String
      }
    }
  };

  beforeEach(() => {
    dataService = new DataService(null, null);
    component = new MiniProfileComponent(
      dataService,
      route,
      null,
      null
    );
    component.route = route;
  });

  describe("ngOnInit", () => {

    let FolloWersOrFollowings: User[];

    it("should get Followers", () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    it("should get Followings", () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowings").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "following";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    
    it("should Search User", () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "searchUsers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "AnyThing";
      component.route.snapshot.queryParams["filterBy"] = "User1";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });
  });

  
  describe("toggleFollow", () => {
    let FolloWersOrFollowings: User[]= [{
      username: "",
      screen_name: "",
      bio:
        "",
      birth_date: new Date(),
      created_at: new Date(),
      profile_image_url: null,
      profile_banner_url: null,
      following: false,
      follows_you: false,
      followers_count: 0,
      following_count: 0,
      kweeks_count: 0,
      likes_count: 0,
      blocked: false,
      muted: false
  }];

    let ReturnedValue:any;

    it('should make Following => true', () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].following = false;
      let spy2 = spyOn(dataService, "followUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleFollow(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].following).toBeTruthy();
    });

    it('should make Following => false', () => {
       component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].following = true;
      let spy2 = spyOn(dataService, "unfollowUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleFollow(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].following).toBeFalsy();
    });
  });

  describe("toggleMute", () => {
    let FolloWersOrFollowings: User[]= [{
      username: "",
      screen_name: "",
      bio:
        "",
      birth_date: new Date(),
      created_at: new Date(),
      profile_image_url: null,
      profile_banner_url: null,
      following: false,
      follows_you: false,
      followers_count: 0,
      following_count: 0,
      kweeks_count: 0,
      likes_count: 0,
      blocked: false,
      muted: false
  }];

    let ReturnedValue:any;

    it('should make Muted => true', () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].muted = false;
      let spy2 = spyOn(dataService, "muteUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleMute(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].muted).toBeTruthy();
      expect(component.muteModes[0]).toBeTruthy();
    });

    it('should make Muted => false', () => {
       component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].muted = true;
      let spy2 = spyOn(dataService, "unmuteUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleMute(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].muted).toBeFalsy();
      expect(component.muteModes[0]).toBeTruthy();
    });
  });


  describe("toggleBlock", () => {
    let FolloWersOrFollowings: User[]= [{
      username: "",
      screen_name: "",
      bio:
        "",
      birth_date: new Date(),
      created_at: new Date(),
      profile_image_url: null,
      profile_banner_url: null,
      following: false,
      follows_you: false,
      followers_count: 0,
      following_count: 0,
      kweeks_count: 0,
      likes_count: 0,
      blocked: false,
      muted: false
  }];

    let ReturnedValue:any;

    it('should make Blocked => true', () => {
      component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].blocked = false;
      let spy2 = spyOn(dataService, "blockUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleBlock(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].blocked).toBeTruthy();
    });

    it('should make Blocked => false', () => {
       component.route.snapshot.root.children[0].params['username'] = "User1";
      let spy = spyOn(dataService, "getUserFollowers").and.callFake(() => {
        return from([FolloWersOrFollowings]);
      });
      component.route.snapshot.url[0].path = "followers";
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.miniCardProfileUsers[0].blocked = true;
      let spy2 = spyOn(dataService, "unblockUser").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.toggleBlock(0);
      expect(spy2).toHaveBeenCalled();
      expect( component.miniCardProfileUsers[0].blocked).toBeFalsy();
    });
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
