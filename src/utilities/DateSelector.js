"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelector = void 0;
const protractor_1 = require("protractor");
class DateSelector {
    async selectStartDate(dateAsAppAccepts) {
        protractor_1.browser.executeScript("document.querySelector('#start').value='" + dateAsAppAccepts + "'");
    }
    async selectEndDate(dateAsAppAccepts) {
        protractor_1.browser.executeScript("document.querySelector('#end').value='" + dateAsAppAccepts + "'");
    }
}
exports.DateSelector = DateSelector;
//# sourceMappingURL=DateSelector.js.map