const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 1
    The objective of this module is to build on what has been learned, as well as working with input elements to complete a registration form
    as well as perform negative tests to verify correct form entry

    Use the following parameters for the test scripts:
        first name = "First_name"
        last name = "Last_name"
        phone = "5555555555"
        email = "test_1@test.com"
        password = "auto_test_1"


        Exercise 3: Forms
            Script: Negative test - Login without registration
                1) Navigate to the forms menu and select Login
                2) Fill out form
                3) Click submit
                4) Verify error message

            Script: Complete registration form
                1) Navigate to the forms menu and select Register
                2) Fill out form fields
                3) Check ToC checkbox
                4) Register
                5) Verify success message 

            Script: Login with registration credentials
                1) Navigate to the forms menu and select Login
                2) Fill out form
                3) Login
                4) Verify success message

    Complete list of commands used in this exercise are listed in the README.md file of this repository
    */

    'Exercise 3: Forms - EXAMPLE input text in an input field': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        browser.click(constants.SELECTORS.LINK, "Forms");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Login");
        browser.click(constants.SELECTORS.LINK, "Login");
        // optional: verify correct landing page URL
            browser.assert.urlContains('login');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        browser.pause(constants.PAUSE.pauseFor3);
    },

    'Exercise 3: Forms - Negative test - Login without registration': (browser) => {
        // <start your script here>

        // optional: verify correct landing page URL
            
        // fill out login form and click submit
        
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "<insert message text to verify here>", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Complete registration form': (browser) => {
        // <start your script here>

        //optional: verify correct landing page URL
            
        // Fill out the form
        
        // Verify that error message appears and is correct
        browser.waitForElementVisible(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "<insert message text to verify here>", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Login with registration credentials': (browser) => {
        // <start your script here>

        //optional: verify correct landing page URL
  
        // Fill out login form and click submit
        
        // Verify that success message appears
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "test_1@test.com, you have successfully logged in!", "Alert message text is correct!");
        browser.end();
    }
}