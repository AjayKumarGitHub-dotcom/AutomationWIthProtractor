import { browser, ElementFinder } from "protractor";
import { AccountPageLocators } from "../locators/Locators";
import { ElementFactory } from "../utilities/ElementFactory";
import { Select } from "../utilities/Select";


export class AccountPage extends ElementFactory {

    private _depositBttn: ElementFinder;
    private _depositAmmntBttn: ElementFinder;
    private _amount: ElementFinder;
    private _withDrawBttn: ElementFinder;
    private _withDrawAmmntBttn: ElementFinder;
    private _depositMsg: ElementFinder;
    private _withdrawMsg: ElementFinder;
    private _transactionHistoryBttn: ElementFinder;
    private _accountBalance: ElementFinder;
    private _accountNumber: ElementFinder;
    private _accountCurrency: ElementFinder;
    private _accountDropDown: ElementFinder;

    constructor() {
        super();
        this._depositBttn = this.ElementLocator(AccountPageLocators._depositBttn);
        this._depositAmmntBttn = this.ElementLocator(AccountPageLocators._depositAmmntBttn);
        this._amount = this.ElementLocator(AccountPageLocators._amount);
        this._depositMsg = this.ElementLocator(AccountPageLocators._depositSuccessMsg);
        this._withDrawBttn = this.ElementLocator(AccountPageLocators._withdrawlBttn);
        this._withDrawAmmntBttn = this.ElementLocator(AccountPageLocators._withdrawAmmntBttn);
        this._withdrawMsg = this.ElementLocator(AccountPageLocators._withdrawSuccessMsg);
        this._transactionHistoryBttn = this.ElementLocator(AccountPageLocators._transactionBttn);
        this._accountBalance = this.ElementLocator(AccountPageLocators._accntBalance);
        this._accountNumber = this.ElementLocator(AccountPageLocators._accntNumber);
        this._accountCurrency = this.ElementLocator(AccountPageLocators._accntCurrency);
        this._accountDropDown = this.ElementLocator(AccountPageLocators._accntDropDwn);
    }

    async selectDeposit() {
        await this._depositBttn.click();
    }

    async depositAmount(amount: string) {
        await this._amount.sendKeys(amount);
        await this._depositAmmntBttn.click();
    }

    async selectWithdraw() {
        await this._withDrawBttn.click();
    }

    async withdrawAmount(amount: string) {
        await this._amount.sendKeys(amount);
        await this._withDrawAmmntBttn.click();
    }

    async getDepositMsg(): Promise<string> {
        return ((await this._depositMsg.getText()).trim());
    }

    async getwithDrawMsg(): Promise<string> {
        return ((await this._withdrawMsg.getText()).trim());
    }

    async goToTransactionHistory() {
        await this._transactionHistoryBttn.click();
    }

    async selectAccount(accNumber: string) {
        let select: Select = new Select(this._accountDropDown);
        await select.selectByVisibleText(accNumber.toString());
    }

    async getAccntNumber(): Promise<string> {
        return ((await this._accountNumber.getText()).trim());
    }

    async getAccntBalance(): Promise<string> {
        return ((await this._accountBalance.getText()).trim());
    }

    async getAccntCurrncyType(): Promise<string> {
        return ((await this._accountCurrency.getText()).trim());
    }

}