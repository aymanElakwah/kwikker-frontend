import { AppPage } from './app.po';
import { utilityFunctions } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let utility: utilityFunctions;
  page = new AppPage();
  utility = new utilityFunctions(page);

  var user1 = "ahly";
  var pass1 = "123456";
  var user2 = "zamalek";
  var pass2 = "password";




  it('Sign up', () =>{
    utility.navigateToSignUp();
    utility.browserPause(100);

    page.getUsernameLoginField().sendKeys("e11");
    page.getEmailSignupField().sendKeys("e11@yahoo.com");
    page.getPasswordSignupField().sendKeys("Ee111111");
    page.getPasswordConfirmationSignupField().sendKeys("Ee111111");
    page.getNext1SignupButton().click();

    utility.browserPause(10);
    page.getScreenNameSignupField().sendKeys("ee11");
    page.getDatePickerSignupBoard().click();
    page.getDateDaySignupBoard().click();
    page.getNext2SignupButton().click();
    utility.browserPause(1000);
    expect(utility.getElementWithText('.fs-title', 'Thank you for using our app.').getText()).toEqual('Thank you for using our app.');
  });


  it('Login and logout', () =>{
    utility.navigateToLogin();
    utility.browserPause(1000);
    page.getUsernameLoginField().sendKeys('zamalek');
    page.getPasswordLoginField().sendKeys('password');
    page.getLoginButton().click();
    utility.browserPause(2000);
    page.getDropDownMenuButton().click();
    page.getLogoutButton().click();
    utility.browserPause(1000);
    expect(page.getCoverHeadingText().getText()).toEqual("Welcome to Kwikker");
  });


  it('Kweek', () => {
    utility.login(user1, pass1);
    let kweek = "E2E 7";
    page.getKweekButton().click();
    page.getWriteKweekField().sendKeys(kweek);
    utility.browserPause(1000);
    page.getSecondKweekButton().click();
    utility.browserPause(1000);
    utility.navigateToMyProfile();
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
    utility.logout();
  });

  it('Rekweek', () => {
    utility.login(user2, pass2);
    page.navigateToProfile(user1);
    let kweek = page.getFirstKweekText().getText();
    page.getRekweekButton(1).click();
    utility.browserPause(1000);
    utility.navigateToMyProfile();
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
    utility.logout();
  });

  it('Like', () => {
    utility.login(user2, pass2);
    page.navigateToProfile(user1);
    let kweek = page.getFirstKweekText().getText();
    page.getLikeButton(1).click();
    utility.browserPause(1000);
    page.navigateToLikes(user2);
    expect(utility.getElementWithText('p', kweek).getText()).toEqual(kweek);
    utility.logout();
  });




  it('Open profile', function() {
    utility.login(user2, pass2);
    page.getDropDownHomeToggle().click();
    page.getDropDownHomeToggleProfile().click();
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('zamalek');
  });


  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual(user2);
  });


////////////Following-Section///////////////////

