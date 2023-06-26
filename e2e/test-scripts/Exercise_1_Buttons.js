const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 3
    The objective of this module is to learn about hardcoding, abstraction, and extended Page Object Model methods.
    Using the provided constants file, abstract hardcoded data from the tests into the constants file. 
        
    Exercise 1 Buttons: 
        1) Rename the test suite file to better represent the testing being conducted
        2) Rename the page object page for exercise 1 to better represent the functions used for testing
            *** Note: you must also update the function calls to match the new naming for the page object page
        3) Abstract hardcoded data points into the constants file
            
        Example: line 32  browser.click(constants.SELECTORS.CSS, '[id="checkbox2"]');
                 line 32  browser.click(constants.SELECTORS.CSS, constants.BUTTONS.chkBox2);
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
        ex1.verifyChkBoxes();
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

        browser.click(constants.SELECTORS.CSS, '[for="radio-button1"]');
        browser.pause(constants.PAUSE.pauseFor3); 

        ex1.navToHome();

        browser.end();
    }
}