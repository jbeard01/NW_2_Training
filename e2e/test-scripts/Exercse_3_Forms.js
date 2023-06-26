const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 3 (part 1)
    The objective of this module is to learn about hardcoding, abstraction, and extended Page Object Model methods.
    Using the provided constants file, abstract hardcoded data from the tests into the constants file. 
        
    Exercise 3 Forms: 
        1) Rename the test suite file to better represent the testing being conducted (formTests.js)
        2) Rename the page object page for exercise 3 to better represent the functions used for testing (formPage.js)
            *** Note: you must also update the function calls to match the new naming for the page object page
        3) Using data abstraction, abstract hardcoded data points into the constants file in the FORMS object

    Module 3 (part 2) 
        1) Using data abstraction, move page specific elements to the elements object of the iframePage.js
        2) Update the existing page object functions to accept variable arguments 
        3) Update the page object functions inside the test scripts for iframeTests.js to use correct variables for the script being tested
        4) Add beforeEach and an after hook to the test script 
            1) beforeEach should navigate to the site under test
            2) the after hook should close the broser session
    */

    beforeEach: function(browser){
        const nav = browser.page.navPage();
        
    },
    after: function(browser){
        
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