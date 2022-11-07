"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelPage = void 0;
const basePage_1 = __importDefault(require("./basePage"));
class HotelPage extends basePage_1.default {
    get destination() { return $('input[name="Destination"]'); }
    get checkInDate() { return $('input[name="CheckIn"]'); }
    get checkOutDate() { return $('input[name="CheckOut"]'); }
    get searchButton() { return $('button[value="Search"]'); }
    enterDestination(destination) {
        this.destination.setValue(destination);
    }
    enterCheckInDate(checkInDate) {
        this.checkInDate.setValue(checkInDate);
    }
    enterCheckOutDate(checkOutDate) {
        this.checkOutDate.setValue(checkOutDate);
    }
    clickSearch() {
        this.searchButton.click();
    }
}
exports.HotelPage = HotelPage;
