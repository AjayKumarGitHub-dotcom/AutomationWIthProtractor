import { After, BeforeAll, setDefaultTimeout, Status } from 'cucumber';
import { browser } from 'protractor';

BeforeAll(async () => {
    setDefaultTimeout(50000);
})


After(async function(scenario) {
    if (scenario.result.status=== Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot,"image/png");
    }

})