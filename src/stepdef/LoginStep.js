"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const HomePage_1 = require("../pages/HomePage");
var homepage = new HomePage_1.HomePage();
cucumber_1.When('user logs in as Customer', async () => {
    await homepage.LoginAsCustomer();
});
cucumber_1.Then('user see own name in welcome message', async () => {
    chai_1.expect(await homepage.getLoggedCutomerName()).to.be.equal("Hermoine Granger");
});
//# sourceMappingURL=LoginStep.js.map