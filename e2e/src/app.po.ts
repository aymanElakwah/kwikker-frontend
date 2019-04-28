import { browser, by, element,protractor } from 'protractor';

export class AppPage {
  //---------Navigation-----------
  navigateTo() {
    return browser.get('/');
  }

  navigateToProfile(x){
    return browser.get('/profile/' + x);
  }

  navigateToKweeks(x) {
    return browser.get('/profile/'+x+'/kweeks');
  }

  navigateToFollowers(x) {
    return browser.get('/profile/'+x+'/followers');
  }

  navigateToFollowing(x) {
    return browser.get('/profile/'+x+'/following');
  }

  navigateToLikes(x) {
    return browser.get('/profile/'+x+'/likes');
  }

  navigateToNotifications() {
    return browser.get('/notifications');
  }

  navigateToHome() {
    return browser.get('/home');
  }
  //---------Get-----------

  //---------Field-----------
  getUsernameLoginField(){
    return element(by.xpath('//input[@name = "username"]'));
  }

  getPasswordLoginField(){
    return element(by.xpath('//input[@name = "password"]'));
  }

  getPasswordSignupField(){
    return element(by.xpath('//input[@name = "pass"]'));
  }

  getEmailSignupField(){
    return element(by.xpath('//input[@name = "email"]'));
  }

  getPasswordConfirmationSignupField(){
    return element(by.xpath('//input[@name = "cpass"]'));
  }

  getScreenNameSignupField(){
    return element(by.xpath('//input[@name = "screenname"]'));
  }

  getWriteKweekField(){
    return element(by.xpath('//textarea[@class = "form-control ng-untouched ng-pristine ng-valid"]'));
  }
  //---------Button-----------
  getTweetToDropDown(){
    return element(by.tagName('p'));
  }

  getLoginButton(){
    return element(by.xpath('//button [@class = "btn btn-primary fadeIn fourth"]'));
  }

  getNext1SignupButton(){
    return element(by.xpath('//button [@name = "next1"]'));
  }

  getNext2SignupButton(){
    return element(by.xpath('//button [@name = "Next2"]'));
  }

  getKweekButton(){
    return element(by.xpath('//button [@class = "btn btn-primary kweek-btn"]'));
  }

  getSecondKweekButton(){
    return element(by.xpath('//*[@id="mat-dialog-0"]/app-new-kweek/div[2]/div[2]/div[2]/span[2]/button'));
  }

  getRekweekButton(x){
    return element(by.xpath('(//span [@class = "rekweek"])[' + x +']'));
  }

  getLikeButton(x){
    return element(by.xpath('(//span [@class = "like"])[' + x +']'));
  }

  getReplyButton(x){
    return element(by.xpath('(//span [@class = "reply"])[' + x +']'));
  }

  getDropDownMenuButton(){
    return element(by.xpath('//a [@class = "dropdown-toggle"]'));
  }

  getProfileButton(){
    return element(by.xpath('//span [@class = "glyphicon glyphicon-user"]'));
  }

  getLogoutButton(){
    return element(by.xpath('//span [@class = "glyphicon glyphicon-arrow-left"]'));
  }
  //---------Text-----------
  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstKweekText(){
    return element.all(by.xpath('//div [@class = "kweek-text"]')).first();
  }

  getCoverHeadingText(){
    return element(by.xpath('//h1 [@class = "cover-heading"]'));
  }
  //---------Card-----------
  getDatePickerSignupBoard(){
    return element(by.xpath('//*[local-name() = "svg"]'));
  }

  getDateDaySignupBoard(){
    return element(by.cssContainingText('.mat-calendar-body-cell-content', '1'));
  }
  //---------Dawood Edits-----------

    getDropDownHomeToggle(){
      return element(by.className('dropdown-toggle'));
    }

    getDropDownHomeToggleProfile(){
      return element(by.xpath('/html/body/app-root/app-home/app-nav-bar/nav/div/div[2]/ul[2]/li[2]/ul/li[1]/a'));
    }


    getProfileName(){
      return element(by.className('Profile-Name'));
    }

    getHisScreenName(){
      return element(by.className('Profile-ScreenName'));
    }

    getHisProfileName(){
      return element.all(by.id('usernameref')).get(0);
    }

    getFollwingList(){
      return element.all(by.className('container')).count();
    }


    getTweetToButton(){
      return element(by.className('btn btn-primary Kweek-Button'));
    }

    getMessageButton(){
      return element(by.className('btn btn-primary Msg-Button'));
    }


    getHisFollowButton(){
      return element(by.className('btn btn-outline-primary follow-button'));
    }

    getMyFollowButton(){
      return element(by.xpath('/html/body/app-root/app-main-profile/div/div[2]/div/div[2]/div/div[2]/app-mini-profile/div[1]/div[1]/div/div[2]/div/div[1]/button[1]'));
    }
    getHisFollowingButton(){
      return element(by.className('btn btn-primary following-button'));
    }

