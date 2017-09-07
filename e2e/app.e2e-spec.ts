import { TreePage } from './app.po';

describe('tree App', () => {
  let page: TreePage;

  beforeEach(() => {
    page = new TreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
