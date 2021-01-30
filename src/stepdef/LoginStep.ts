import { expect } from "chai";
import { When, Then } from "cucumber";
import { HomePage } from "../pages/HomePage";

var homepage = new HomePage();
When('user logs in as Customer', async () => {
    await homepage.LoginAsCustomer();
});

Then('user see own name in welcome message', async () => {
    expect(await homepage.getLoggedCutomerName()).to.be.equal("Hermoine Granger");
});  