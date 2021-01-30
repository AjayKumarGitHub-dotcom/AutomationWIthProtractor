import { ElementFinder, ExpectedConditions } from "protractor";
import { HomePageLocators } from "../locators/Locators";
import { ElementFactory } from "../utilities/ElementFactory";
import { Select } from "../utilities/Select";

export class HomePage extends ElementFactory {

    private _custLoginBttn: ElementFinder;
    private _custName: ElementFinder;
    private _loginBttn: ElementFinder;
    private _loggedCustName: ElementFinder;

    constructor() {
        super();
        this._custLoginBttn = this.ElementLocator(HomePageLocators._customerLoginBttn);
        this._custName = this.ElementLocator(HomePageLocators._customerNameDropDown);
        this._loginBttn = this.ElementLocator(HomePageLocators._loginBttn);
        this._loggedCustName = this.ElementLocator(HomePageLocators._loggedCustName);
    }

    async LoginAsCustomer() {
        if (ExpectedConditions.elementToBeClickable(this._custLoginBttn)) {
            await this._custLoginBttn.click();
        }
        let select: Select = new Select(this._custName);
        await select.selectByVisibleText("Hermoine Granger");
        await this._loginBttn.click();
    }

    async getLoggedCutomerName() {
        return this._loggedCustName.getText();
    }
}