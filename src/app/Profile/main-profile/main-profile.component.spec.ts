import { MainProfileComponent } from './main-profile.component';
import { DataService } from "../../services/data.service";
import { from } from "rxjs";
import { User } from "../../model/user";



describe('MainProfileComponent', () => {
  let dataService: DataService;
  let component: MainProfileComponent;
  let route: any = {
    snapshot: {
      paramMap: 
      {
        username: String,
        get(): String
        {
          return this.username;
        }
      }
    }
  };

  beforeEach(() => {
    dataService = new DataService(null, null);
    component = new MainProfileComponent(
      dataService,
      route,
      null,
      null,
      null
    );
    component.route = route;
  });
  
  describe("ngOnInit", () => {

    let ProfileInfo: User = {
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
  };

    it("should get User Info", () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });

      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      expect(component.profileUser).toBe(ProfileInfo);
    });

    it("shouldn't change ImageUrl", () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });

      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.profileUser.profile_image_url = 
      "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/picture/profile.jpg";

      component.profileUser.profile_banner_url = 
      "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/banner/banner.jpg";

      component.ngOnInit();

      expect(component.profileUser.profile_image_url == 
        "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/picture/profile.jpg")
        .toBeTruthy();

        expect(component.profileUser.profile_banner_url == 
          "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/banner/banner.jpg")
          .toBeTruthy();
    });

    it("should change ImageUrl", () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });

      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.profileUser.profile_image_url = 
      "URL";

      component.profileUser.profile_banner_url = 
      "URL";

      component.ngOnInit();

      expect(component.profileUser.profile_image_url == "URL")
        .toBeFalsy();

        expect(component.profileUser.profile_banner_url == "URL")
        .toBeFalsy();
    });
  })


  describe("isAuthorisedUser", () => {

      it("is Authorised User must return false if username != cached username", () => {
        component.route.snapshot.paramMap["username"] = "User1";
        component.authorizedUser = "User2";
        expect( component.isAuthorisedUser()).toBeFalsy();
      });
   

      it("is Authorised User must return true if username == cached username", () => {
        component.route.snapshot.paramMap["username"] = "User1";
        component.authorizedUser = "User1";
        expect( component.isAuthorisedUser()).toBeFalsy();
      });
    });

    describe("isProfilePictureDefault", () => {

      let ProfileInfo: User = {
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
    };

      it('sholud return true', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
  
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
  
        component.profileUser.profile_image_url = 
        "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/picture/profile.jpg";
         expect( component.isProfilePictureDefault() ).toBeTruthy();
      });

      it('sholud return false', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
  
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
  
        component.profileUser.profile_image_url = 
        "URL";
         expect( component.isProfilePictureDefault() ).toBeFalsy();
      });
    });

    describe("isProfileBannerDefault", () => {

      let ProfileInfo: User = {
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
    };

      it('sholud return true', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
  
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
  
        component.profileUser.profile_banner_url = 
        "http://kwikkerbackend.eu-central-1.elasticbeanstalk.com/user/upload/banner/banner.jpg"
         expect( component.isProfileBannerDefault() ).toBeTruthy();
      });

      it('sholud return false', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
  
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
  
        component.profileUser.profile_banner_url = 
        "URL";
         expect( component.isProfileBannerDefault() ).toBeFalsy();
      });
    });

    describe("removeProfilePicture", () => {
      let ProfileInfo: User = {
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
    };

    let ReturnedValue:any;

    it('should return Profile Picture to its default value', () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();

      component.profileUser.profile_image_url = "URL";
      let spy2 = spyOn(dataService, "removeProfilePicture").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.removeProfilePicture();
      expect(spy2).toHaveBeenCalled();
      expect( component.profileUser.profile_image_url ).toBe(component.defaultProfilePicture);
     });

    });

    describe("removeProfilePicture", () => {
      let ProfileInfo: User = {
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
    };

    let ReturnedValue:any;

    it('should return Profile Banner to its default value', () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      component.profileUser.profile_banner_url = "URL";
      let spy2 = spyOn(dataService, "removeBanner").and.callFake(() => {
        return from([ReturnedValue]);
      });

      component.removeProfileBanner();
      expect(spy2).toHaveBeenCalled();
      expect( component.profileUser.profile_banner_url ).toBe(component.defaultProfileBanner);
     });
    });

    describe("toggleEditingMode", () => {
      it('should make Editing Mode => true', () => {
        component.toggleEditingMode();
        expect( component.isEditingMode).toBeTruthy();
      });
      it('should make Editing Mode => false', () => {
       component.isEditingMode = true;
        component.toggleEditingMode();
        expect( component.isEditingMode).toBeFalsy();
      });
    });

    describe("togglesemiBlockedMode", () => {
      it('should make Semi-Block Mode => true', () => {
        component.togglesemiBlockedMode();
        expect(component.semiBlockedMode).toBeTruthy();
      });
      it('should make Semi-Block Mode => false', () => {
        component.semiBlockedMode = true;
        component.togglesemiBlockedMode();
        expect(component.semiBlockedMode).toBeFalsy();
      });
    });

    
    describe("toggleFollow", () => {
      let ProfileInfo: User = {
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
    };
    let ReturnedValue:any;
      it('should make Following => true', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.following = false;
        const Followers = component.profileUser.followers_count;
        let spy2 = spyOn(dataService, "followUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleFollow();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.following).toBeTruthy();
        expect( component.profileUser.followers_count).toBe(Followers +1);
      });

      it('should make Following => false', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.following = true;
        const Followers = component.profileUser.followers_count;
        let spy2 = spyOn(dataService, "unfollowUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleFollow();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.following).toBeFalsy();
        expect( component.profileUser.followers_count).toBe(Followers - 1);
      });
    });

    describe("toggleMute", () => {
      let ProfileInfo: User = {
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
    };
    let ReturnedValue:any;
      it('should make Muted => true', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.muted = false;
        let spy2 = spyOn(dataService, "muteUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleMute();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.muted).toBeTruthy();
        expect( component.muteMode).toBeTruthy();
      });

      it('should make Muted => false', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.muted = true;
        let spy2 = spyOn(dataService, "unmuteUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleMute();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.muted).toBeFalsy();
        expect( component.muteMode).toBeTruthy();
      });
    });

    describe("toggleBlock", () => {
      let ProfileInfo: User = {
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
    };
    let ReturnedValue:any;
      it('should make Following => true', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.blocked= false;
        let spy2 = spyOn(dataService, "blockUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleBlock();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.blocked).toBeTruthy();
        expect( component.profileUser.following).toBeFalsy();
        expect( component.profileUser.follows_you).toBeFalsy();
        expect( component.semiBlockedMode).toBeFalsy();
      });

      it('should make Blocked => false', () => {
        component.route.snapshot.paramMap["username"] = "User1";
        let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
          return from([ProfileInfo]);
        });
        component.ngOnInit();
        expect(spy).toHaveBeenCalled();
        component.profileUser.blocked = true;
        let spy2 = spyOn(dataService, "unblockUser").and.callFake(() => {
          return from([ReturnedValue]);
        });

        component.toggleBlock();
        expect(spy2).toHaveBeenCalled();
        expect( component.profileUser.blocked).toBeFalsy();
        expect( component.profileUser.following).toBeFalsy();
        expect( component.profileUser.follows_you).toBeFalsy();
        expect( component.semiBlockedMode).toBeFalsy();
      });
    });

    describe("updateProfile", () => {
      let ProfileInfo: User = {
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
    };
    let ReturnedValue:any;
    it('should not change Profile Info', () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      component.editedScreenName = "";
      const ScreenName: string = component.profileUser.screen_name;
      const Bio:string =component.profileUser.bio;

      component.updateProfile();
      expect(component.profileUser.screen_name).toBe( ScreenName);
      expect(component.profileUser.bio).toBe(Bio);
    });

    it('should change Profile Info', () => {
      component.route.snapshot.paramMap["username"] = "User1";
      let spy = spyOn(dataService, "getProfileInfo").and.callFake(() => {
        return from([ProfileInfo]);
      });
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
      component.editedScreenName = "SName";
      component.editedBio = "Bio";
      let spy2 = spyOn(dataService, "updateProfile").and.callFake(() => {
        return from([ReturnedValue]);
      });
     
      component.updateProfile();
      expect(spy2).toHaveBeenCalled();
      expect(component.profileUser.screen_name).toBe( "SName");
      expect(component.profileUser.bio).toBe("Bio");
    });

    });


    it('should create', () => {
      expect(component).toBeTruthy();
    });

});

