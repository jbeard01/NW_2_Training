const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    The objective of this module is to learn how to find elements (buttons in this case), and interact with them using various selector strategies.
    This will show how to use the following selector strategies:
     - CSS
     - Link text
     - Xpath

        Exercise 1: Buttons
            Script: Checkboxes
                1) Navigate to the buttons menu and select Checkboxes
                2) Verify the 3 checkboxes are present
                    - BONUS: Verify the landing page URL is correct 
                3) Click the 2nd checkbox
                4) Reset the selection
            
            Script: Radio buttons
                1) Navigate to the buttons menu and select Radio buttons
                2) Verify the 4 radio button options are present
                    - BONUS: Verify the landing page URL is correct 
                3) Click the first radio button
                4) Return to the home screen
                    - BONUS 1: Verify the home page by URL
                    - BONUS 2: Use the navbar functions of the website to navigate to the home screen
    */

    // beforeEach: function(browser){
    //     browser.url(process.env.URL);
    //     browser.waitForElementPresent('body', 3000);
    // },

    // afterEach: function(browser){
    //     browser.end();
    // },

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
        // browser.url(process.env.URL); // returns to home page
        // browser.assert.urlEquals(process.env.URL); // Bonus 1: verify home page URL

        // Bonus 2: use navbar to return home, verify URL (BONUS 1)
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="home"]');
        browser.click(constants.SELECTORS.CSS, '[id="home"]');
        browser.assert.urlEquals(process.env.URL); // Bonus 1: verify home page URL
        browser.end();
    }
}