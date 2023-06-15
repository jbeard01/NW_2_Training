const constants = require('../constants'); // reference to hardcoded constants for use in test scripts and PO functions

module.exports = {

    '@tags': ['test'], // tags to target for run script

    /*
    The objective of this module is to learn how to find and interact with elements inside an iframe, in addition to reinforcing selector strategies learned 
    in the previous exercise.

        Exercise 2: Iframes
            Script: Iframe - verify text
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the Title and Subtitle text
                    - BONUS: Verify the content text
            
            NOTE: This rem to px conversion can be used to verify return value of css properties
            (https://codebeautify.org/rem-to-px-converter)

            Script: Iframe - css properties
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the Title and Subtitle css properties
                    - font size
                    - font weight
                    - BONUS: Verify the font size and weight of the iframe content

            Script: Iframe - element interaction
                1) Navigate to the Iframes page
                2) Switch focus to the iframe
                3) Verify the learn more text is NOT visible
                3) Click the "Learn more" button
                4) Verify the text becomes visible and is correct
    */

    // beforeEach: function(browser){
    //     browser.url(process.env.URL);
    //     browser.waitForElementPresent('body', 3000);
    // },

    // after: function(browser){
    //     browser.end();
    // },

    'Exercise 2: Iframe - verify text': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        browser.click(constants.SELECTORS.LINK, "Iframes");
        // Optional: verify correct landing page URL
            browser.assert.urlContains('iframe');
        // Switch to iframe
        browser.frame('[id="iframe-checkboxes"]');
        // Verify Iframe title and subtitle are correct
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[class="display-4"]');
        browser.assert.textEquals('[class="display-4"]',"Hello, this is an Iframe!", "Title text is correct!");
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[class="lead"]');
        browser.assert.textEquals('[class="lead"]', "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", "Subtitle text is correct!");
        // BONUS: Find the element for iframe content without an attribute to target
            browser.waitForElementPresent(constants.SELECTORS.CSS, 'body > div > p:nth-child(4)');
            browser.assert.textEquals('body > div > p:nth-child(4)', "Lorem ipsum dolor sit amet.", "Content text is correct!");
    },

    'Exercise 2: Iframe - css properties': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        browser.click(constants.SELECTORS.LINK, "Iframes");
        // Optional: verify correct landing page URL
            browser.assert.urlContains('iframe');
        // Switch to iframe
        browser.frame('[id="iframe-checkboxes"]');
        // Verify title font size and weight
        browser.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-size', function (result) {
            elSize = result.value;
            browser.assert.equal(elSize, '56px', "Title font size is correct!");
        });
        browser.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-weight', function (result) {
            elWeight = result.value;
            browser.assert.equal(elWeight, '300', "Title font weight is correct!");
        });
        // Verify subtitle font size and weight
        browser.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-size', function (result) {
            elSize = result.value;
            browser.assert.equal(elSize, '20px', "Subtitle font size is correct!");
        });
        browser.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-weight', function (result) {
            elWeight = result.value;
            browser.assert.equal(elWeight, '300', "Subtitle font weight is correct!");
        });
        // BONUS: get font size and weight for iframe content
            browser.getCssProperty(constants.SELECTORS.CSS, 'body > div > p:nth-child(4)', 'font-size', function (result) {
                elSize = result.value;
                browser.assert.equal(elSize, '16px', "Conte font size is correct!");
            });
            browser.getCssProperty(constants.SELECTORS.CSS, 'body > div > p:nth-child(4)', 'font-weight', function (result) {
                elWeight = result.value;
                browser.assert.equal(elWeight, '400', "Content font weight is correct!");
            });
    },

    'Exercise 2: Iframe - element interaction': (browser) => {
        browser.url(process.env.URL);
        browser.waitForElementPresent('body', 3000);
        browser.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
        browser.click(constants.SELECTORS.LINK, "Iframes");
        // Optional: verify correct landing page URL
            browser.assert.urlContains('iframe');
        // Switch to iframe
        browser.frame('[id="iframe-checkboxes"]');
        // Verify that Learn more text is not visible
        browser.assert.not.visible('[id="show-text"]');
        // Click Learn more button
        browser.waitForElementPresent(constants.SELECTORS.CSS, '[id="learn-more"]');
        browser.click(constants.SELECTORS.CSS, '[id="learn-more"]');
        // Verify text is visible and correct
        browser.assert.visible('[id="show-text"]');
        browser.assert.textEquals('[id="show-text"]', "This text appears when you click the \"Learn more\" button", "Text is visible and correct!");
    },

}