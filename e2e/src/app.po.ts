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

  getNext1SignupField(){
    return element(by.xpath('//button [@name = "next1"]'));
  }

  getScreenNameSignupField(){
    return element(by.xpath('//input[@name = "screenname"]'));
  }

  getNext2SignupField(){
    return element(by.xpath('//button [@name = "Next2"]'));
  }

  //---------Button-----------
  
  getTweetToDropDown(){
    return element(by.tagName('p'));
  }

  getLoginButton(){
    return element(by.xpath('//button [@class = "btn btn-primary fadeIn fourth"]'));
  }

  getLogoutButton(){
    return element(by.xpath('//button [@class = "btn btn-primary "]'));
  }
  //---------Text-----------
  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getSignupConfirmation(){
    return element(by.cssContainingText('.fs-title', 'Thank you for using our app.'));
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
