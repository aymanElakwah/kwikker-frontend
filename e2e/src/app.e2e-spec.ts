import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Sign up', () =>{
    page.navigateToSignUp();
    page.browserPause(100);

    page.getUsernameLoginField().sendKeys("e2");
    page.getEmailSignupField().sendKeys("e2@yahoo.com");
    page.getPasswordSignupField().sendKeys("Ee222222");
    page.getPasswordConfirmationSignupField().sendKeys("Ee222222");
    page.getNext1SignupField().click();

    page.browserPause(10);
    page.getScreenNameSignupField().sendKeys("ee2");
    page.getDatePickerSignupBoard().click();
    page.getDateDaySignupBoard().click();
    page.getNext2SignupField().click();

    page.browserPause(10);
    expect(page.getSignupConfirmation().getText()).toEqual('Thank you for using our app.');
  });

  it('Login', () =>{
    page.navigateToLogin();
    page.browserPause(1000);
    page.getUsernameLoginField().sendKeys("e2");
    page.getPasswordLoginField().sendKeys("Ee222222");
    page.getLoginButton().click();
    expect(page.getLogoutButton().getText()).toEqual('Log Out');
  });

  it('Open profile', function() {
    page.navigateToProfile('e2');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To e2');
  });


  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks('e2');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To e2');
  });

  it('Open profile, view my followers', function() {
    page.navigateToFollowers('e2');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To e2');
  });

  it('Open profile, view my following', function() {
    page.navigateToFollowing('e2');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To e2');
  });

  it('Open profile, view my likes', function() {
    page.navigateToLikes('e2');
    page.browserPause(1000);

  });

  it('Open profile, tweet to someone', function() {
    page.navigateToProfile('test_user3');
    page.getTweetToButton().click();
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To test_user3');
  });


  it('Follow someone', function() {
    page.navigateToProfile('test_user3');
    page.getFollowButton().click();
    page.browserPause(1000);
    expect(page.getFollowButton().getText()).toEqual('Follow');
  });

  it('Use drop button in someones profile', function() {
    page.navigateToProfile('test_user3');
    page.getDropDownButton().click();
    page.browserPause(1000);
    expect(page.getTweetToDropDown().getText()).toEqual('Tweet To @test3');
  });


  it('View notifications, ALL section', function() {
    page.navigateToNotifications();
    page.getAllButton().click();
    page.browserPause(1000);
    expect(page.getAllButton().getText()).toEqual('All');
  });

  it('View notifications, ALL section, for user having rekweek or like', function() {
    page.browserPause(1000);
    page.getNotificationCard().getText().then(function(text) {
      expect(text.length).not.toEqual(0)
    });
  });
});
