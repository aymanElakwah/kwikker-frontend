import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  page = new AppPage();
  // beforeEach(() => {
  //   page = new AppPage();
  // });

  it('Sign up', () =>{
    page.navigateToSignUp();
    page.browserPause(100);

    page.getUsernameLoginField().sendKeys("e3");
    page.getEmailSignupField().sendKeys("e3@yahoo.com");
    page.getPasswordSignupField().sendKeys("Ee333333");
    page.getPasswordConfirmationSignupField().sendKeys("Ee333333");
    page.getNext1SignupField().click();

    page.browserPause(10);
    page.getScreenNameSignupField().sendKeys("ee3");
    page.getDatePickerSignupBoard().click();
    page.getDateDaySignupBoard().click();
    page.getNext2SignupField().click();

    page.browserPause(10);
    expect(page.getSignupConfirmation().getText()).toEqual('Thank you for using our app.');
  });

  it('Login', () =>{
    page.navigateToLogin();
    page.browserPause(1000);
    page.getUsernameLoginField().sendKeys("test_user3");
    page.getPasswordLoginField().sendKeys("password");
    page.getLoginButton().click();
    expect(page.getLogoutButton().getText()).toEqual('Log Out');
  });

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
});
