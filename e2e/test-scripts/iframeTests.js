const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 3 (part 1)
    The objective of this module is to learn about hardcoding, abstraction, and extended Page Object Model methods.
    Using the provided constants file, abstract hardcoded data from the tests into the constants file. 
        
    Exercise 2 Iframes: 
        1) Rename the test suite file to better represent the testing being conducted (iframeTests.js)
        2) Rename the page object page for exercise 2 to better represent the functions used for testing (iframePage.js)
            *** Note: you must also update the function calls to match the new naming for the page object page
            1) Using data abstraction, abstract hardcoded data points into the constants file
            2) Update the existing page object functions to accept variables from the constants file
        3) Update page object functions in the test suite by adding variables passed into the function
    
    Module 3 (part 2) 
        1) Using data abstraction, move page specific elements to the elements object of the iframePage.js
        2) Identify repeated code in the verification page object functions
            1) split the verifyFont page object function into 2 specific functions that run based on the variables passed into them
             ***The new page object functions should accept 2 arguments 1) the element locator and 2) the size OR weight of the font of that element
                a) verifyElFontSize
                b) verifyElFontWeight
            2) Update the existing page object functions to accept variable arguments 
            3) Update the page object functions inside the test scripts for iframeTests.js to use correct variables for the script being tested
            4) Add a beforeEach and an after hook to the test suite
                1) beforeEach hook should navigate to the site under test, navigate to the iframe menu and switch focus to the iframe element
                2) after hook should close the browser session        
    */

    beforeEach: function(){
        const nav = browser.page.navPage();
        const iframe = browser.page.iframePage();
        nav.navToSite();
        nav.navToMenuItem(constants.IFRAMES.iframeMenu, null, constants.IFRAMES.iframeUrlVerify);
        iframe.focusIfarme();
    },
    after: function(browser){
        browser.end();
    },

    'Exercise 2: Iframe - verify text with PO function': (browser) => {
        const iframe = browser.page.iframePage();
        // Verify Iframe title and subtitle are correct
        iframe.verifyElText(constants.IFRAMES.titleLoc, constants.IFRAMES.titleText);
        iframe.verifyElText(constants.IFRAMES.subTitleLoc, constants.IFRAMES.subTitleText);
    },

    'Exercise 2: Iframe - css properties with PO function': (browser) => {
        const iframe = browser.page.iframePage();
        // Verify Iframe title and subtitle font size and weight
        iframe.verifyElFontSize(constants.IFRAMES.titleLoc, constants.IFRAMES.titleFontSize);
        iframe.verifyElFontSize(constants.IFRAMES.subTitleLoc, constants.IFRAMES.subTitleFontSize);
        iframe.verifyElFontWeight(constants.IFRAMES.titleLoc, constants.IFRAMES.titleFontWeight);
        iframe.verifyElFontWeight(constants.IFRAMES.subTitleLoc, constants.IFRAMES.subTitleFontWeight);
    },

    'Exercise 2: Iframe - element interaction with PO function': (browser) => {
        const iframe = browser.page.iframePage();
        // Verify that Learn more text is not visible until button is clicked
        iframe.verifyBtnBehavior(constants.IFRAMES.learnMoreBtnText, constants.IFRAMES.learnMoreBtnLoc, constants.IFRAMES.learnMoreText);
    }
}
