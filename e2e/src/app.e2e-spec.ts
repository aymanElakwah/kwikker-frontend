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
    page.getUsernameLoginField().sendKeys("e1");
    page.getPasswordLoginField().sendKeys("Ee111111");
    page.getLoginButton().click();
    expect(page.getHomeText().getText()).toEqual('home works!');
  });
});
