const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

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
