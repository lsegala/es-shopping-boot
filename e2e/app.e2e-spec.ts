import { EsShoopingBootWebPage } from './app.po';

describe('es-shooping-boot-web App', () => {
  let page: EsShoopingBootWebPage;

  beforeEach(() => {
    page = new EsShoopingBootWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
