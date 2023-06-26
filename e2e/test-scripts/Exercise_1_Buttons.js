const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 3 (part 1)
    The objective of this module is to learn about hardcoding, data abstraction, before/after hooks, and extended Page Object Model methods.
    Using the provided constants file, abstract hardcoded data from the tests into the constants file. 
        
    Exercise 1 Buttons: 
        1) Rename the test suite file to better represent the testing being conducted (buttonTests.js)
        2) Rename the page object page for exercise 1 to better represent the functions used for testing (buttonPage.js)
            *** Note: you must also update the function calls to match the new naming for the page object page
        3) Using data abstraction, abstract hardcoded data points into the constants file for use in the tests
            
            Example: line 32  browser.click(constants.SELECTORS.CSS, '[id="checkbox2"]');
                     line 32  browser.click(constants.SELECTORS.CSS, constants.BUTTONS.chkBox2);

    Module 3 (part 2)
    In part 2, create a new page object (navPage.js) with common navigation functions
        1) Using data abstraction, move page specific elements to the elements object of the buttonPage.js
        2) Identify commonly used navigation functions from all 3 test suites
            1) Move these functions to the navPage.js file
            2) Create a function to navigate to a menu item, and if applicable it's sub-menu items, by data passed into the function
                a) navToMenuItem
                b) use a conditional statement to determin if a menu is a single item or contains a sub-menu
                    1) if there is no sub-menu, the function should use null as the argument to be passed into the function
                Example: if(selector1 != null){ <commands to run if there is a sub-menu to navigate to> };
            3) Remove redundant navigation functions
            4) Update navigation functions in buttonTests.js
        3) Add beforeEach and afterEach hooks to the test suite (these go above the test scripts)
            1) beforeEach should navigate to the site under test
                a) navToSite();  
            2) afterEach should close the browser session
                a) browser.end();

        Example:

            beforeEach: function(browser){
                const nav = browser.page.navPage();
                nav.navToSite();
            },
            afterEach: function(browser){
                browser.end();
            },
    */

    beforeEach: function(browser){
        const nav = browser.page.navPage();
       
    },
    afterEach: function(browser){
        
    },

    'Exercise 1: Buttons - Checkboxes with PO function': (browser) => {
        const ex1 = browser.page.exercise1Page();
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        ex1.verifyChkBoxes();
        browser.click(constants.SELECTORS.CSS, '[id="checkbox2"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.waitForElementPresent(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.click(constants.SELECTORS.XPATH, '//*[text()="Reset"]');
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.end();
    },

    'Exercise 1: Buttons - Radio buttons with PO function': (browser) => {
        const ex1 = browser.page.exercise1Page();
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);

        ex1.verifyRadioBtns();

        browser.click(constants.SELECTORS.CSS, '[for="radio-button1"]');
        browser.pause(constants.PAUSE.pauseFor3); 

        ex1.navToHome();

        browser.end();
    }
}