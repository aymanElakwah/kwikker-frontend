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
  getTweetToButton(){
    return element(by.className('btn btn-primary Tweet-Button'));
  }

  getFollowButton(){
    return element(by.className('follow-button'));
  }

  getDropDownButton(){
    return element(by.id('dropdownMenuButton'));
  }
  
  getTweetToDropDown(){
    return element(by.tagName('p'));
  }

  getAllButton(){
    return element(by.className('btn btn-outline-primary'));
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
  getNotificationCard(){
    return element(by.className('card-body'));
  }

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
}
