import BasePage from "./basePage";
export class LandingPage extends BasePage {

    private get hotelTab(): WebdriverIO.Element { return $('li[data-tab=Hotel]'); }

    clickOnHotelTab() {
        this.isPageLoaded();
        this.hotelTab.waitForEnabled();
        this.hotelTab.click();
    }

    isHotelTabSelected() {
        return this.hotelTab.getAttribute("aria-selected");
    }

    isPageLoaded() {
        browser.waitUntil(
            () => browser.execute(() => document.readyState === "complete"),
            {
              timeout: 10 * 1000,
              timeoutMsg: "Unable to load the page",
            }
        );

    }
}

