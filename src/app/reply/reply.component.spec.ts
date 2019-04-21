import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReplyComponent } from "./reply.component";
import { DataService } from "../services/data.service";
import { KweeksService } from "../services/kweeks.service";
import { Observable, from, empty } from "rxjs";
import { MatDialogRef } from "@angular/material";

describe("ReplyComponent", () => {
  let dataService: DataService;
  let kweeksService: KweeksService;
  let component: ReplyComponent;
  let mockDialogRef = jasmine.createSpyObj(["close"]);
  beforeEach(() => {
    dataService = new DataService(null);
    kweeksService = new KweeksService(dataService);
    component = new ReplyComponent(
      mockDialogRef,
      dataService,
      kweeksService,
      null,
      null
    );
    component.busyRequest = false;
  });

  describe("ngOnInit function", () => {
    it("should call getKweekReplies from dataService and load its replies", () => {
      const replies: any = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const KWKS: any = [{ id: 4 }, { id: 5 }];
      component.clickedKweek = KWKS[0];
      let spy = spyOn(dataService, "getKweekReplies").and.callFake(() => {
        return from([replies]);
      });

      component.ngOnInit();

      expect(spy).toHaveBeenCalledWith(component.clickedKweek.id);
      expect(component.replies).toBe(replies);
    });
  });

  describe("like funcion", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [
        { id: 1, liked_by_user: false, number_of_likes: 1 },
        { id: 2, liked_by_user: false, number_of_likes: 23 },
        { id: 3, liked_by_user: false, number_of_likes: 15 }
      ];
      component.busyRequest = false;
    });

    it("should call like from kweekService and like reply", () => {
      component.replies = KWK_ARR;
      let spy = spyOn(kweeksService, "like").and.callFake(() => {
        component.replies[0].liked_by_user = true;
        component.replies[0].number_of_likes++;
        return empty();
      });

      component.like(component.replies[0]);

      expect(spy).toHaveBeenCalledWith(component.replies[0]);
      expect(component.replies[0].liked_by_user).toBeTruthy();
      expect(component.replies[0].number_of_likes).toBe(2);
    });

    it("should call like from kweekService and like clickedKweek", () => {
      component.clickedKweek = KWK_ARR[0];
      let spy = spyOn(kweeksService, "like").and.callFake(() => {
        component.clickedKweek.liked_by_user = true;
        component.clickedKweek.number_of_likes++;
        return empty();
      });

      component.like(component.clickedKweek);

      expect(spy).toHaveBeenCalledWith(component.clickedKweek);
      expect(component.clickedKweek.liked_by_user).toBeTruthy();
      expect(component.clickedKweek.number_of_likes).toBe(2);
    });

    it("should call like from kweekService and like root", () => {
      component.roots = KWK_ARR;
      let spy = spyOn(kweeksService, "like").and.callFake(() => {
        component.roots[0].liked_by_user = true;
        component.roots[0].number_of_likes++;
        return empty();
      });

      component.like(component.roots[0]);

      expect(spy).toHaveBeenCalledWith(component.roots[0]);
      expect(component.roots[0].liked_by_user).toBeTruthy();
      expect(component.roots[0].number_of_likes).toBe(2);
    });
  });

  describe("unlike funcion", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [
        { id: 1, liked_by_user: true, number_of_likes: 1 },
        { id: 2, liked_by_user: false, number_of_likes: 23 },
        { id: 3, liked_by_user: true, number_of_likes: 15 }
      ];
      component.busyRequest = false;
    });

    it("should call unlike from kweekService and unlike reply", () => {
      component.replies = KWK_ARR;
      let spy = spyOn(kweeksService, "unlike").and.callFake(() => {
        component.replies[0].liked_by_user = false;
        component.replies[0].number_of_likes--;
        return empty();
      });

      component.unlike(component.replies[0]);

      expect(spy).toHaveBeenCalledWith(component.replies[0]);
      expect(component.replies[0].liked_by_user).toBeFalsy();
      expect(component.replies[0].number_of_likes).toBe(0);
    });

    it("should call unlike from kweekService and unlike clickedKweek", () => {
      component.clickedKweek = KWK_ARR[0];
      let spy = spyOn(kweeksService, "unlike").and.callFake(() => {
        component.clickedKweek.liked_by_user = false;
        component.clickedKweek.number_of_likes--;
        return empty();
      });

      component.unlike(component.clickedKweek);

      expect(spy).toHaveBeenCalledWith(component.clickedKweek);
      expect(component.clickedKweek.liked_by_user).toBeFalsy();
      expect(component.clickedKweek.number_of_likes).toBe(0);
    });

    it("should call unlike from kweekService and unlike root", () => {
      component.roots = KWK_ARR;
      let spy = spyOn(kweeksService, "unlike").and.callFake(() => {
        component.roots[0].liked_by_user = false;
        component.roots[0].number_of_likes--;
        return empty();
      });

      component.unlike(component.roots[0]);

      expect(spy).toHaveBeenCalledWith(component.roots[0]);
      expect(component.roots[0].liked_by_user).toBeFalsy();
      expect(component.roots[0].number_of_likes).toBe(0);
    });
  });

  describe("rekweek funcion", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [
        { id: 1, rekweeked_by_user: false, number_of_rekweeks: 1 },
        { id: 2, rekweeked_by_user: false, number_of_rekweeks: 23 },
        { id: 3, rekweeked_by_user: false, number_of_rekweeks: 15 }
      ];
      component.busyRequest = false;
    });

    it("should call rekweek from kweekService and rekweek reply", () => {
      component.replies = KWK_ARR;
      let spy = spyOn(kweeksService, "rekweek").and.callFake(() => {
        component.replies[0].rekweeked_by_user = true;
        component.replies[0].number_of_rekweeks++;
        return empty();
      });

      component.rekweek(component.replies[0]);

      expect(spy).toHaveBeenCalledWith(component.replies[0]);
      expect(component.replies[0].rekweeked_by_user).toBeTruthy();
      expect(component.replies[0].number_of_rekweeks).toBe(2);
    });

    it("should call rekweek from kweekService and rekweek clickedKweek", () => {
      component.clickedKweek = KWK_ARR[0];
      let spy = spyOn(kweeksService, "rekweek").and.callFake(() => {
        component.clickedKweek.rekweeked_by_user = true;
        component.clickedKweek.number_of_rekweeks++;
        return empty();
      });

      component.rekweek(component.clickedKweek);

      expect(spy).toHaveBeenCalledWith(component.clickedKweek);
      expect(component.clickedKweek.rekweeked_by_user).toBeTruthy();
      expect(component.clickedKweek.number_of_rekweeks).toBe(2);
    });

    it("should call rekweek from kweekService and rekweek root", () => {
      component.roots = KWK_ARR;
      let spy = spyOn(kweeksService, "rekweek").and.callFake(() => {
        component.roots[0].rekweeked_by_user = true;
        component.roots[0].number_of_rekweeks++;
        return empty();
      });

      component.rekweek(component.roots[0]);

      expect(spy).toHaveBeenCalledWith(component.roots[0]);
      expect(component.roots[0].rekweeked_by_user).toBeTruthy();
      expect(component.roots[0].number_of_rekweeks).toBe(2);
    });
  });

  describe("unrekweek funcion", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [
        { id: 1, rekweeked_by_user: true, number_of_rekweeks: 1 },
        { id: 2, rekweeked_by_user: false, number_of_rekweeks: 23 },
        { id: 3, rekweeked_by_user: true, number_of_rekweeks: 15 }
      ];
      component.busyRequest = false;
    });

    it("should call unrekweek from kweekService and unrekweek reply", () => {
      component.replies = KWK_ARR;
      let spy = spyOn(kweeksService, "unrekweek").and.callFake(() => {
        component.replies[0].rekweeked_by_user = false;
        component.replies[0].number_of_rekweeks--;
        return empty();
      });

      component.unrekweek(component.replies[0]);

      expect(spy).toHaveBeenCalledWith(component.replies[0]);
      expect(component.replies[0].rekweeked_by_user).toBeFalsy();
      expect(component.replies[0].number_of_rekweeks).toBe(0);
    });

    it("should call unrekweek from kweekService and unrekweek clickedKweek", () => {
      component.clickedKweek = KWK_ARR[0];
      let spy = spyOn(kweeksService, "unrekweek").and.callFake(() => {
        component.clickedKweek.rekweeked_by_user = false;
        component.clickedKweek.number_of_rekweeks--;
        return empty();
      });

      component.unrekweek(component.clickedKweek);

      expect(spy).toHaveBeenCalledWith(component.clickedKweek);
      expect(component.clickedKweek.rekweeked_by_user).toBeFalsy();
      expect(component.clickedKweek.number_of_rekweeks).toBe(0);
    });

    it("should call unrekweek from kweekService and unrekweek root", () => {
      component.roots = KWK_ARR;
      let spy = spyOn(kweeksService, "unrekweek").and.callFake(() => {
        component.roots[0].rekweeked_by_user = false;
        component.roots[0].number_of_rekweeks--;
        return empty();
      });

      component.unrekweek(component.roots[0]);

      expect(spy).toHaveBeenCalledWith(component.roots[0]);
      expect(component.roots[0].rekweeked_by_user).toBeFalsy();
      expect(component.roots[0].number_of_rekweeks).toBe(0);
    });
  });

  describe("deleteRoot_ClickedKweek function", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [{ id: 1 }, { id: 2 }, { id: 3 }];
      component.busyRequest = false;
    });

    it("should call deletekweek from dataService, delete clickedKweek and close dialog", () => {
      component.clickedKweek = KWK_ARR[0];
      let spy = spyOn(dataService, "deleteKweek").and.callFake(() => {
        component.dialogRef.close();
        return empty();
      });

      component.deleteRoot_ClickedKweek(component.clickedKweek);

      expect(spy).toHaveBeenCalledWith(component.clickedKweek.id);
      expect(component.dialogRef.close).toHaveBeenCalled();
    });

    it("should call deletekweek from dataService, delete root kweek and close dialog", () => {
      component.roots = KWK_ARR;
      let spy = spyOn(dataService, "deleteKweek").and.callFake(() => {
        component.dialogRef.close();
        return empty();
      });

      component.deleteRoot_ClickedKweek(component.roots[0]);

      expect(spy).toHaveBeenCalledWith(component.roots[0].id);
      expect(component.dialogRef.close).toHaveBeenCalled();
    });
  });

  describe("deleteReply function", () => {
    let KWK_ARR: any[];
    beforeEach(() => {
      KWK_ARR = [{ id: 1 }, { id: 2 }, { id: 3 }];
      component.busyRequest = false;
    });

    it("should call deletekweek from dataService, delete reply kweek", () => {
      component.replies = KWK_ARR;
      let spy = spyOn(dataService, "deleteKweek").and.callFake(() => {
        const indexToDelete = component.replies.indexOf(component.replies[0]);
        component.replies.splice(indexToDelete, 1);
        return empty();
      });

      component.deleteReply(component.replies[0]);

      expect(spy).toHaveBeenCalledWith(1); 
      expect(component.replies.length).toBe(2);
    });
  });
});
