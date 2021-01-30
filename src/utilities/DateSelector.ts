import { browser } from "protractor";

export class DateSelector {

    async selectStartDate(dateAsAppAccepts: string) {
        browser.executeScript("document.querySelector('#start').value='" + dateAsAppAccepts + "'");
    }

    async selectEndDate(dateAsAppAccepts: string) {
        browser.executeScript("document.querySelector('#end').value='" + dateAsAppAccepts + "'");
    }
}