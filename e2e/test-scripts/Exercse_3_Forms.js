const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 3
    The objective of this module is to learn about hardcoding, abstraction, and extended Page Object Model methods.
    Using the provided constants file, abstract hardcoded data from the tests into the constants file. 
        
    Exercise 3 Forms: 
        1) Rename the test suite file to better represent the testing being conducted
        2) Rename the page object page for exercise 1 to better represent the functions used for testing
            *** Note: you must also update the function calls to match the new naming for the page object page
        3) Abstract hardcoded data points into the constants file

    
    */

    'Exercise 3: Forms - EXAMPLE input text in an input field with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();
        ex3.navToSite();
        ex3.navToLogin();
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        browser.pause(constants.PAUSE.pauseFor3);
    },

    'Exercise 3: Forms - Negative test - Login without registration with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();

        ex3.navToSite();
        ex3.navToLogin();

        // Attempt login without registration
        ex3.login();

        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "Bad credentials! Please try again! Make sure that you've registered.", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Complete registration form with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();

        ex3.navToSite();

        ex3.navToReg();

        // Fill out the form
        ex3.registerForm();
        
        // Verify that error message appears and is correct
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "The account has been successfully created!", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Login with registration credentials with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();

        ex3.navToSite();
        ex3.navToLogin();

        // Fill out the login form after registration
        ex3.login();
        
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "test_1@test.com, you have successfully logged in!", "Alert message text is correct!");
        browser.end();
    }
}