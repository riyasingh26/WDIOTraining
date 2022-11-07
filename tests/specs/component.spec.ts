import { HotelPageData } from "../data/hotelPageData";
import { HotelApp } from "../dsl/hotelApp";
import { HotelResultsPage } from "../pom/vacationsdirect/hotelResults.page";

const hotelApp = new HotelApp();
const hotelPageData = new HotelPageData();
const hotelresultPage = new HotelResultsPage();
var assert = require("assert");
describe("Verify functionality on hotel tab", () => {
  before(() => {
    hotelApp.openURL();
  });

  it("Verify User is able to click on hotel tab", () => {
    hotelApp.navigateToHotelTab();
    expect(hotelApp.isHotelTabSelected()).toBe("true");
  });

  it("Verify is hotel get searched", () => {
    hotelApp.navigateToHotelTab();
    hotelApp.enterDetails(
      hotelPageData.hotel.search.destination,
      hotelPageData.hotel.search.checkInDate,
      hotelPageData.hotel.search.checkOutDate
    );
    hotelApp.searchHotels();
    var hotelCount = hotelApp.hotelCount();
    

    expect(hotelCount).toContain("25");

    var hotelResult = hotelApp.hotelResult();
    expect(hotelResult).toContain(hotelPageData.hotel.result.destination);
    expect(hotelResult).toContain(hotelPageData.hotel.result.checkInDate);
    expect(hotelResult).toContain(hotelPageData.hotel.result.checkOutDate);
  });
});
