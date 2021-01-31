import { browser, Config } from "protractor";
import { CucumberReportExtension } from "./src/reporting/CucumberReportExtension"

var argv = require('minimist')(process.argv.slice(3));

export let config: Config = {

    seleniumAddress: "http://localhost:4444/wd/hub",
    multiCapabilities: [
        {
            'browserName': 'chrome',
            'chromeOptions':
            {
                'args': ['--disable-infobars', '--ignore-certificate-errors',]
            },
        },
        {
            'browserName': 'firefox',
            'marionette': true,
            'moz:firefoxOptions':
            {
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
        browser.manage().window().maximize();
    },
    onComplete: () => {
        CucumberReportExtension.GenerateCucumberReport();
    }
}
