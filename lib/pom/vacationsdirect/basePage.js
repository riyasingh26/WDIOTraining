"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path = 'https://vacationsdirect.com') {
        return browser.url(path);
        //browser.maximizeWindow();
    }
}
exports.default = BasePage;
