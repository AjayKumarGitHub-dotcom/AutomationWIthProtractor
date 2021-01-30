import { element } from "protractor";
import { IdentificationType } from "../utilities/ElementFactory";
import { Select } from "../utilities/Select";

export const HomePageLocators = {
    _customerLoginBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//button[normalize-space()='Customer Login']"
    },

    _customerNameDropDown: {
        type: IdentificationType[IdentificationType.CSS],
        value: "#userSelect"
    },

    _loginBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//button[@type='submit']"
    },

    _loggedCustName: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//span[text()='Hermoine Granger']"
    },
}

export const AccountPageLocators = {

    _depositBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//button[contains(text(),'Deposit')]"
    },

    _withdrawlBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//button[contains(text(),'Withdrawl')]"
    },

    _transactionBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//button[contains(text(),'Transactions')]"
    },

    _accntDropDwn: {
        type: IdentificationType[IdentificationType.CSS],
        value: "#accountSelect"
    },

    _accntNumber: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[1]"
    },

    _accntBalance: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[2]"
    },

    _accntCurrency: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//div[contains(text(),'Account Number')]//strong[3]"
    },

    _amount: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "//input[@placeholder='amount']"
    },

    _depositAmmntBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "(//button[contains(text(),'Deposit')])[2]"
    },

    _depositSuccessMsg: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "(//span)[3]"
    },

    _withdrawAmmntBttn: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "(//button[contains(text(),'Withdraw')])[2]"
    },

    _withdrawSuccessMsg: {
        type: IdentificationType[IdentificationType.XPATH],
        value: "(//span)[3]"
    },


}