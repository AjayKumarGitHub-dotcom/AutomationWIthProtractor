"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../../protractor.conf");
cucumber_1.Given("user is on Home page", async () => {
    await protractor_1.browser.get(protractor_conf_1.config.baseUrl);
});
//# sourceMappingURL=BaseStep.js.map