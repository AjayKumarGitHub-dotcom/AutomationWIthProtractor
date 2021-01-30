"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPage = void 0;
const Locators_1 = require("../locators/Locators");
const ElementFactory_1 = require("../utilities/ElementFactory");
const Select_1 = require("../utilities/Select");
class AccountPage extends ElementFactory_1.ElementFactory {
    constructor() {
        super();
        this._depositBttn = this.ElementLocator(Locators_1.AccountPageLocators._depositBttn);
        this._depositAmmntBttn = this.ElementLocator(Locators_1.AccountPageLocators._depositAmmntBttn);
        this._amount = this.ElementLocator(Locators_1.AccountPageLocators._amount);
        this._depositMsg = this.ElementLocator(Locators_1.AccountPageLocators._depositSuccessMsg);
        this._withDrawBttn = this.ElementLocator(Locators_1.AccountPageLocators._withdrawlBttn);
        this._withDrawAmmntBttn = this.ElementLocator(Locators_1.AccountPageLocators._withdrawAmmntBttn);
        this._withdrawMsg = this.ElementLocator(Locators_1.AccountPageLocators._withdrawSuccessMsg);
        this._transactionHistoryBttn = this.ElementLocator(Locators_1.AccountPageLocators._transactionBttn);
        this._accountBalance = this.ElementLocator(Locators_1.AccountPageLocators._accntBalance);
        this._accountNumber = this.ElementLocator(Locators_1.AccountPageLocators._accntNumber);
        this._accountCurrency = this.ElementLocator(Locators_1.AccountPageLocators._accntCurrency);
        this._accountDropDown = this.ElementLocator(Locators_1.AccountPageLocators._accntDropDwn);
    }
    async selectDeposit() {
        await this._depositBttn.click();
    }
    async depositAmount(amount) {
        await this._amount.sendKeys(amount);
        await this._depositAmmntBttn.click();
    }
    async selectWithdraw() {
        await this._withDrawBttn.click();
    }
    async withdrawAmount(amount) {
        await this._amount.sendKeys(amount);
        await this._withDrawAmmntBttn.click();
    }
    async getDepositMsg() {
        return ((await this._depositMsg.getText()).trim());
    }
    async getwithDrawMsg() {
        return ((await this._withdrawMsg.getText()).trim());
    }
    async goToTransactionHistory() {
        await this._transactionHistoryBttn.click();
    }
    async selectAccount(accNumber) {
        let select = new Select_1.Select(this._accountDropDown);
        await select.selectByVisibleText(accNumber.toString());
    }
    async getAccntNumber() {
        return ((await this._accountNumber.getText()).trim());
    }
    async getAccntBalance() {
        return ((await this._accountBalance.getText()).trim());
    }
    async getAccntCurrncyType() {
        return ((await this._accountCurrency.getText()).trim());
    }
}
exports.AccountPage = AccountPage;
//# sourceMappingURL=AccountPage.js.map