it('Open profile, view my following', function() {
  page.navigateToFollowing(user2);
  page.browserPause(1000);
  expect(page.getProfileName().getText()).toEqual(user2);
});

  it('Open profile, view my following, Unfollow someone', function() {
    page.getMyFollowingButton().click();
    page.browserPause(1000);
    expect(page.getMyFollowButton().getText()).toEqual('Follow');
  });


  it('In following, follow someone', function() {
    page.getMyFollowButton().click();
    expect(page.getMyFollowingButton().getText()).toEqual('');
  });


  it('Use drop button, Mute him', function() {
    page.getMyDropDownButton().click();
    page.getMuteButton().click();
    page.getMyDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Unmute @ahly');
  });


  it('Use drop button, Unmute him', function() {
    page.getMuteButton().click();
    page.getMyDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @ahly');
  });


  it('Use drop button, Block him', function() {
    page.getBlockButton().click();
    page.getMyDropDownButton().click();
    page.browserPause(1000);
    expect(page.getBlockButton().getText()).toEqual('');
  });

  it('Unblock someone.', function() {
    page.browserPause(1000);
    page.getBlockedButton().click();
    expect(page.getMyFollowingButton().getText()).toEqual('Follow');
    page.getMyFollowingButton().click();
    page.getMyFollowButton().click();
  });


  it('View my following, Unfollow someone, And open his profile to check you unfollowed him', function() {
    page.getMyFollowingButton().click();
    page.navigateToProfile('ahly');
    page.browserPause(1000);
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
  });




  ////////////Followers-Section///////////////////


  it('Open profile, view my followers', function() {
    page.navigateToFollowers(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('zamalek');
  });


  ////////////likes-Section///////////////////



  it('Open profile, view my likes', function() {
    page.navigateToLikes(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('zamalek');
  });


//////////////////Edit-Section///////////////////////
/*
  it('Edit profile, change profile photo.', function() {
    //var currentImage = Storage.getItem('E:/youssef photos/PHOTOS/AAFR9688.JPG');
    page.getEditButton().click();
    page.getChangeProfilePictureButton().click();
    page.browserPause(1000);
    page.getChangeProfilePictureItems(0).click();
    page.browserPause(1000);
    page.getSelectItemButton().click();
    page.browserPause(5000);
    page.getPrompt();
  });
*/


   it('Edit profile, change screen name.', function() {
     page.browserPause(1000);
     page.getEditButton().click();
     page.getMyScreenName().clear();
     page.getMyScreenName().sendKeys('test');
     page.getSaveChangesButton().click();
     expect(page.getProfileName().getText()).toEqual('test');
   });

   it('Edit profile, change bio.', function() {
     page.getEditButton().click();
     page.getBio().clear();
     page.getBio().sendKeys('test');
     page.getSaveChangesButton().click();
     expect(page.getProfileBio().getText()).toEqual('test');
   });

   it('Edit profile, change bio ,change screen name then cancel changes.', function() {
     page.getEditButton().click();
     page.getMyScreenName().clear();
     page.getMyScreenName().sendKeys('no test');
     page.getBio().clear();
     page.getBio().sendKeys('no test');
     page.getCancelChangesButton().click();
     expect(page.getProfileName().getText()).toEqual('test');
     expect(page.getProfileName().getText()).toEqual('test');
     page.getEditButton().click();
     page.getMyScreenName().clear();
     page.getMyScreenName().sendKeys('zamalek');
     page.getBio().clear();
     page.getBio().sendKeys('zamalek bio');
     page.getSaveChangesButton().click();
   });

/*
   //////////////Profile-Trends/////////////


   it('Profile trends.', function() {
     page.getProfileTrends().click();
     page.browserPause(1000);
     expect(page.getSearchKeyWord().getText()).toContain('hashtag2_end');
   });
*/

/////////////////Follow--Unfollow--Mute--Unmute--Block--Unblock///////////////////////////

   it('Follow someone', function() {
     page.navigateToProfile('ahly');
     page.getHisFollowButton().click();
     page.browserPause(1000);
     expect(page.getHisFollowingButton().getText()).toEqual('');
   });

   it('Use drop button in someones profile, Mute him', function() {
     page.getHisDropDownButton().click();
     page.getMuteButton().click();
     page.getHisDropDownButton().click();
     expect(page.getMuteButton().getText()).toEqual('Unmute @ahly');
   });

   it('Use drop button in someones profile, Unmute him', function() {
     page.getMuteButton().click();
     page.getHisDropDownButton().click();
     expect(page.getMuteButton().getText()).toEqual('Mute @ahly');
   });


   it('Block him', function() {
     page.getBlockButton().click();
     expect(page.getBlockedButton().getText()).toEqual('');
   });

   it('Unblock someone ,Check you are not following him.', function() {
     page.getHisDropDownButton().click();
     page.getBlockedButton().click();
     page.getHisDropDownButton().click();
     expect(page.getBlockButton().getText()).toEqual('Block @ahly');
     expect(page.getHisFollowButton().getText()).toEqual('Follow');
   });


   it('Unfollow someone', function() {
     page.getHisFollowButton().click();
     page.getHisFollowingButton().click();
     expect(page.getHisFollowButton().getText()).toEqual('Follow');
     page.getHisFollowButton().click();
   });



//////////Message/////////////////

/*

  it('Message someone, send a text message', function() {
    page.navigateToHome();
    page.getNewMessage().click();
    //page.getBackButton().click();
    page.browserPause(2000);
    page.getNewMessageButton().click();
    page.getReciever().click();
    page.getNextButton().click();
    page.getChatBox().sendKeys('New message!');
    page.getSendButton().click();
    page.browserPause(1000);
    page.getRecentReciever().click();
    expect(page.getSentMsg().getText()).toEqual('New message');
  });
*/


////////////Search/////////////////////////

  it('Check search bar after typing any word.', function() {
    page.navigateToHome();
    page.getHomeSearchBox().sendKeys('zamalek');
    page.pressEnter();
    page.browserPause(2000);
    expect(page.getSearchBar().getText()).toContain('zamalek');
  });

  it('Search for a text.', function() {
    page.getSearchBox().sendKeys('barca');
    page.pressEnter();
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });

  it('Search for hashtag.', function() {
    page.getSearchBox().sendKeys('#barca');
    page.pressEnter();
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });

  it("Search for text with opened single quote.", function() {
    page.getSearchBox().sendKeys("'barca");
    page.pressEnter();
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });


  it('Search for a user, view latest section.', function() {
    page.getSearchBox().sendKeys('zamalek');
    page.pressEnter();
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('@zamalek');
    });

  it('Search for a user, view people section.', function() {
    page.navigateToSearchSections('people','zamalek');
    page.browserPause(1000);
    expect(page.getSearchProfileName().getText()).toContain('zamalek');
  });


  //////////Notifications/////////////////

  it('Check mention notification.', function() {
    page.navigateToNotifications('mentions');
    expect(page.getMentionNotificationText().getText()).toContain('@zamalek');
  });
/*
  it('View notifications, ALL section', function() {
    page.navigateToNotifications('all');
    page.browserPause(1000);
    expect(page.getAllButton().getText()).toEqual('All');
  });

  it('View notifications, ALL section, for user having rekweek or like', function() {
    page.browserPause(1000);
    page.getNotificationCard().getText().then(function(text) {
      expect(text.length).toEqual(0)
    });
  });


  it('Check like notification.', function() {
    page.getLike().click();
    page.navigateToNotifications('all');
    expect(page.getTypeNotificationText().getText()).toContain('liked');
  //  expect(page.getNotificationCard().getText()).toContain('@zamalek');
  });
*/
});
