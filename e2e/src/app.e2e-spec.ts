import { AppPage } from './app.po';
import { utilityFunctions } from './app.po';

describe('Kwikker E2E', () => {
  let page: AppPage;
  let utility: utilityFunctions;
  page = new AppPage();
  utility = new utilityFunctions(page);

  var user1 = "test_user1";
  var pass1 = "pass";
  var user2 = "dawood";
  var pass2 = "DaWood@123";

  it('Sign up', () =>{
    utility.navigateToSignUp();
    utility.browserPause(1000);

    page.getUsernameLoginField().sendKeys("ee11");
    page.getEmailSignupField().sendKeys("ee11@yahoo.com");
    page.getPasswordSignupField().sendKeys("Eee111111");
    page.getPasswordConfirmationSignupField().sendKeys("Eee111111");
    page.getNext1SignupButton().click();

    utility.browserPause(10);
    page.getScreenNameSignupField().sendKeys("eee11");
    page.getDatePickerSignupBoard().click();
    page.getDateDaySignupBoard().click();
    page.getNext2SignupButton().click();
    utility.browserPause(1000);
    expect(utility.getElementWithText('.fs-title', 'Thank you for using our app.').getText()).toEqual('Thank you for using our app.');
  });


  it('Login and logout', () =>{
    utility.navigateToLogin();
    utility.browserPause(1000);
    page.getUsernameLoginField().sendKeys(user1);
    page.getPasswordLoginField().sendKeys(pass1);
    page.getLoginButton().click();
    utility.browserPause(2000);
    page.getDropDownMenuButton().click();
    page.getLogoutButton().click();
    utility.browserPause(1000);
    expect(page.getCoverHeadingText().getText()).toEqual("Welcome to Kwikker");
  });

  it('Kweek', () => {
    utility.login(user1, pass1);
    let kweek = "E2E 10";
    page.getKweekButton().click();
    utility.browserPause(1000);
    page.getWriteKweekField().sendKeys(kweek);
    utility.browserPause(1000);
    utility.sendClick(page.getSecondKweekButton());
    utility.browserPause(1000);
    utility.navigateToMyProfile();
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
    utility.logout();
  });

  it('Rekweek', () => {
    utility.login(user2, pass2);
    page.navigateToProfile(user1);
    let kweek = page.getFirstKweekText().getText();
    utility.sendClick(page.getRekweekButton());
    utility.browserPause(1000);
    utility.navigateToMyProfile();
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
  });

  // it('Check Rekweek notification.', function() {
  //   utility.login(user1, pass1);
  //   utility.browserPause(1000);
  //   page.navigateToNotifications('all');
  //   expect(page.getUsernameFirstNotification().getText()).toContain('@' + user2);
  //   expect(page.getTypeNotificationText().getText()).toContain(' Rekweeked 🔁 your kweek');
  // });

  // it('Like', () => {
  //   page.navigateToProfile(user1);
  //   let kweek = page.getFirstKweekText().getText();
  //   utility.sendClick(page.getLikeButton());
  //   utility.browserPause(1000);
  //   page.navigateToLikes(user2);
  //   expect(utility.getElementWithText('p', kweek).getText()).toEqual(kweek);
  // });

  // it('Check like notification.', function() {
  //   page.getLike().click();
  //   page.navigateToNotifications('all');
  //   expect(page.getTypeNotificationText().getText()).toContain('liked');
  // });

  it('Reply', () => {
    let reply = 'E2E reply';
    page.navigateToProfile(user1);
    utility.sendClick(page.getReplyButton());
    utility.browserPause(1000);
    page.getWriteKweekField().sendKeys(reply);
    utility.browserPause(1000);
    utility.sendClick(page.getSecondKweekButton());
    utility.browserPause(1000);
    page.getFirstKweekText().click();
    expect(utility.getElementWithText('p', reply).getText()).toEqual('@' + user1 + ' ' + reply);
    page.navigateToHome();
    utility.logout();
  });

  it('Delete', () => {
    utility.login(user1, pass1);
    utility.navigateToMyProfile();
    page.getDeleteKweekx().click();
    utility.browserPause(1000);
    utility.sendClick(page.getDeleteKweekButton());
    utility.browserPause(1000);
  });

  it('Kweek To', () => {
    let kweek = 'Hi user';
    page.navigateToProfile(user2);
    page.getKweekToButton().click();
    utility.browserPause(1000);
    page.getWriteKweekField().sendKeys(kweek);
    utility.browserPause(1000);
    utility.sendClick(page.getSecondKweekButton());
    utility.browserPause(1000);
    page.navigateToKweeks(user1);
    expect(page.getFirstKweekText().getText()).toEqual('@' + user2 + ' ' + kweek);
    page.getDeleteKweekx().click();
    utility.browserPause(1000);
    utility.sendClick(page.getDeleteKweekButton());
    utility.browserPause(1000);
    utility.logout();
  });

  it('Settings', () => {
    let username1 = 'uname1';
    let password1 = 'Password1';
    let email1 = 'mymail10@mail.com';

    let username2 = 'uname1username';
    let password2 = 'Password2';
    let email2 = 'mymail20@mail.com';

    utility.login(username1, password1);

    page.getDropDownMenuButton().click();
    page.getSettingsButton().click();
    page.getCurrentPasswordField().sendKeys(password1);
    page.getEmailSettingsField().clear();
    page.getEmailSettingsField().sendKeys(email2);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());

    page.getUsernameSettingsField().clear();
    page.getUsernameSettingsField().sendKeys(username2);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());
    utility.browserPause(1000);

    page.getCurrentPasswordField().sendKeys(password1);
    page.getNewPasswordField().sendKeys(password2);
    page.getVerifyPasswordField().sendKeys(password2);
    utility.browserPause(1000);
    page.getChangePasswordSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());

    utility.logout();
    utility.login(username2, password2);

    page.getDropDownMenuButton().click();
    page.getSettingsButton().click();
    page.getCurrentPasswordField().sendKeys(password2);
    page.getEmailSettingsField().clear();
    page.getEmailSettingsField().sendKeys(email1);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());

    page.getUsernameSettingsField().clear();
    page.getUsernameSettingsField().sendKeys(username1);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());
    utility.browserPause(1000);

    page.getCurrentPasswordField().sendKeys(password2);
    page.getNewPasswordField().sendKeys(password1);
    page.getVerifyPasswordField().sendKeys(password1);
    utility.browserPause(1000);
    page.getChangePasswordSettingsButton().click();
    utility.browserPause(1000);
    utility.sendClick(page.getOkButton());

    utility.logout();
    expect(page.getCoverHeadingText().getText()).toEqual("Welcome to Kwikker");
  }, 2 * 60 * 1000);

  it('Open profile', function() {
    utility.login(user2, pass2);
    utility.navigateToMyProfile();
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('doda');
  });

  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('doda');
  });

