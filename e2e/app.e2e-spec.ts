import { YubrajpokharelPage } from './app.po';

describe('yubrajpokharel App', function() {
  let page: YubrajpokharelPage;

  beforeEach(() => {
    page = new YubrajpokharelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
