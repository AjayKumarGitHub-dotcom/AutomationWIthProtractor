import { Given } from "cucumber";
import { browser } from "protractor";
import { config } from "../../protractor.conf";

Given("user is on Home page", async () => {
    await browser.get(config.baseUrl);
});