const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 2
    The objective of this module is to learn about and understand the POM or Page Object Model, hard vs soft assertions, and how to call a page object function inside a test script. 
    In this exercise, code will be moved to a page object file, and a page object function created to be used in it's place. 
    This will highlight how the POM works, and assert vs verify.

    Using the provided examples, create a Page Object Function that will complete the test. 
        *** NOTE: Page Object Functions (PO Function) should not contain hard assertions! ***

    Use the following parameters for the test scripts:
        first name = "First_name"
        last name = "Last_name"
        phone = "5555555555"
        email = "test_1@test.com"
        password = "auto_test_1"

        Exercise 3: Forms
            Script: Negative test - Login without registration
                1) Using provided page object function, navigate to the test site URL
                2) Using provided page object function, navigate to the forms menu and select Login
                3) Create a page object function to do the following:
                    1)Fill out form
                    2) Click submit
                4) Verify error message

            Script: Complete registration form
                1) Using provided page object function, navigate to the test site URL
                2) Create a page object function to do the following:
                    1) navigate to the forms menu registration page
                3) Create a page object function to do the following
                    1) Fill out form fields
                    2) Check ToC checkbox
                    3) Click Register button
                4) Verify success message 

            Script: Login with registration credentials
                1) Using provided page object function, navigate to the forms menu and select Login
                2) Using provided page object function, navigate to the forms menu and select Login
                3) Reuse the login page object function to login with registration credentials
                4) Verify success message
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

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        // browser.click(constants.SELECTORS.LINK, "Forms");
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Login");
        // browser.click(constants.SELECTORS.LINK, "Login");
        // browser.assert.urlContains('login');

        // Attempt login without registration
        ex3.login();

        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        // browser.click(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');

        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "Bad credentials! Please try again! Make sure that you've registered.", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Complete registration form with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();

        ex3.navToSite();

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);

        ex3.navToReg();

        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        // browser.click(constants.SELECTORS.LINK, "Forms");
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Register");
        // browser.click(constants.SELECTORS.LINK, "Register");
        // browser.assert.urlContains('register');


        // Fill out the form
        ex3.registerForm();

        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="firstName"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="firstName"]', "First_name");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="lastName"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="lastName"]', "Last_name");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="phone"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="phone"]', "5555555555");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
        // browser.click(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[value="United States of America"]');
        // browser.click(constants.SELECTORS.CSS, '[value="United States of America"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="emailAddress"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="emailAddress"]', "test_1@test.com");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
        // browser.click(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="registerBtn"]');
        // browser.click(constants.SELECTORS.CSS, '[id="registerBtn"]');
        
        // Verify that error message appears and is correct
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "The account has been successfully created!", "Alert message text is correct!");
    },

    'Exercise 3: Forms - Login with registration credentials with PO function': (browser) => {
        const ex3 = browser.page.exercise3Page();

        ex3.navToSite();
        ex3.navToLogin();

        // browser.url(process.env.URL);
        // browser.waitForElementPresent('body', 3000);
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
        // browser.click(constants.SELECTORS.LINK, "Forms");
        // browser.waitForElementPresent(constants.SELECTORS.LINK, "Login");
        // browser.click(constants.SELECTORS.LINK, "Login");
        // browser.assert.urlContains('login');

        // Fill out the login form after registration
        ex3.login();
        
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
        // browser.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
        // browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        // browser.click(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
        
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, '[id="message"]');
        browser.assert.textEquals('[id="message"]', "test_1@test.com, you have successfully logged in!", "Alert message text is correct!");
        browser.end();
    }
}