"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
const date_fns_1 = require("date-fns");
class DateUtil {
    getDateInSpecificFormat(dateFormat) {
        (0, date_fns_1.format)(new Date(), dateFormat);
    }
    getFutureDate({ dateFormat, daysToAdd }) {
        return (0, date_fns_1.format)((0, date_fns_1.addDays)(new Date(), daysToAdd), dateFormat);
    }
    getPastDate({ dateFormat, daysToSubtract }) {
        return (0, date_fns_1.format)((0, date_fns_1.subDays)(new Date(), daysToSubtract), dateFormat);
    }
}
exports.DateUtil = DateUtil;
