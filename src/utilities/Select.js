"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const protractor_1 = require("protractor");
class Select {
    constructor(dropDownElement) {
        this.dropDown = dropDownElement;
        this.dropDown.click();
        protractor_1.browser.sleep(1000);
    }
    async selectByIndex(index) {
        await this.dropDown.$("option:nth-child(" + (index + 1) + ")").click();
    }
    async selectByValue(value) {
        await this.dropDown.$("option[value='" + value + "']").click();
    }
    async selectByVisibleText(visibleText) {
        await this.dropDown.element(protractor_1.by.xpath("//option[text()='" + visibleText + "']")).click();
    }
    getDefaultSelectOption() {
        return this.dropDown.$("option:nth-child(1)");
    }
    getAllOptions() {
        return this.dropDown.$$("option");
    }
}
exports.Select = Select;
//# sourceMappingURL=Select.js.map