const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 2
    The objective of this module is to learn about and understand the POM or Page Object Model, hard vs soft assertions, and how to call a page object function inside a test script. 
    In this exercise, code will be moved to a page object file, and a page object function created to be used in it's place. 
    This will highlight how the POM works, and assert vs verify.

    Using the provided example, create a Page Object Function that will complete the test. 
        *** NOTE: Page Object Functions (PO Function) should not contain hard assertions! ***

        Exercise 1: Buttons (modify existing long form scripts)

            Script: Checkboxes page object function
                Create a page object function (verifyChkBoxes) that does the following:
                    1) Navigate to the buttons menu and select Checkboxes
                    2) Verify the landing page URL is correct
                    3) Verify the 3 checkboxes are present

                1) Click the 2nd checkbox
                2) Reset the selection
            
            Script: Radio buttons page object function
                Create a page object function (verifyRadioBtns) that does the following:
                    1) Navigate to the buttons menu and select Radio buttons
                    2) Verify the 4 radio button options are present
                    3)Verify the landing page URL is correct 
                1) Click the first radio button
                2) Return to the home screen
                    - BONUS: Create a page object function (navToHome) to use then navbar to return home, verify URL
                    1) Use the navbar functions of the website to navigate to the home screen
                    2) Verify the home page by URL
    */

    'Exercise 1: Buttons - EXAMPLE Navigate to URL under test by PO function': (browser) => {
        const ex1 = browser.page.exercise1Page();
        ex1.navToSite();
        browser.end();
    },

    'Exercise 1: Buttons - Checkboxes with PO function': (browser) => {
        const ex1 = browser.page.exercise1Page();
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        // Use the correct page object function to verify checkboxes are present
        ex1.verifyChkBoxes();

        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
        // browser.click(constants.SELECTORS.LINK, "Buttons");
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Checkboxes");
        // browser.click(constants.SELECTORS.LINK, "Checkboxes");
        // browser.assert.urlContains('checkboxes');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox1"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox2"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox3"]');

        browser.click(constants.SELECTORS.CSS, '[id="checkbox2"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.waitForElementPresent(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.click(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.end();
    },

    'Exercise 1: Buttons - Radio buttons with PO function': (browser) => {
        const ex1 = browser.page.exercise1Page();
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);

        ex1.verifyRadioBtns();

        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
        // browser.click(constants.SELECTORS.LINK, "Buttons");
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Radio buttons");
        // browser.click(constants.SELECTORS.LINK, "Radio buttons");
        // browser.assert.urlContains('radiobuttons');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button1"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button2"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button3"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button4"]');

        browser.click(constants.SELECTORS.CSS, '[for="radio-button1"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.url(process.env.URL); // returns to home page

        // BONUS: Create a page object function to use then navbar to return home, verify URL
        ex1.navToHome();

        // browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="home"]');
        // browser.click(constants.SELECTORS.CSS, '[id="home"]');
        // browser.assert.urlEquals(process.env.URL); // verify home page URL

        browser.end();
    }
}