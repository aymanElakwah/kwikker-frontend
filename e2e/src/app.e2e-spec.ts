import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('Welcome to kwikker!');
  // });

  it('Login', () =>{
    page.navigateToLogin();
    page.browserPause(1000);
    page.getUsernameLoginField().sendKeys("doda");
    page.getPasswordLoginField().sendKeys("Pp111111");
    page.getLoginButton().click();
    expect(page.getHomeText().getText()).toEqual('home works!');
  });

  it('Open profile', function() {
    page.navigateToProfile('doda');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To doda');
  });


  it('Open profile, view my kweeks', function() {
    page.navigateToKweeks('doda');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To doda');
  });

  it('Open profile, view my followers', function() {
    page.navigateToFollowers('doda');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To doda');
  });

  it('Open profile, view my following', function() {
    page.navigateToFollowing('doda');
    page.browserPause(1000);
    expect(page.getTweetToButton().getText()).toEqual('Tweet To doda');
  });

  it('Open profile, view my likes', function() {
    page.navigateToLikes('doda');
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