////////////Following-Section///////////////////
  it('Open profile, view my following', function() {
    page.navigateToFollowing(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('doda');
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
    expect(page.getMuteButton().getText()).toEqual('Unmute @akwah');
  });

  it('Use drop button, Unmute him', function() {
    page.getMuteButton().click();
    page.getMyDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @akwah');
  });

  it('Use drop button, Block him', function() {
    utility.browserPause(1000);
    page.getBlockButton().click();
    page.getMyDropDownButton().click();
    page.browserPause(1000);
    expect(page.getUnblockButton().getText()).toEqual('Unblock @akwah');
  });

  it('Unblock someone.', function() {
    page.browserPause(1000);
    page.getBlockedButton().click();
    expect(page.getMyFollowButton().getText()).toEqual('Follow');
  });

  ////////////Followers-Section///////////////////
  it('Open profile, view my followers', function() {
    page.navigateToFollowers(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('doda');
  });

  ////////////likes-Section///////////////////
  it('Open profile, view my likes', function() {
    page.navigateToLikes(user2);
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('doda');
  });

//////////////////Edit-Section///////////////////////
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
    page.getMyScreenName().sendKeys('doda');
    page.getBio().clear();
    page.getBio().sendKeys('doda bio');
    page.getSaveChangesButton().click();
  });

  // //////////////Profile-Trends/////////////
  // //Zoom 90% Error
  // it('Profile trends.', function() {
  //   page.getProfileTrends().click();
  //   page.browserPause(1000);
  //   expect(page.getSearchKeyWord().getText()).toContain('hashtag2_end');
  // });


