import BasePage from "./basePage";

export class HotelResultsPage extends BasePage {

    protected get hotelResultsCount(): WebdriverIO.Element { return $('h2[class=hotel-results-pagination-count-header]'); }

    getHotelResultsCount(): string {
        return this.hotelResultsCount.getText();
    }
}
