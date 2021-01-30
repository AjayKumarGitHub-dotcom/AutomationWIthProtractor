"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.BeforeAll(async () => {
    cucumber_1.setDefaultTimeout(50000);
});
cucumber_1.After(async function (scenario) {
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        const screenShot = await protractor_1.browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});
//# sourceMappingURL=ScenarioHooks.js.map