    getMyFollowingButton(){
      return element(by.xpath('/html/body/app-root/app-main-profile/div/div[2]/div/div[2]/div/div[2]/app-mini-profile/div[1]/div[1]/div/div[2]/div/div[1]/button[1]'));
    }


    getHisDropDownButton(){
      return element(by.id('userActionDropdownMenuButton'));
    }

    getMyDropDownButton(){
      return element(by.id('dropdownMenuButton'));
    }


    getMuteButton(){
      return element.all(by.className('dropdown-item')).get(2);
    }

    getBlockButton(){
      return element.all(by.className('dropdown-item')).get(3);
    }

    getSignUpTitle(){
      return element(by.className('active'));
    }


    getBlockedButton(){
      return element(by.className('btn btn-primary Blocked-button'));
    }

    getEditButton(){
      return element(by.className('btn btn-outline-primary edit-button'));
    }

    getSaveChangesButton(){
      return element(by.className('btn btn-primary saveChanges-button'));
    }

    getCancelChangesButton(){
      return element(by.className('btn btn-primary cancel-button'));
    }

    getChangeProfilePictureButton(){
      return element(by.id('profilePicdropdownMenuButton'));
    }

    getChangeProfilePictureItems(i){
      return element.all(by.className('dropdown-item')).get(i);
    }

    getSelectItemButton(){
      return element(by.className('y-animations-ib ih y-root-i8 ii'));
    }


    getMyScreenName(){
      return element(by.id('EditName'));
    }

    getBio(){
      return element(by.id('EditBio'));
    }

    getProfileBio(){
      return element(by.className('Profile-Bio'));
    }

    getProfileTrends(){
      return element.all(by.xpath('//*[@id="Trends-Item"]/h1'));
    }

/////////////////////////Message/////////////////////////////////////////

    getChatBox(){
      return element(by.className('form-control ng-pristine ng-invalid ng-touched'));
    }

    getSendButton(){
      return element(by.xpath('//*[@id="send"]'));
    }

    getBackButton(){
      return element(by.id('back'));
    }

///////////////////////Search//////////////////////////////////////

    getHomeSearchBox(){
      return element(by.xpath('/html/body/app-root/app-home/app-nav-bar/nav/div/div[2]/ul[2]/li[1]/form/div/input'));
    }

    getProfileSearchBox(){
      return element(by.xpath('/html/body/app-root/app-main-profile/div/app-nav-bar/nav/div/div[2]/ul[2]/li[1]/form/div/input'));
    }

    getHomeSearchResult(){
      return element(by.xpath('/html/body/app-root/app-home/app-nav-bar/nav/div/div[2]/ul[2]/li[1]/form/div/div/a'));
    }

    getProfileSearchResult(){
      return element(by.xpath('/html/body/app-root/app-main-profile/div/app-nav-bar/nav/div/div[2]/ul[2]/li[1]/form/div/div/a'));
    }

    navigateToSearchSections(x,y) {
      return browser.get('/search/'+x+'?filterBy='+y);
    }

    getSearchKeyWord(){
      return element(by.xpath('/html/body/app-root/app-search/div[3]/div/div[2]/app-kweek/div/div/div[1]/div/div[2]/div/div[3]/div'));
    }


    pressEnter(){
      var enter = browser.actions().sendKeys(protractor.Key.ENTER);
      enter.perform();
    }



/*
    getBackButton(){
      return element(by.id('back'));
    }
*/


    getAllButton(){
      return element(by.className('btn btn-outline-primary'));
    }

    getNotificationCard(){
      return element.all(by.className('card-body'));
    }

    browserPause(x) {
      return browser.sleep(x);
    }

    browser() {
      return browser;
    }




    navigateToLogin() {
      return browser.get('/login');
    }


  }

export class utilityFunctions{
  page: AppPage;
  constructor(page: AppPage){
    this.page = page;
  }
  browserPause(x) {
    return browser.sleep(x);
  }

  getElementWithText(selector, text){
    return element(by.cssContainingText(selector, text));
  }

  login(username, password){
    this.navigateToLogin();
    this.browserPause(1000);
    this.page.getUsernameLoginField().sendKeys(username);
    this.page.getPasswordLoginField().sendKeys(password);
    this.page.getLoginButton().click();
    this.browserPause(1000);
  }

  navigateToLogin() {
    this.page.navigateTo();
    element(by.xpath('/html/body/app-root/app-welcome/body/div/div/main/button[2]')).click();
  }

  navigateToSignUp() {
    this.page.navigateTo();
    element(by.xpath('/html/body/app-root/app-welcome/body/div/div/main/button[1]')).click();
  }

  navigateToMyProfile() {
    this.page.getDropDownMenuButton().click();
    this.browserPause(1000);
    this.page.getProfileButton().click();
  }

  logout(){
    this.page.getDropDownMenuButton().click();
    this.browserPause(1000);
    this.page.getLogoutButton().click();
  }
}
