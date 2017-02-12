import { AptdealAngular2Page } from './app.po';

describe('aptdeal-angular2 App', function() {
  let page: AptdealAngular2Page;

  beforeEach(() => {
    page = new AptdealAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
