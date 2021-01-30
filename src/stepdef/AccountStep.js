"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const cucumber_1 = require("cucumber");
const AccountPage_1 = require("../pages/AccountPage");
var accountPage = new AccountPage_1.AccountPage();
cucumber_1.When('user selects account as {string}', async (string) => {
    await accountPage.selectAccount(string);
    chai_1.expect(await accountPage.getAccntNumber()).to.be.equal(string);
});
cucumber_1.When('user selects deposit section', async () => {
    await accountPage.selectDeposit();
});
cucumber_1.When('user deposits amount as {string}', async (string) => {
    await accountPage.depositAmount(string);
});
cucumber_1.Then('Amount must be deposted to the account', async () => {
    chai_1.expect(await accountPage.getDepositMsg()).to.be.equal("Deposit Successful");
});
cucumber_1.When('user selects withdraw section', async () => {
    await accountPage.selectWithdraw();
});
cucumber_1.When('user withdraw amount as {string}', async (string) => {
    await accountPage.withdrawAmount(string);
});
cucumber_1.Then('Amount must be withdrawn from the account', async () => {
    chai_1.expect(await accountPage.getwithDrawMsg()).to.be.equal("Transaction successful");
});
//# sourceMappingURL=AccountStep.js.map