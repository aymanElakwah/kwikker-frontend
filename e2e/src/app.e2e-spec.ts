import { AppPage } from './app.po';
import { browser } from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;
  page = new AppPage();
  var user1 = "ahly";
  var pass1 = "123456";
  var user2 = "zamalek";
  var pass2 = "password";

  it('Sign up', () =>{
    page.navigateToSignUp();
    page.browserPause(100);

    page.getUsernameLoginField().sendKeys("e8");
    page.getEmailSignupField().sendKeys("e8@yahoo.com");
    page.getPasswordSignupField().sendKeys("Ee888888");
    page.getPasswordConfirmationSignupField().sendKeys("Ee888888");
    page.getNext1SignupButton().click();

    page.browserPause(10);
    page.getScreenNameSignupField().sendKeys("ee8");
    page.getDatePickerSignupBoard().click();
    page.getDateDaySignupBoard().click();
    page.getNext2SignupButton().click();

    page.browserPause(1000);
    expect(page.getSignupConfirmation().getText()).toEqual('Thank you for using our app.');
  });

  it('Login and logout', () =>{
    page.navigateToLogin();
    page.browserPause(1000);
    page.getUsernameLoginField().sendKeys(user1);
    page.getPasswordLoginField().sendKeys(pass1);
    page.getLoginButton().click();
    page.browserPause(2000);
    page.getDropDownMenuButton().click();
    page.getLogoutButton().click();
    page.browserPause(1000);
    expect(page.getCoverHeadingText().getText()).toEqual("Welcome to Kwikker");
  });

  it('Kweek', () => {
    page.login(user1, pass1);
    let kweek = "E2E 7";
    page.getKweekButton().click();
    page.getWriteKweekField().sendKeys(kweek);
    page.browserPause(1000);
    page.getSecondKweekButton().click();
    page.browserPause(1000);
    page.navigateToProfile(user1);
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
    page.logout();
  });

  it('Rekweek', () => {
    page.login(user2, pass2);
    page.navigateToProfile(user1);
    let kweek = page.getFirstKweekText().getText();
    page.getRekweekButton().click();
    page.browserPause(1000);
    page.navigateToProfile(user2);
    expect(page.getFirstKweekText().getText()).toEqual(kweek);
    page.logout();
  });

  it('Like', () => {
    page.login(user2, pass2);
    page.navigateToProfile(user1);
    let kweek = page.getFirstKweekText().getText();
    page.getLikeButton().click();
    page.browserPause(1000);
    page.navigateToLikes(user2);
    expect(page.getElementWithText('p', kweek).getText()).toEqual(kweek);
    page.logout();
  });
  /*
  it('Open profile', function() {
    page.navigateToProfile('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('test3');
  });


  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('test3');
  });
  it('Open profile, view my followers', function() {
    page.navigateToFollowers('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('test3');
  });

  it('Open profile, view my following', function() {
    page.navigateToFollowing('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('test3');
  });

  it('Open profile, view my likes', function() {
    page.navigateToLikes('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('test3');
  });

  // it('Edit profile, change screen name.', function() {
  //   page.getEditButton().click();
  //   page.getScreenName().clear();
  //   page.getScreenName().sendKeys('test');
  //   page.getSaveChangesButton().click();
  //   expect(page.getProfileName().getText()).toEqual('test');
  // });

  // it('Edit profile, change bio.', function() {
  //   page.getEditButton().click();
  //   page.getBio().clear();
  //   page.getBio().sendKeys('test');
  //   page.getSaveChangesButton().click();
  //   expect(page.getProfileBio().getText()).toEqual('test');
  // });

  // it('Edit profile, change bio ,change screen name then cancel changes.', function() {
  //   page.getEditButton().click();
  //   page.getScreenName().clear();
  //   page.getScreenName().sendKeys('no test');
  //   page.getBio().clear();
  //   page.getScreenName().sendKeys('no test');
  //   page.getCancelChangesButton().click();
  //   expect(page.getProfileName().getText()).toEqual('test');
  //   expect(page.getProfileName().getText()).toEqual('test');
  // });


  it('Tweet to someone', function() {
    page.navigateToProfile('test_user2');
    page.getTweetToButton().click();
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To');
  });

  it('Message someone', function() {
    page.getMessageButton().click();
    page.browserPause(1000);
    expect(page.getMessageButton().getText()).toEqual('Message');
  });


  it('Follow someone', function() {
    page.navigateToProfile('test_user2');
    page.getFollowButton().click();
    page.browserPause(1000);
    expect(page.getFollowingButton().getText()).toEqual('');
  });

  it('Use drop button in someones profile, Mute him', function() {
    page.getDropDownButton().click();
    page.getMuteButton().click();
    page.getDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Unmute @test_user2');
  });

  it('Use drop button in someones profile, Unmute him', function() {
    page.getMuteButton().click();
    page.getDropDownButton().click();
    expect(page.getMuteButton().getText()).toEqual('Mute @test_user2');
  });


  it('Use drop button in someones profile, Block him', function() {
    page.getBlockButton().click();
    expect(page.getBlockedButton().getText()).toEqual('Blocked');
  });

  it('Unblock someone ,Check you are not following him.', function() {
    page.getBlockedButton().click();
    page.getDropDownButton().click();
    expect(page.getBlockButton().getText()).toEqual('Block @test_user2');
    expect(page.getFollowButton().getText()).toEqual('Follow');
  });


  // it('Unfollow someone', function() {
  //   page.getFollowingButton().click();
  //   page.browserPause(1000);
  //   expect(page.getFollowButton().getText()).toEqual('Follow');
  // });

  // it('View notifications, ALL section', function() {
  //   page.navigateToNotifications();
  //   page.browserPause(1000);
  //   expect(page.getAllButton().getText()).toEqual('All');
  // });

  it('View notifications, ALL section, for user having rekweek or like', function() {
    page.browserPause(1000);
    page.getNotificationCard().getText().then(function(text) {
      expect(text.length).toEqual(0)
    });
  });

  it('Logout', function() {
    page.navigateToHome();
    page.browserPause(1000);
    page.getLogoutButton().click();
    expect(page.getSignUpTitle().getText()).toEqual('EMAIL SETUP');
  });
  */
});
