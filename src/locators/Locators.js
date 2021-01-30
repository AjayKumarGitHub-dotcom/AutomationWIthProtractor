"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPageLocators = exports.HomePageLocators = void 0;
const ElementFactory_1 = require("../utilities/ElementFactory");
exports.HomePageLocators = {
    _customerLoginBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//button[normalize-space()='Customer Login']"
    },
    _customerNameDropDown: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.CSS],
        value: "#userSelect"
    },
    _loginBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//button[@type='submit']"
    },
    _loggedCustName: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//span[text()='Hermoine Granger']"
    },
};
exports.AccountPageLocators = {
    _depositBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//button[contains(text(),'Deposit')]"
    },
    _withdrawlBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//button[contains(text(),'Withdrawl')]"
    },
    _transactionBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//button[contains(text(),'Transactions')]"
    },
    _accntDropDwn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.CSS],
        value: "#accountSelect"
    },
    _accntNumber: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[1]"
    },
    _accntBalance: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[2]"
    },
    _accntCurrency: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[3]"
    },
    _amount: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "//input[@placeholder='amount']"
    },
    _depositAmmntBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "(//button[contains(text(),'Deposit')])[2]"
    },
    _depositSuccessMsg: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "(//span)[3]"
    },
    _withdrawAmmntBttn: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "(//button[contains(text(),'Withdraw')])[2]"
    },
    _withdrawSuccessMsg: {
        type: ElementFactory_1.IdentificationType[ElementFactory_1.IdentificationType.XPATH],
        value: "(//span)[3]"
    },
};
//# sourceMappingURL=Locators.js.map