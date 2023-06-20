const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    Module 3
    The objective of this module is to learn about data abstraction and softcoding vs hardcoding. 

    Using the provided example, move hard coded elements to a central file for use elsewhere, in this case the constants.js file in the e2e directory. 

        Exercise 1: Buttons
            Script: Checkboxes
                1) Using data abstraction, move hard coded values in the script to the constants file
            
            Script: Radio buttons
                1) 1) Using data abstraction, move hard coded values in the script to the constants file
    */

    'Exercise 1: Buttons - EXAMPLE Navigate to Checkboxes screen': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent(constants.exercise_1.body, 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, constants.exercise_1.btnsLink);
        browser.click(constants.SELECTORS.LINK, constants.exercise_1.btnsLink);
        browser.waitForElementPresent(constants.SELECTORS.LINK, constants.exercise_1.chkBoxesLink);
        browser.click(constants.SELECTORS.LINK, constants.exercise_1.chkBoxesLink);
        browser.end();
    },

    'Exercise 1: Buttons - Checkboxes': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
        browser.click(constants.SELECTORS.LINK, "Buttons");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Checkboxes");
        browser.click(constants.SELECTORS.LINK, "Checkboxes");
        //optional: verify correct landing page URL
            browser.assert.urlContains('checkboxes');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox1"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox2"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox3"]');
        browser.click(constants.SELECTORS.CSS, '[id="checkbox2"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.waitForElementPresent(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.click(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.end();
    },

    'Exercise 1: Buttons - Radio buttons': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
        browser.click(constants.SELECTORS.LINK, "Buttons");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Radio buttons");
        browser.click(constants.SELECTORS.LINK, "Radio buttons");
        //optional: verify correct landing page URL
            browser.assert.urlContains('radiobuttons');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button1"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button2"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button3"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button4"]');
        browser.click(constants.SELECTORS.CSS, '[for="radio-button1"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.url(process.env.URL); // returns to home page
        browser.assert.urlEquals(process.env.URL); // verify home page URL

        // Use navbar to return home, verify URL
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="home"]');
        browser.click(constants.SELECTORS.CSS, '[id="home"]');
        browser.assert.urlEquals(process.env.URL); // Bonus 1: verify home page URL
        browser.end();
    }
}