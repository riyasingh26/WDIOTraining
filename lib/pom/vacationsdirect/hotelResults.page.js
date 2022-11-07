"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelResultsPage = void 0;
const basePage_1 = __importDefault(require("./basePage"));
class HotelResultsPage extends basePage_1.default {
    get hotelResultsCount() { return $('h2[class=hotel-results-pagination-count-header]'); }
    get hotelSearchResult() { return $('div[class="wayfinder-info"]'); }
    getHotelResultsCount() {
        return this.hotelResultsCount.getText();
    }
    getHotelSearchResult() {
        return this.hotelSearchResult.getText();
    }
}
exports.HotelResultsPage = HotelResultsPage;
