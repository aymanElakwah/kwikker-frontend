import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  page = new AppPage();
  // beforeEach(() => {
  //   page = new AppPage();
  // });
/*
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
    page.navigateToHome();
    page.getDropDownHomeToggle().click();
    page.getLogoutButton().click();
    page.browserPause(1000);
    page.navigateToLogin();
    page.browserPause(1000);
    page.getUsernameLoginField().sendKeys("ahly");
    page.getPasswordLoginField().sendKeys("123456");
    page.getLoginButton().click();
  });
*/
  it('Open profile', function() {
    page.navigateToHome();
    page.browserPause(1000);
    page.getDropDownHomeToggle().click();
    page.getDropDownHomeToggleProfile().click();
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
  });

/*
  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
  });


////////////Following-Section///////////////////

it('Open profile, view my following', function() {
  page.navigateToFollowing('ahly');
  page.browserPause(1000);
  expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
});
/*
  it('Open profile, view my following, Unfollow someone', function() {
    page.navigateToFollowing('ahly');
    page.browserPause(1000);
    expect(page.getMyFollowButton().getText()).toEqual('Follow');
  });


  it('In following, follow someone', function() {
    page.getMyFollowButton().click();
    expect(page.getMyFollowingButton().getText()).toEqual('Following');
  });

/
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



  ////////////Followers-Section///////////////////


  it('Open profile, view my followers', function() {
    page.navigateToFollowers('ahly');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
  });


  ////////////likes-Section///////////////////



  it('Open profile, view my likes', function() {
    page.navigateToLikes('test_user3');
    page.browserPause(1000);
    expect(page.getProfileName().getText()).toEqual('ahlyscreenname');
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

/*
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

*/

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

  // it('View notifications, ALL section', function() {
  //   page.navigateToNotifications();
  //   page.browserPause(1000);
  //   expect(page.getAllButton().getText()).toEqual('All');
  // });
/*
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
