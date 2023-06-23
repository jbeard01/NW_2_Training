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

        Exercise 2: Iframes 

            Script: Iframe - verify text page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyElText) that does the following:
                    1) Verify the Title text
                    2) Verify the Subtitle text

            NOTE: This rem to px conversion can be used to verify return value of css properties
            (https://codebeautify.org/rem-to-px-converter)

            Script: Iframe - css properties page object function
                Script: Iframe - verify text page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyElFont) that does the following:
                    - Verify the Title css properties
                        1) font size
                        2) font weight
                    - Verify the Subtitle css properties
                        1) font size
                        2) font weight

            Script: Iframe - element interaction page object function
                1) Using provided page object function, navigate to the Iframes page
                2) Using provided page object function, switch focus to the iframe
                3) Create a page object function (verifyBtnBehavior) that does the following:
                    1) Verify the learn more text is not visible
                    2) Click the "Learn more" button
                    3) Verify the text becomes visible 
                    4) Verify the text is correct
    */

    before: function(browser){
        const nav = browser.page.navPage();
        nav.navToSite();
    },
    after: function(browser){
        browser.end();
    },

    'Exercise 2: Iframe - EXAMPLE switch to iframe with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        ex2.focusIfarme();
    },

    'Exercise 2: Iframe - verify text with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        ex2.focusIfarme();

        // Verify Iframe title and subtitle are correct
        ex2.verifyElText();
    },

    'Exercise 2: Iframe - css properties with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        ex2.focusIfarme();

        // Verify title font size and weight
        ex2.verifyElFont();
    },

    'Exercise 2: Iframe - element interaction with PO function': (browser) => {
        const ex2 = browser.page.exercise2Page();
        ex2.focusIfarme();

        // Verify that Learn more text is not visible until button is clicked
        ex2.verifyBtnBehavior();
    }
}