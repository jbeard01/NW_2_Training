const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 2
    The objective of this module is to learn about and understand the POM or Page Object Model, hard vs soft assertions, and how to call a page object function inside a test script. 
    In this exercise, code will be moved to a page object file, and a page object function created to be used in it's place. 
    This will highlight how the POM works, and assert vs verify.

    Using the provided examples, create a Page Object Function that will complete the test. 
        *** NOTE: Page Object Functions (PO Function) should not contain hard assertions! ***

        Exercise 2: Iframes 

            Script: Iframe - verify text page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyElText) that does the following:
                    1) Verify the Title text
                    2) Verify the Subtitle text

            NOTE: This rem to px conversion can be used to verify return value of css properties
            (https://codebeautify.org/rem-to-px-converter)

            Script: Iframe - css properties page object function
                Script: Iframe - verify text page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyElFont) that does the following:
                    - Verify the Title css properties
                        1) font size
                        2) font weight
                    - Verify the Subtitle css properties
                        1) font size
                        2) font weight

            Script: Iframe - element interaction page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyBtnBehavior) that does the following:
                    1) Verify the learn more text is not visible
                    2) Click the "Learn more" button
                    3) Verify the text becomes visible 
                    4) Verify the text is correct
    */

    'Exercise 2: Iframe - EXAMPLE switch to iframe with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        ex2.navToSite();
        ex2.focusIfarme();
    },

    'Exercise 2: Iframe - verify text with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();

        ex2.navToSite();
        ex2.focusIfarme();

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        // browser.click(constants.SELECTORS.LINK, "Iframes");
        // browser.assert.urlContains('iframe');
        // // Switch to iframe
        // browser.frame('[id="iframe-checkboxes"]');

        // Verify Iframe title and subtitle are correct

        ex2.verifyElText();

        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[class="display-4"]');
        // browser.assert.textEquals('[class="display-4"]', "Hello, this is an Iframe!", "Title text is correct!");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[class="lead"]');
        // browser.assert.textEquals('[class="lead"]', "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", "Subtitle text is correct!");
    },

    'Exercise 2: Iframe - css properties with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();

        ex2.navToSite();
        ex2.focusIfarme();

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        // browser.click(constants.SELECTORS.LINK, "Iframes");
        // browser.assert.urlContains('iframe');
        // // Switch to iframe
        // browser.frame('[id="iframe-checkboxes"]');

        // // Verify title font size and weight
        ex2.verifyElFont();

        // browser.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-size', function (result) {
        //     elSize = result.value;
        //     browser.assert.equal(elSize, '56px', "Title font size is correct!");
        // });
        // browser.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-weight', function (result) {
        //     elWeight = result.value;
        //     browser.assert.equal(elWeight, '300', "Title font weight is correct!");
        // });
        // // Verify subtitle font size and weight
        // browser.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-size', function (result) {
        //     elSize = result.value;
        //     browser.assert.equal(elSize, '20px', "Subtitle font size is correct!");
        // });
        // browser.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-weight', function (result) {
        //     elWeight = result.value;
        //     browser.assert.equal(elWeight, '300', "Subtitle font weight is correct!");
        // });
    },

    'Exercise 2: Iframe - element interaction with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        
        ex2.navToSite();
        ex2.focusIfarme();

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        // browser.click(constants.SELECTORS.LINK, "Iframes");
        // browser.assert.urlContains('iframe');
        // // Switch to iframe
        // browser.frame('[id="iframe-checkboxes"]');

        // Verify that Learn more text is not visible
        ex2.verifyBtnBehavior();

        // browser.assert.not.visible('[id="show-text"]');
        // // Click Learn more button
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="learn-more"]');
        // browser.click(constants.SELECTORS.CSS, '[id="learn-more"]');
        // // Verify text is visible and correct
        // browser.assert.visible('[id="show-text"]');
        // browser.assert.textEquals('[id="show-text"]', "This text appears when you click the \"Learn more\" button", "Text is visible and correct!");
    },

}