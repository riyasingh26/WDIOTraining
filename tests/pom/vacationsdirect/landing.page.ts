import BasePage from "./basePage";
export class LandingPage extends BasePage {

    private get hotelTab(): WebdriverIO.Element { return $('li[data-tab=Hotel]'); }

    clickOnHotelTab() {
        this.hotelTab.waitForEnabled();
        this.hotelTab.click();
    }

    isHotelTabSelected() {
        return this.hotelTab.getAttribute("aria-selected");
    }
}

