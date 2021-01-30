import { expect } from "chai";
import { Then, When } from "cucumber";
import { AccountPage } from "../pages/AccountPage";

var accountPage = new AccountPage();

When('user selects account as {string}', async (string) => {
    await accountPage.selectAccount(string);
    expect(await accountPage.getAccntNumber()).to.be.equal(string);
});

When('user selects deposit section', async () => {
    await accountPage.selectDeposit();
});

When('user deposits amount as {string}', async (string) => {
    await accountPage.depositAmount(string);
});

Then('Amount must be deposted to the account', async () => {
    expect(await accountPage.getDepositMsg()).to.be.equal("Deposit Successful");
});

When('user selects withdraw section', async () => {
    await accountPage.selectWithdraw();
});

When('user withdraw amount as {string}', async (string) => {
    await accountPage.withdrawAmount(string);
});

Then('Amount must be withdrawn from the account', async () => {
    expect(await accountPage.getwithDrawMsg()).to.be.equal("Transaction successful")
});
