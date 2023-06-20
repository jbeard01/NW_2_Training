const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    Module 2
    The objective of this module is to learn about and understand the POM or Page Object Model. In this exercise, reused code will be moved to a page object file, 
    and a page object function created to be used in it's place. 
    This will highlight how the POM works, and is reusable anywhere.

    Using the provided example, create a Page Object Function that will complete the test. 

        Exercise 1: Buttons (modify existing long form scripts)

            Script: Checkboxes page object function
                Create a page object function that does the following:
                    1) Navigate to the buttons menu and select Checkboxes
                    2) Verify the 3 checkboxes are present
                    3) Verify the landing page URL is correct 
                    4) Click the 2nd checkbox
                    5) Reset the selection
            
            Script: Radio buttons page object function
                Create a page object function that does the following:
                    1) Navigate to the buttons menu and select Radio buttons
                    2) Verify the 4 radio button options are present
                    3)Verify the landing page URL is correct 
                    4) Click the first radio button
                    5) Return to the home screen
                        - BONUS: Create a page object function to use then navbar to return home, verify URL
                        6) Verify the home page by URL
                        7) Use the navbar functions of the website to navigate to the home screen
    */

    'Exercise 1: Buttons - EXAMPLE Navigate to URL under test': (browser) => {
        const ex1 = browser.page.exercise1Page();
        ex1.navToSite();
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

        // BONUS: Create a page object function to use then navbar to return home, verify URL
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="home"]');
        browser.click(constants.SELECTORS.CSS, '[id="home"]');
        browser.assert.urlEquals(process.env.URL); // verify home page URL

        browser.end();
    }
}