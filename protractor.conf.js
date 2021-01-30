"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
const CucumberReportExtension_1 = require("./src/reporting/CucumberReportExtension");
var argv = require('minimist')(process.argv.slice(3));
exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    multiCapabilities: [
        {
            'browser': 'chrome',
            'chromeOptions': {
                'args': ['--disable-infobars', '--ignore-certificate-errors',]
            },
        },
        {
            'browser': 'firefox',
            'marionette': true,
            'moz:firefoxOptions': {
                'args': ['--ignore-certificate-errors']
            }
        }
    ],
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compliler: "ts:ts-node/register",
        strict: true,
        format: "json:./src/reporting/json/cucumber_report.json",
        require: ['./src/stepdef/*.js', './src/hooks/*.js'],
        tags: argv.tags,
        retry: 1
    },
    onPrepare: () => {
        protractor_1.browser.manage().window().maximize();
    },
    onComplete: () => {
        CucumberReportExtension_1.CucumberReportExtension.GenerateCucumberReport();
    }
};
//# sourceMappingURL=protractor.conf.js.map