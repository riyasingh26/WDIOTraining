"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hotelPageData_1 = require("../data/hotelPageData");
const hotelApp_1 = require("../dsl/hotelApp");
const hotelResults_page_1 = require("../pom/vacationsdirect/hotelResults.page");
const hotelApp = new hotelApp_1.HotelApp();
const hotelPageData = new hotelPageData_1.HotelPageData();
const hotelresultPage = new hotelResults_page_1.HotelResultsPage();
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
        hotelApp.enterDetails(hotelPageData.hotel.search.destination, hotelPageData.hotel.search.checkInDate, hotelPageData.hotel.search.checkOutDate);
        hotelApp.searchHotels();
        var hotelCount = hotelApp.hotelCount();
        expect(hotelCount).toContain("25");
        var hotelResult = hotelApp.hotelResult();
        expect(hotelResult).toContain(hotelPageData.hotel.result.destination);
        expect(hotelResult).toContain(hotelPageData.hotel.result.checkInDate);
        expect(hotelResult).toContain(hotelPageData.hotel.result.checkOutDate);
    });
});
