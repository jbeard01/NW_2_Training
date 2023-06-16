const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    The objective of this module is to build on what has been learned, as well as working with input elements to complete a registration form
    as well as perform negative tests to verify correct form entry

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
                2) Fill out fields
                3) Login
                4) Verify success message
    */

    // beforeEach: function(browser){
    //     browser.url(process.env.URL);
    //     browser.waitForElementPresent('body', 3000);
    // },

    // after: function(browser){
    //     browser.end();
    // },

    'Exercise 3: Forms - Negative test - Login without registration': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        browser.click(constants.SELECTORS.LINK, "Forms");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Login");
        browser.click(constants.SELECTORS.LINK, "Login");
        //optional: verify correct landing page URL
            browser.assert.urlContains('login');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        browser.click(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "Bad credentials! Please try again! Make sure that you've registered.", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Complete registration form': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        browser.click(constants.SELECTORS.LINK, "Forms");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Register");
        browser.click(constants.SELECTORS.LINK, "Register");
        //optional: verify correct landing page URL
            browser.assert.urlContains('register');
        // Fill out the form
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="firstName"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="firstName"]', "First_name");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="lastName"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="lastName"]', "Last_name");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="phone"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="phone"]', "5555555555");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
        browser.click(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[value="United States of America"]');
        browser.click(constants.SELECTORS.CSS, '[value="United States of America"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="emailAddress"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="emailAddress"]', "test_1@test.com");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
        browser.click(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="registerBtn"]');
        browser.click(constants.SELECTORS.CSS, '[id="registerBtn"]');
        // Verify that error message appears and is correct
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "The account has been successfully created!", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Login with registration credentials': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        browser.click(constants.SELECTORS.LINK, "Forms");
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Login");
        browser.click(constants.SELECTORS.LINK, "Login");
        //optional: verify correct landing page URL
            browser.assert.urlContains('login');
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        browser.click(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "test_1@test.com, you have successfully logged in!", "Alert message text is correct!");
        browser.end();
    }
}