"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelApp = void 0;
const hotel_page_1 = require("../pom/vacationsdirect/hotel.page");
const hotelResults_page_1 = require("../pom/vacationsdirect/hotelResults.page");
const landing_page_1 = require("../pom/vacationsdirect/landing.page");
class HotelApp {
    constructor() {
        this.hotelPage = new hotel_page_1.HotelPage();
        this.hotelresultPage = new hotelResults_page_1.HotelResultsPage;
        this.landingPage = new landing_page_1.LandingPage();
    }
    openURL() {
        this.landingPage.open();
    }
    navigateToHotelTab() {
        this.landingPage.clickOnHotelTab();
    }
    isHotelTabSelected() {
        return this.landingPage.isHotelTabSelected();
    }
    enterDetails(destination, checkInDate, checkOutDate) {
        this.hotelPage.enterDestination(destination);
        this.hotelPage.enterCheckInDate(checkInDate);
        this.hotelPage.enterCheckOutDate(checkOutDate);
    }
    searchHotels() {
        this.hotelPage.clickSearch();
    }
    hotelCount() {
        this.hotelresultPage.getHotelResultsCount();
    }
    hotelResult() {
        this.hotelresultPage.getHotelSearchResult();
    }
}
exports.HotelApp = HotelApp;
HotelApp.CONTAINER_ID = Symbol.for('MobileMyTripsSiteApp');
