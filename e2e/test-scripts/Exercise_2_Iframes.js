const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['null'], // tags to target for run script

    /*
    Module 1
    The objective of this module is to learn how to find and interact with elements inside an iframe, in addition to reinforcing selector strategies learned 
    in the previous exercise.

    Some scripting required, fill in the blanks for new commands

        Exercise 2: Iframes
            Script: Iframe - verify text
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the Title and Subtitle text
                    - BONUS: Verify the content text

            Script: Iframe - css properties
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the Title and Subtitle css properties
                    - font size
                    - font weight
                    - BONUS: Verify the font size and weight of the iframe content

            NOTE: Nightwatch getCssProptery returns font size in px. This rem to px conversion can be used to verify return value of css property font size if not using px
            (https://codebeautify.org/rem-to-px-converter)

            Script: Iframe - element interaction
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the learn more text is NOT visible
                3) Click the "Learn more" button
                4) Verify the text becomes visible and is correct

    Complete list of commands used in this exercise are listed in the README.md file of this repository
    */

    'Exercise 2: Iframe - EXAMPLE switch to iframe': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        browser.click(constants.SELECTORS.LINK, "Iframes");
        // Optional: verify correct landing page URL
            browser.assert.urlContains('iframe');
        // Switch to iframe
        browser.frame('[id="iframe-checkboxes"]');
    },

    'Exercise 2: Iframe - verify text': (browser) => {
        // start your script here

        // Optional: verify correct landing page URL
            
        // Switch to iframe
        
        // Verify Iframe title and subtitle are correct
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "Hello, this is an Iframe!", "Title text is correct!");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", "Subtitle text is correct!");
        // BONUS: Find the element for iframe content without an attribute to target
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "Lorem ipsum dolor sit amet.", "Content text is correct!");
    },

    'Exercise 2: Iframe - css properties': (browser) => {
        // start your script here

        // Optional: verify correct landing page URL
            
        // Switch to iframe
        
        // Verify title font size and weight
        browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-size', function (result) {
            elSize = result.value;
            browser.assert.equal(elSize, '<insert css value of font size here>', "Title font size is correct!");
        });
        browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-weight', function (result) {
            elWeight = result.value;
            browser.assert.equal(elWeight, '<insert css value of font weight here>', "Title font weight is correct!");
        });
        // Verify subtitle font size and weight
        browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-size', function (result) {
            elSize = result.value;
            browser.assert.equal(elSize, '<insert css value of font size here>', "Subtitle font size is correct!");
        });
        browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-weight', function (result) {
            elWeight = result.value;
            browser.assert.equal(elWeight, '<insert css value of font weight here>', "Subtitle font weight is correct!");
        });
        // BONUS: get font size and weight for iframe content
        // browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-size', function (result) {
        //     elSize = result.value;
        //     browser.assert.equal(elSize, '<insert css value of font size here>', "Conte font size is correct!");
        // });
        // browser.getCssProperty(constants.SELECTORS.CSS, '<insert correct locator here>', 'font-weight', function (result) {
        //     elWeight = result.value;
        //     browser.assert.equal(elWeight, '<insert css value of font weight here>', "Content font weight is correct!");
        // });
    },

    'Exercise 2: Iframe - element interaction': (browser) => {
        // start your script here

        // Optional: verify correct landing page URL
            
        // Switch to iframe
        
        // Verify that Learn more text is not visible
        browser.assert.not.visible('<insert correct locator here>');
        // Click Learn more button
        browser.waitForElementPresent(constants.SELECTORS.CSS, '<insert correct locator here>');
        browser.click(constants.SELECTORS.CSS, '<insert correct locator here>');
        // Verify text is visible and correct
        browser.assert.visible('<insert correct locator here>');
        browser.assert.textEquals('<insert correct locator here>', "<insert the text to verify here>", "Text is visible and correct!");
    },

}