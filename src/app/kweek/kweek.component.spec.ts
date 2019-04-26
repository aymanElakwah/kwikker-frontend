import { TestBed } from "@angular/core/testing";

import { Observable, from, of, empty } from "rxjs";
import { KweekComponent } from "./kweek.component";
import { KweeksService } from "../services/kweeks.service";
import { DataService } from "../services/data.service";

describe("KweekComponent", () => {
  let dataService: DataService;
  let kweeksService: KweeksService;
  let component: KweekComponent;
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
      parent: {
        firstChild: {
          routeConfig: {
            path: String
          }
        },
        routeConfig: {
          path: String
        }
      }
    }
  };

  beforeEach(() => {
    dataService = new DataService(null, null);
    kweeksService = new KweeksService(dataService);
    component = new KweekComponent(
      dataService,
      kweeksService,
      route,
      null,
      null
    );
    component.route = route; 
    component.busyRequest = false;
  });

  describe("ngOnInit", () => {
    it("should make callCommonFunc false if it isnot the user profile kweeks", () => {
      component.route.snapshot.root.children[0].params["username"] = "user1";
      component.authorizedUser = "user2";
      component.route.snapshot.parent.firstChild.routeConfig.path = "kweeks";

      component.ngOnInit();

      expect(component.callCommonFunc).toBeTruthy();

      component.route.snapshot.parent.firstChild.routeConfig.path = "";

      component.ngOnInit();

      expect(component.callCommonFunc).toBeTruthy();
    });

    it("should make callCommonFunc false if it is the user profile kweeks", () => {
      component.route.snapshot.root.children[0].params["username"] = "user1";
      component.authorizedUser = "user1";
      component.route.snapshot.parent.firstChild.routeConfig.path = "kweeks";

      component.ngOnInit();

      expect(component.callCommonFunc).toBeFalsy();

      component.route.snapshot.parent.firstChild.routeConfig.path = "";

      component.ngOnInit();

      expect(component.callCommonFunc).toBeFalsy();
    });

    let arrHome: any = [1, 2];
    let arrProfileKweeks: any = [4, 5, 6];
    let arrProfileLikes: any = [7, 8, 9, 10];
    let arrSearch: any = [11, 12, 13, 14];

    it("should get home kweeks if route path was home", () => {
      let spy = spyOn(dataService, "getHomeKweeks").and.callFake(() => {
        return from([arrHome]);
      });

      component.route.snapshot.parent.routeConfig.path = "home";

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.kweeks).toBe(arrHome);
    });

    it("should get home kweeks if route path was profile/:username/kweeks", () => {
      component.route.snapshot.parent.routeConfig.path = "profile/:username";
      component.route.snapshot.parent.firstChild.routeConfig.path = "";
      let spy = spyOn(dataService, "getUserKweeks").and.callFake(() => {
        return from([arrProfileKweeks]);
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.kweeks.length).toBe(arrProfileKweeks.length);

      component.route.snapshot.parent.firstChild.routeConfig.path = "kweeks";

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.kweeks).toBe(arrProfileKweeks);
    });

    it("should get prfile likes if route path was profile/:username/likes", () => {
      component.route.snapshot.parent.routeConfig.path = "profile/:username";
      component.route.snapshot.parent.firstChild.routeConfig.path = "likes";
      let spy = spyOn(dataService, "getUserLikedKweeks").and.callFake(() => {
        return from([arrProfileLikes]);
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
      expect(component.kweeks).toBe(arrProfileLikes);
    });
  });

  describe("likeDecision function", () => {
    let kWK_ARR: any[];
    beforeEach(() => {
      kWK_ARR = [
        { id: 1, liked_by_user: false, number_of_likes: 3 },
        { id: 2, liked_by_user: false, number_of_likes: 3 },
        { id: 1, liked_by_user: false, number_of_likes: 3 }
      ];
      component.kweeks = kWK_ARR;
      component.busyRequest = false;
    });

    it("should call like kweek from kweeksService if callCommonFunc is true", () => {
      component.callCommonFunc = true;
      let spy = spyOn(kweeksService, "like").and.callFake(() => {
        component.kweeks[0].liked_by_user = true;
        component.kweeks[0].number_of_likes++;
        return empty();
      });

      component.likeDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalled();
      expect(component.kweeks[0].number_of_likes).toBe(4);
      expect(component.kweeks[0].liked_by_user).toBeTruthy();
    });

    it("should call likeKweek from dataService if callCommonFunc is false", () => {
      component.callCommonFunc = false;
      let spy = spyOn(dataService, "likeKweek").and.callFake(() => {
        return empty();
      });

      component.likeDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0].id);

      component.likeCallBack(component.kweeks[0]);

      expect(component.kweeks[0].number_of_likes).toBe(4);
      expect(component.kweeks[0].liked_by_user).toBeTruthy();

      expect(component.kweeks[2].number_of_likes).toBe(4);
      expect(component.kweeks[2].liked_by_user).toBeTruthy();
    });
  });

  describe("unlikeDecision function", () => {
    let kWK_ARR: any[];
    beforeEach(() => {
      kWK_ARR = [
        { id: 1, liked_by_user: true, number_of_likes: 3 },
        { id: 2, liked_by_user: false, number_of_likes: 3 },
        { id: 1, liked_by_user: true, number_of_likes: 3 }
      ];
      component.kweeks = kWK_ARR;
      component.busyRequest = false;
    });

    it("should call unlike kweek from kweeksService if callCommonFunc is true", () => {
      let spy = spyOn(kweeksService, "unlike").and.callFake(() => {
        component.callCommonFunc = true;
        component.kweeks[0].liked_by_user = false;
        component.kweeks[0].number_of_likes--;
        return empty();
      });

      component.unlikeDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0]);
      expect(component.kweeks[0].number_of_likes).toBe(2);
      expect(component.kweeks[0].liked_by_user).toBeFalsy();
    });

    it("should call unlikeKweek from dataService if callCommonFunc is false", () => {
      component.callCommonFunc = false;
      let spy = spyOn(dataService, "unlikeKweek").and.returnValue(empty());

      component.unlikeDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0].id);

      component.unlikeCallBack(component.kweeks[0]);

      expect(component.kweeks[0].number_of_likes).toBe(2);
      expect(component.kweeks[0].liked_by_user).toBeFalsy();

      expect(component.kweeks[2].number_of_likes).toBe(2);
      expect(component.kweeks[2].liked_by_user).toBeFalsy();
    });
  });

  describe("rekweekDecision function", () => {
    let kWK_ARR: any[];
    beforeEach(() => {
      kWK_ARR = [
        { id: 1, rekweeked_by_user: false, number_of_rekweeks: 3 },
        { id: 2, rekweeked_by_user: false, number_of_rekweeks: 3 }
      ];
      component.kweeks = kWK_ARR;
      component.busyRequest = false;
    });

    it("should call rekweek kweek from kweeksService if callCommonFunc is true", () => {
      component.callCommonFunc = true;
      let spy = spyOn(kweeksService, "rekweek").and.callFake(() => {
        component.kweeks[0].rekweeked_by_user = true;
        component.kweeks[0].number_of_rekweeks++;
        return;
      });

      component.rekweekDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0]);
      expect(component.kweeks[0].number_of_rekweeks).toBe(4);
      expect(component.kweeks[0].rekweeked_by_user).toBeTruthy();
    });

    it("should call rekweekKweek from dataService if callCommonFunc is false", () => {
      component.callCommonFunc = false;

      let spy = spyOn(dataService, "rekweekKweek").and.returnValue(empty());

      component.rekweekDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0].id);

      component.rekweekCallBack(component.kweeks[0]);

      expect(component.kweeks[0].number_of_rekweeks).toBe(4);
      expect(component.kweeks[0].rekweeked_by_user).toBeTruthy();

      expect(component.kweeks.length).toBe(3);
    });
  });

  describe("unrekweekDecision function", () => {
    let kWK_ARR: any[];
    beforeEach(() => {
      kWK_ARR = [
        {
          id: 1,
          rekweeked_by_user: true,
          number_of_rekweeks: 3,
          rekweek_info: true
        },
        {
          id: 2,
          rekweeked_by_user: false,
          number_of_rekweeks: 3,
          rekweek_info: null
        },
        {
          id: 1,
          rekweeked_by_user: true,
          number_of_rekweeks: 3,
          rekweek_info: null
        }
      ];

      component.kweeks = kWK_ARR;
      component.busyRequest = false;
    });

    it("should call unrekweek kweek from kweeksService if callCommonFunc is true", () => {
      component.callCommonFunc = true;
      let spy = spyOn(kweeksService, "unrekweek").and.callFake(() => {
        component.kweeks[0].rekweeked_by_user = false;
        component.kweeks[0].number_of_rekweeks--;
        return empty();
      });

      component.unrekweekDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0]);

      expect(component.kweeks[0].number_of_rekweeks).toBe(2);
      expect(component.kweeks[0].rekweeked_by_user).toBeFalsy();
    });

    it("should call unrekweekKweek from dataService if callCommonFunc is false", () => {
      component.callCommonFunc = false;
      let spy = spyOn(dataService, "unrekweekKweek").and.callFake(() => {
        return empty();
      });

      component.unrekweekDecision(component.kweeks[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0].id);

      component.unrekweekCallBack(component.kweeks[0]);

      //because first element is removed and index 1 be 0 and 2 be 1
      expect(component.kweeks[1].number_of_rekweeks).toBe(2);
      expect(component.kweeks[1].rekweeked_by_user).toBeFalsy();
      expect(component.kweeks.length).toBe(2);
    });
  });

  describe("delete fucntion", () => {
    let kWK_ARR: any[];
    beforeEach(() => {
      kWK_ARR = [{ id: 1 }, { id: 2 }, { id: 1 }];
      component.kweeks = kWK_ARR;
      component.busyRequest = false;
    });

    it("should call deleteKweek from dataService", () => {
      let kWK_ARR: any[] = [{ id: 1 }, { id: 2 }, { id: 1 }];
      let spy = spyOn(dataService, "deleteKweek").and.callFake(() => {
        component.kweeks.splice(component.kweeks.indexOf(kWK_ARR[0]), 1);
        return empty();
      });

      component.delete(kWK_ARR[0]);

      expect(spy).toHaveBeenCalledWith(component.kweeks[0].id);
    });

    it("should call deleteKweek from dataService if callCommonFunc is true and delete only this kweek", () => {
      component.deleteCallBack(component.kweeks[0]);

      expect(component.kweeks.length).toBe(2);
    });

    it("should call deleteKweek from dataService if callCommonFunc is false and delete kweeks with same id from array", () => {
      component.deleteProfileCallBack(component.kweeks[0]);

      expect(component.kweeks.length).toBe(1);
    });
  });
});