/////////////////Follow--Unfollow--Mute--Unmute--Block--Unblock///////////////////////////
  it('Follow someone', function() {
    page.navigateToProfile('akwah');
    page.getHisFollowButton().click();
    page.browserPause(1000);
    expect(page.getHisFollowingButton().getText()).toEqual('');
  });

  it('Use drop button in someones profile, Mute him', function() {
    page.getHisDropDownButton().click();
    page.getMuteButton().click();
    page.getHisDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Unmute @akwah');
  });

  it('Use drop button in someones profile, Unmute him', function() {
    page.getMuteButton().click();
    page.getHisDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @akwah');
  });

  it('Block him', function() {
    page.getBlockButton().click();
    expect(page.getBlockedButton().getText()).toEqual('');
  });

  it('Unblock someone ,Check you are not following him.', function() {
    page.getHisDropDownButton().click();
    page.getBlockedButton().click();
    page.getHisDropDownButton().click();
    expect(page.getBlockButton().getText()).toEqual('Block @akwah');
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
  });

  it('Unfollow someone', function() {
    page.getHisFollowButton().click();
    page.getHisFollowingButton().click();
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
    page.getHisFollowButton().click();
  });

// ////////////Search/////////////////////////
  it('Check search bar after typing any word.', function() {
    page.navigateToHome();
    page.getHomeSearchBox().sendKeys('zamalek');
    utility.pressEnter(page.getHomeSearchBox());
    page.browserPause(2000);
    expect(page.getSearchBar().getText()).toContain('zamalek');
  });

  it('Search for a text.', function() {
    page.getSearchBox().sendKeys('barca');
    utility.pressEnter(page.getSearchBox());
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });

  it('Search for hashtag.', function() {
    page.getSearchBox().sendKeys('#barca');
    utility.pressEnter(page.getSearchBox());
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });

  it("Search for text with opened single quote.", function() {
    page.getSearchBox().sendKeys("'barca");
    utility.pressEnter(page.getSearchBox());
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('barca');
  });
  
  it('Search for a user, view latest section.', function() {
    page.getSearchBox().sendKeys('zamalek');
    utility.pressEnter(page.getSearchBox());
    page.browserPause(2000);
    expect(page.getSearchKeyWord().getText()).toContain('@zamalek');
  });

  it('Search for a user, view people section.', function() {
    page.navigateToSearchSections('people','ayman');
    page.browserPause(1000);
    expect(page.getSearchProfileName().getText()).toContain('Ayman');
  });

  //////////Notifications/////////////////
  it('Check mention notification.', function() {
    page.navigateToNotifications('mentions');
    expect(page.getFirstKweekText().getText()).toContain('@dawood');
    utility.logout();
  });

 ///////////Direct Message/////////////////
  // it('Message someone, send a text message', function() {
  //   let message = "New message!";

  //   utility.login(user2, pass2);
  //   page.getNewMessage().click();
  //   page.browserPause(1000);
  //   utility.sendClick(page.getNewMessageButton());
  //   page.browserPause(2000);
  //   page.getRecieverNameField().sendKeys('Ayman');
  //   page.browserPause(1000);
  //   utility.sendClick(page.getReciever());
  //   page.browserPause(1000);
  //   utility.sendClick(page.getNextButton());
  //   page.browserPause(1000);
  //   page.getChatBox().sendKeys(message);
  //   utility.sendClick(page.getSendButton());
  //   page.browserPause(1000);
  //   expect(page.getLastSentMsg().getText()).toEqual("You :" + message);
  // });
});
