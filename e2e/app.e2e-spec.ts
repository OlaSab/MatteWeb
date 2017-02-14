import { MatteWebPage } from './app.po';

describe('matte-web App', function() {
  let page: MatteWebPage;

  beforeEach(() => {
    page = new MatteWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
