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
}
