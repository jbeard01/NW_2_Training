const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 1
    The objective of this module is to learn how to find elements (buttons in this case), and interact with them using various selector strategies.
    This will show how to use the following selector strategies:
     - CSS
     - Link text
     - Xpath

    Fill in the Blanks
    Test scripts, commands, and selectors have been provided, all that is needed is to fill in the correct locator

        Exercise 1: Buttons
            Script: Checkboxes
                1) Navigate to the buttons menu and select Checkboxes using link text selector strategy
                2) Verify the 3 checkboxes are present using css selector strategy
                    - BONUS: Verify the landing page URL is correct 
                3) Click the 2nd checkbox using css selector strategy
                4) Reset the selection using xpath selector strategy*
            
            Script: Radio buttons
                1) Navigate to the buttons menu and select Radio buttons using link text selector strategy
                2) Verify the 4 radio button options are present using css selector strategy
                    - BONUS: Verify the landing page URL is correct 
                3) Click the first radio button using css selector strategy
                4) Return to the home screen
                    - BONUS 1: Verify the home page by URL
                    - BONUS 2: Use the top navbar functions of the website to navigate to the home screen

        Complete list of commands used in this exercise are listed in the README.md file of this repository

        *HINT: For this exercise use custom xpath (Example: '//*[text()="some text here"]')
    */

    'Exercise 1: Buttons - EXAMPLE Navigate to Checkboxes screen': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
        browser.click(constants.SELECTORS.LINK, "Buttons");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Checkboxes");
        browser.click(constants.SELECTORS.LINK, "Checkboxes");
        browser.end();
    },

    'Exercise 1: Buttons - Checkboxes': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.click(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.click(constants.SELECTORS.LINK, "<insert correct locator here>");
        // Bonus: verify correct landing page URL
        // browser.assert.urlContains("<insert url text for verification here>");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.click(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.waitForElementPresent(constants.SELECTORS.XPATH, '<insert correct locator here>');
        browser.click(constants.SELECTORS.XPATH, '<insert correct locator here>');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.end();
    },

    'Exercise 1: Buttons - Radio buttons': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.click(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "<insert correct locator here>");
        browser.click(constants.SELECTORS.LINK, "<insert correct locator here>");
        // optional: verify correct landing page URL
        // browser.assert.urlContains("<insert url text for verification here>");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.click(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.url("<insert url value here>"); // returns to home page
        // browser.assert.urlEquals(<insert url value to verify here>); // Bonus 1: verify home page URL

        // Bonus 2: use top navbar to return home, verify URL (BONUS 1)
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        // browser.click(constants.SELECTORS.CSS, '<insert correct locator here>');
        // browser.assert.urlEquals(/*<insert url value here>*/); // Bonus 1: verify home page URL
        browser.end();
    }
}