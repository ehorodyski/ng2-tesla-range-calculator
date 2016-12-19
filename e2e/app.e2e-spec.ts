import { Ng2TeslaRangeCalculatorPage } from './app.po';

describe('ng2-tesla-range-calculator App', function() {
  let page: Ng2TeslaRangeCalculatorPage;

  beforeEach(() => {
    page = new Ng2TeslaRangeCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
