import { ZlwAdminPage } from './app.po';

describe('zlw-admin App', () => {
  let page: ZlwAdminPage;

  beforeEach(() => {
    page = new ZlwAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
