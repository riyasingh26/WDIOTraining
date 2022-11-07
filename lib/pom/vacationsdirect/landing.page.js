"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandingPage = void 0;
const basePage_1 = __importDefault(require("./basePage"));
class LandingPage extends basePage_1.default {
    get hotelTab() { return $('li[data-tab=Hotel]'); }
    clickOnHotelTab() {
        this.isPageLoaded();
        this.hotelTab.waitForEnabled();
        this.hotelTab.click();
    }
    isHotelTabSelected() {
        return this.hotelTab.getAttribute("aria-selected");
    }
    isPageLoaded() {
        browser.waitUntil(() => browser.execute(() => document.readyState === "complete"), {
            timeout: 10 * 1000,
            timeoutMsg: "Unable to load the page",
        });
    }
}
exports.LandingPage = LandingPage;
