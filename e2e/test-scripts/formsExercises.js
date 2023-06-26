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

    beforeEach: function(browser){
        const nav = browser.page.navPage();
        nav.navToSite();
    },
    after: function(browser){
        browser.end();
    },

    'Exercise 3: Forms - Negative test - Login without registration with PO function': (browser) => {
        const form = browser.page.formPage();
        const nav = browser.page.navPage();
        nav.navToMenuItem(constants.FORMS.formsMenu, constants.FORMS.loginLink, constants.FORMS.loginUrlVerify);
        // Attempt login without registration
        form.login(constants.FORMS.account.email, constants.FORMS.account.password);
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, constants.FORMS.alertMsgLoc);
        browser.assert.textEquals(constants.FORMS.alertMsgLoc, constants.FORMS.badCredMsg, "Alert message text is correct!");
    },

    'Exercise 3: Forms - Complete registration form with PO function': (browser) => {
        const form = browser.page.formPage();
        const nav = browser.page.navPage();
        nav.navToMenuItem(constants.FORMS.formsMenu, constants.FORMS.registerLink, constants.FORMS.registerUrlVerify);
        // Fill out the form
        form.registerForm(constants.FORMS.account); 
        // Verify that error message appears and is correct
        browser.waitForElementVisible(constants.SELECTORS.CSS, constants.FORMS.alertMsgLoc);
        browser.assert.textEquals(constants.FORMS.alertMsgLoc, constants.FORMS.createActSucessMsg, "Alert message text is correct!");
    },

    'Exercise 3: Forms - Login with registration credentials with PO function': (browser) => {
        const form = browser.page.formPage();
        const nav = browser.page.navPage();
        nav.navToMenuItem(constants.FORMS.formsMenu, constants.FORMS.loginLink, constants.FORMS.loginUrlVerify);
        // Fill out the login form after registration
        form.login(constants.FORMS.account.email, constants.FORMS.account.password);
        // Verify correct error message
        browser.waitForElementVisible(constants.SELECTORS.CSS, constants.FORMS.alertMsgLoc);
        browser.assert.textEquals(constants.FORMS.alertMsgLoc, constants.FORMS.loginSuccessMsg, "Alert message text is correct!");
    }
}