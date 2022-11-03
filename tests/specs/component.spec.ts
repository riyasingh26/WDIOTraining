import { HotelApp } from '../dsl/hotelApp';
const hotelApp = new HotelApp();
var assert = require('assert');
describe('Verify functionality on hotel tab', () => {

  before(() => {
    hotelApp.openURL();
  });

  it('Verify User is able to click on hotel tab', () => {
    hotelApp.navigateToHotelTab();
    expect(hotelApp.isHotelTabSelected()).toBe("true");
  });

});
