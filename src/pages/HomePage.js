"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const protractor_1 = require("protractor");
const Locators_1 = require("../locators/Locators");
const ElementFactory_1 = require("../utilities/ElementFactory");
const Select_1 = require("../utilities/Select");
class HomePage extends ElementFactory_1.ElementFactory {
    constructor() {
        super();
        this._custLoginBttn = this.ElementLocator(Locators_1.HomePageLocators._customerLoginBttn);
        this._custName = this.ElementLocator(Locators_1.HomePageLocators._customerNameDropDown);
        this._loginBttn = this.ElementLocator(Locators_1.HomePageLocators._loginBttn);
        this._loggedCustName = this.ElementLocator(Locators_1.HomePageLocators._loggedCustName);
    }
    async LoginAsCustomer() {
        if (protractor_1.ExpectedConditions.elementToBeClickable(this._custLoginBttn)) {
            await this._custLoginBttn.click();
        }
        let select = new Select_1.Select(this._custName);
        await select.selectByVisibleText("Hermoine Granger");
        await this._loginBttn.click();
    }
    async getLoggedCutomerName() {
        return this._loggedCustName.getText();
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map