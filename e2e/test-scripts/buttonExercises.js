const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    Module 2
    The objective of this module is to learn about and understand the POM or Page Object Model, hard vs soft assertions, and how to call a page object function inside a test script. 
    In this exercise, code will be moved to a page object file, and a page object function created to be used in it's place. 
    This will highlight how the POM works, and assert vs verify.

    Using the provided example, create a Page Object Function that will complete the test. 
        *** NOTE: Page Object Functions (PO Function) should not contain hard assertions! ***

        Exercise 1: Buttons (modify existing long form scripts)

            Script: Checkboxes page object function
                Create a page object function (verifyChkBoxes) that does the following:
                    1) Navigate to the buttons menu and select Checkboxes
                    2) Verify the landing page URL is correct
                    3) Verify the 3 checkboxes are present

                1) Click the 2nd checkbox
                2) Reset the selection
            
            Script: Radio buttons page object function
                Create a page object function (verifyRadioBtns) that does the following:
                    1) Navigate to the buttons menu and select Radio buttons
                    2) Verify the 4 radio button options are present
                    3)Verify the landing page URL is correct 
                1) Click the first radio button
                2) Return to the home screen
                    - BONUS: Create a page object function (navToHome) to use then navbar to return home, verify URL
                    1) Use the navbar functions of the website to navigate to the home screen
                    2) Verify the home page by URL
    */

    beforeEach: function(browser){
        const nav = browser.page.navPage();
        nav.navToSite();
    },
    afterEach: function(browser){
        browser.end();
    },

    'Exercise 1: Buttons - Checkboxes with PO function': (browser) => {
        const button = browser.page.buttonPage();
        // navigate to buttons menu and select checkboxs
        button.navToButtons(constants.BUTTONS.chkboxLink, constants.BUTTONS.chkBoxUrlVerify);
        button.verifyChkBoxes();
        browser.click(constants.SELECTORS.CSS, constants.BUTTONS.chkBox2);
        browser.pause(constants.PAUSE.pauseFor3); 
        browser.waitForElementPresent(constants.SELECTORS.XPATH, constants.BUTTONS.resetBtnXpath);
        browser.click(constants.SELECTORS.XPATH, constants.BUTTONS.resetBtnXpath);
        browser.pause(constants.PAUSE.pauseFor3); 
    },

    'Exercise 1: Buttons - Radio buttons with PO function': (browser) => {
        const button = browser.page.buttonPage();
        const nav = browser.page.navPage();
        button.verifyRadioBtns();
        browser.click(constants.SELECTORS.CSS, constants.BUTTONS.radioBtn1);
        browser.pause(constants.PAUSE.pauseFor3);
        nav.navToHome();
    }
}