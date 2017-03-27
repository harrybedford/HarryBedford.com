import { HarrybedfordPage } from './app.po';

describe('harrybedford App', () => {
  let page: HarrybedfordPage;

  beforeEach(() => {
    page = new HarrybedfordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
