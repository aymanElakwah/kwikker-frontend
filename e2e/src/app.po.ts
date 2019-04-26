import { browser, by, element } from 'protractor';

export class AppPage {
  //---------Navigation-----------
  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/login');
  }

  navigateToSignUp() {
    return browser.get('/signup');
  }

  navigateToProfile(x) {
    return browser.get('/profile/'+x);
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

  getRekweekButton(){
    return element(by.xpath('/html/body/app-root/app-main-profile/div/div[2]/div/div[2]/div/div[2]/app-profile-kweeks-tab/div/div[1]/app-kweek/div/div[1]/div/div[2]/div/div[4]/div/div[2]/span/span[1]/i'));
  }

  getLikeButton(){
    return element(by.xpath('/html/body/app-root/app-main-profile/div/div[2]/div/div[2]/div/div[2]/app-profile-kweeks-tab/div/div[1]/app-kweek/div/div[1]/div/div[2]/div/div[4]/div/div[3]/span/span[1]/i'));
  }

  getDropDownMenuButton(){
    return element(by.xpath('//a [@class = "dropdown-toggle"]'));
  }
  getLogoutButton(){
    return element(by.xpath('//span [@class = "glyphicon glyphicon-arrow-left"]'));
  }
  //---------Text-----------
  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getSignupConfirmation(){
    return element(by.cssContainingText('.fs-title', 'Thank you for using our app.'));
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
  //---------Utility-----------
  browserPause(x) {
    return browser.sleep(x);
  }

  getElementWithText(selector, text){
    return element(by.cssContainingText(selector, text));
  }

  login(username, password){
    this.navigateToLogin();
    this.browserPause(1000);
    this.getUsernameLoginField().sendKeys(username);
    this.getPasswordLoginField().sendKeys(password);
    this.getLoginButton().click();
    this.browserPause(1000);
  }

  logout(){
    this.getDropDownMenuButton().click();
    this.browserPause(1000);
    this.getLogoutButton().click();
  }

  //---------Dawood Edits-----------
  getProfileName(){
    return element(by.className('Profile-Name'));
  }

  getTweetToButton(){
    return element(by.className('btn btn-primary Kweek-Button'));
  }

  getMessageButton(){
    return element(by.className('btn btn-primary Msg-Button'));
  }

  getFollowButton(){
    return element(by.className('btn btn-outline-primary follow-button'));
  }

  getFollowingButton(){
    return element(by.className('btn btn-primary following-button'));
  }

  getDropDownButton(){
    return element(by.id('userActionDropdownMenuButton'));
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
    return element(by.css('btn btn-outline-primary edit-button'));
  }

  getSaveChangesButton(){
    return element(by.className('btn btn-primary saveChanges-button'));
  }

  getCancelChangesButton(){
    return element(by.className('btn btn-primary cancel-button'));
  }


  getScreenName(){
    return element(by.id('EditName'));
  }

  getBio(){
    return element(by.id('EditBio'));
  }

  getProfileBio(){
    return element(by.className('Profile-Bio'));
  }

  getAllButton(){
    return element(by.className('btn btn-outline-primary'));
  }

  getNotificationCard(){
    return element.all(by.className('card-body'));
  }
}
