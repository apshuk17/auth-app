import { browser, element, by } from 'protractor';

export class AuthAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aup-root h1')).getText();
  }
}
