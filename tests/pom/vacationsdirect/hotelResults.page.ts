import BasePage from "./basePage";

export class HotelResultsPage extends BasePage {

    protected get hotelResultsCount(): WebdriverIO.Element { return $('h2[class=hotel-results-pagination-count-header]'); }
    protected get hotelSearchResult(): WebdriverIO.Element{return $('div[class="wayfinder-info"]');}


    getHotelResultsCount(): string {
        browser.waitUntil(
            () => browser.execute(() => document.readyState === "complete"),
            {
              timeout: 10 * 1000,
              timeoutMsg: "Unable to load the page",
            }
        );
        var res = this.hotelResultsCount.getText();
        return res;
    }

    getHotelSearchResult() : string{
        browser.waitUntil(
            () => browser.execute(() => document.readyState === "complete"),
            {
              timeout: 10 * 1000,
              timeoutMsg: "Unable to load the page",
            }
        );
        return this.hotelSearchResult.getText();
    }
}
