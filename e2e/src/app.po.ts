import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  browserPause(x) {
    return browser.sleep(x);
  }
  navigateToLogin() {
    return browser.get('/login');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getUsernameLoginField(){
    return element(by.xpath('//input[@id = "login"]'));
  }

  getPasswordLoginField(){
    return element(by.xpath('//input[@id = "password"]'));
  }

  getLoginButton(){
    return element(by.xpath('//button [@class = "btn btn-success fadeIn fourth"]'));
  }

  getHomeText(){
    return element(by.tagName('p'));
  }

  getTweetToButton(){
    return element(by.className('btn btn-primary Tweet-Button'));
  }

  getFollowButton(){
    return element(by.className('follow-button'));
  }


  getDropDownButton(){
    return element(by.id('dropdownMenuButton'));
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

  getTweetToDropDown(){
    return element(by.tagName('p'));

  }

  navigateToNotifications() {
    return browser.get('/notifications');
  }

  getAllButton(){
    return element(by.className('btn btn-outline-primary'));

  }

  getNotificationCard(){
    return element(by.className('card-body'));

  }


}
