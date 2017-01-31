import { RestriccionsPage } from './app.po';

describe('restriccions App', function() {
  let page: RestriccionsPage;

  beforeEach(() => {
    page = new RestriccionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
