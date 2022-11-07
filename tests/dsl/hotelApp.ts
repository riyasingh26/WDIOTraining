
import { HotelPage } from '../pom/vacationsdirect/hotel.page';
import { HotelResultsPage } from '../pom/vacationsdirect/hotelResults.page';
import { LandingPage } from '../pom/vacationsdirect/landing.page';
import { HotelPageData } from 'tests/data/hotelPageData';


export class HotelApp {
    public static CONTAINER_ID = Symbol.for('MobileMyTripsSiteApp');

    protected hotelPage = new HotelPage();
    protected hotelresultPage = new HotelResultsPage();
    protected landingPage = new LandingPage();


    openURL() {
        this.landingPage.open();
    }

    navigateToHotelTab() {
        this.landingPage.clickOnHotelTab();
    }

    isHotelTabSelected(): string {
        return this.landingPage.isHotelTabSelected();
    }

    enterDetails(destination : string , checkInDate : string , checkOutDate : string){
        this.hotelPage.enterDestination(destination);
        this.hotelPage.enterCheckInDate(checkInDate);
        this.hotelPage.enterCheckOutDate(checkOutDate);
    }

    searchHotels(){
        this.hotelPage.clickSearch();
    }

    hotelCount(): string{
        return this.hotelresultPage.getHotelResultsCount();
    }

    hotelResult(): string{
        return this.hotelresultPage.getHotelSearchResult();
    }

}
