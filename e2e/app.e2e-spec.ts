import { AltCoinPortfolioPage } from './app.po';

describe('alt-coin-portfolio App', () => {
  let page: AltCoinPortfolioPage;

  beforeEach(() => {
    page = new AltCoinPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
