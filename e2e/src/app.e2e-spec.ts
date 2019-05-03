import { AppPage } from './app.po';
import { utilityFunctions } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let utility: utilityFunctions;
  page = new AppPage();
  utility = new utilityFunctions(page);

  var user1 = "test_user1";
  var pass1 = "pass";
  var user2 = "zamalek";
  var pass2 = "password";

  it('Sign up', () =>{
    utility.navigateToSignUp();
    utility.browserPause(100);

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
  
  it('Reply', () => {
    let reply = 'E2E reply'
    utility.login(user2, pass2);
    page.navigateToProfile(user1);
    page.getReplyButton(1).click();
    utility.browserPause(1000);
    page.getWriteKweekField().sendKeys(reply);
    utility.browserPause(1000);
    page.getSecondKweekButton().click();
    utility.browserPause(1000);
    page.getFirstKweekText().click();
    expect(utility.getElementWithText('p', reply).getText()).toEqual('@' + user1 + ' ' + reply);
    page.navigateToHome();
    utility.logout();
  });

  it('Delete', () => {
    utility.login(user1, pass1);
    utility.navigateToMyProfile();
    page.getDeleteKweekx(1).click();
    utility.browserPause(1000);
    page.getDeleteKweekButton().click();
    utility.browserPause(1000);
    utility.logout();
  });

  it('Kweek To', () => {
    let kweek = 'Hi user';
    utility.login(user1, pass1);
    page.navigateToProfile(user2);
    page.getKweekToButton().click();
    page.getWriteKweekField().sendKeys(kweek);
    utility.browserPause(1000);
    page.getSecondKweekButton().click();
    utility.browserPause(1000);
    page.navigateToKweeks(user1);
    expect(page.getFirstKweekText().getText()).toEqual('@' + user2 + ' ' + kweek);
    page.getDeleteKweekx(1).click();
    utility.browserPause(1000);
    page.getDeleteKweekButton().click();
    utility.browserPause(1000);
    utility.logout();
  });
  
  it('Settings', () => {
    let username1 = 'uname1';
    let password1 = 'Password1';
    let email1 = 'mymail10@mail.com';
    
    let username2 = 'uname1username';
    let password2 = 'Password2';
    let email2 = 'mymail21@mail.com';

    utility.login(username1, password1);

    page.getDropDownMenuButton().click();
    page.getSettingsButton().click();
    page.getCurrentPasswordField().sendKeys(password1);
    page.getEmailSettingsField().clear();
    page.getEmailSettingsField().sendKeys(email2);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    page.getOkButton().click();

    page.getUsernameSettingsField().clear();
    page.getUsernameSettingsField().sendKeys(username2);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    page.getOkButton().click();
    utility.browserPause(1000);

    page.getCurrentPasswordField().sendKeys(password1);
    page.getNewPasswordField().sendKeys(password2);
    page.getVerifyPasswordField().sendKeys(password2);
    utility.browserPause(1000);
    page.getChangePasswordSettingsButton().click();
    utility.browserPause(1000);
    page.getOkButton().click();

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
    page.getOkButton().click();
    
    page.getUsernameSettingsField().clear();
    page.getUsernameSettingsField().sendKeys(username1);
    utility.browserPause(1000);
    page.getSaveChangesSettingsButton().click();
    utility.browserPause(1000);
    page.getOkButton().click();
    utility.browserPause(1000);

    page.getCurrentPasswordField().sendKeys(password2);
    page.getNewPasswordField().sendKeys(password1);
    page.getVerifyPasswordField().sendKeys(password1);
    utility.browserPause(1000);
    page.getChangePasswordSettingsButton().click();
    utility.browserPause(1000);
    page.getOkButton().click();

    utility.logout();
    utility.login(username1, password1);
    utility.logout();
    expect(page.getCoverHeadingText().getText()).toEqual("Welcome to Kwikker");
  });
  /*
  it('Open profile', function() {
    page.navigateToHome();
    page.browserPause(1000);
    page.getDropDownHomeToggle().click();
    page.getDropDownHomeToggleProfile().click();
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahly');
  });

  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahly');
  });

////////////Following-Section///////////////////
  it('Open profile, view my following', function() {
    page.navigateToFollowing('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahly');
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
    expect(page.getMuteButton().getText()).toEqual('Unmute @deglascreenname');
  });

  it('Use drop button, Unmute him', function() {
    page.getMuteButton().click();
    page.getMyDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @deglascreenname');
  });

  it('Use drop button, Block him', function() {
    page.getBlockButton().click();
    expect(page.getBlockedButton().getText()).toEqual('Blocked');
  });

  it('Unblock someone ,Check you are not following him.', function() {
    page.getBlockedButton().click();
    page.getMyDropDownButton().click();
    expect(page.getBlockButton().getText()).toEqual('Block @test_user2');
    expect(page.getMyFollowButton().getText()).toEqual('Follow');
  });

  it('View my following, Unfollow someone, And open his profile to check you unfollowed him', function() {
    page.getMyFollowingButton().click();
    var name = page.getHisProfileName().getText();
    page.navigateToProfile(name);
    page.browserPause(1000);
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
  });
  ////////////Followers-Section///////////////////
  it('Open profile, view my followers', function() {
    page.navigateToFollowers('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
  });
  ////////////likes-Section///////////////////
  it('Open profile, view my likes', function() {
    page.navigateToLikes('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
  });
  //////////////////Edit-Section///////////////////////
  it('Edit profile, change profile photo.', function() {
    //var currentImage = Storage.getItem('E:/youssef photos/PHOTOS/AAFR9688.JPG');
    page.getEditButton().click();
    page.getChangeProfilePictureButton().click();
    page.browserPause(1000);
    page.getChangeProfilePictureItems(0).click();
    page.browserPause(1000);
    //page.getSelectItemButton().click();
    //page.browserPause(1000);
    page.getSelectItemButton().sendKeys('E:/youssef photos/PHOTOS/AAFR9688.JPG');
    page.getSelectItemButton().click();
    page.browserPause(1000);
  });

  it('Edit profile, change screen name.', function() {
    page.browserPause(5000);
    //page.browser(page.getEditButton());
    page.getEditButton().click();
    page.getScreenName().clear();
    page.getScreenName().sendKeys('test');
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
    page.getScreenName().clear();
    page.getScreenName().sendKeys('no test');
    page.getBio().clear();
    page.getScreenName().sendKeys('no test');
    page.getCancelChangesButton().click();
    expect(page.getProfileName().getText()).toEqual('test');
    expect(page.getProfileName().getText()).toEqual('test');
  });

  /////////////////Follow--Unfollow--Mute--Unmute--Block--Unblock///////////////////////////
  it('Follow someone', function() {
    page.navigateToProfile('zamalek');
    page.getHisFollowButton().click();
    page.browserPause(1000);
    expect(page.getHisFollowingButton().getText()).toEqual('');
  });

  it('Use drop button in someones profile, Mute him', function() {
    page.getHisDropDownButton().click();
    page.getMuteButton().click();
    page.getHisDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Unmute @zamalek');
  });

  it('Use drop button in someones profile, Unmute him', function() {
    page.getMuteButton().click();
    page.getHisDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @zamalek');
  });

  it('Block him', function() {
    page.getBlockButton().click();
    expect(page.getBlockedButton().getText()).toEqual('Blocked');
  });

  it('Unblock someone ,Check you are not following him.', function() {
    page.getBlockedButton().click();
    page.getHisDropDownButton().click();
    expect(page.getBlockButton().getText()).toEqual('Block @zamalek');
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
  });

  it('Unfollow someone', function() {
    page.getHisFollowButton().click();
    page.getHisFollowingButton().click();
    expect(page.getHisFollowButton().getText()).toEqual('Follow');
  });

  //////////////Profile-Trends/////////////
  it('Profile trends.', function() {
    page.getProfileTrends().click();
    page.browserPause(1000);
    expect(page.getProfileBio().getText()).toEqual('test');
  });

  //////////Message/////////////////
  it('Message someone, send a text message', function() {
    page.navigateToProfile('zamalek')
    page.getMessageButton().click();
    //page.getBackButton().click();
    page.browserPause(10000);
    page.getChatBox().sendKeys('New message!');
    page.getSendButton().click();
    page.browserPause(1000);
    expect(page.getMessageButton().getText()).toEqual('Message');
  });

  ////////////Search/////////////////////////
  it('Search for a user, select from results suggested in search field.', function() {
    page.getHomeSearchBox().sendKeys('zamalek');
    page.browserPause(1000);
    page.getHomeSearchResult().click();
    page.browserPause(1000);
    expect(page.getHisScreenName().getText()).toEqual('zamalek');
  });

  it('Search for a user, view latest section.', function() {
    page.getHomeSearchBox().sendKeys('zamalek');
    page.pressEnter();
    page.browserPause(1000);
    expect(page.getSearchKeyWord().getText()).toContain('@zamalek');
    });

  it('Search for a user, view people section.', function() {
    page.navigateToSearchSections('people','zamalek');
  //  expect(page.getSearchKeyWord().getText()).toContain('@zamalek');
  });

  it('View notifications, ALL section', function() {
    page.navigateToNotifications();
    page.browserPause(1000);
    expect(page.getAllButton().getText()).toEqual('All');
  });
  it('View notifications, ALL section, for user having rekweek or like', function() {
    page.browserPause(1000);
    page.getNotificationCard().getText().then(function(text) {
      expect(text.length).toEqual(0)
    });
  });
  */
});
