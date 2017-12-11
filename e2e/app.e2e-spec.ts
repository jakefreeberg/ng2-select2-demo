import { Ng2Select2DemoPage } from './app.po';

describe('sps-angular-select2-demo App', function() {
  let page: Ng2Select2DemoPage;

  beforeEach(() => {
    page = new Ng2Select2DemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
