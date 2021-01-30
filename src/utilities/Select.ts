import { browser, by, ElementArrayFinder, ElementFinder } from "protractor";


export class Select {

    dropDown: ElementFinder;

    constructor(dropDownElement: ElementFinder) {
        this.dropDown = dropDownElement;
        this.dropDown.click();
        browser.sleep(1000);
    }

    async selectByIndex(index: number) {
        await this.dropDown.$("option:nth-child(" + (index + 1) + ")").click();
    }

    async selectByValue(value: string) {
        await this.dropDown.$("option[value='" + value + "']").click();
    }

    async selectByVisibleText(visibleText: string) {
        await this.dropDown.element(by.xpath("//option[text()='" + visibleText + "']")).click();
    }

    getDefaultSelectOption(): ElementFinder {
        return this.dropDown.$("option:nth-child(1)");
    }

    getAllOptions(): ElementArrayFinder {
        return this.dropDown.$$("option");
    }


}