const constants = require('../constants');

module.exports = {
    elements: {
        

    },

    commands: [
        { 
            // EXAMPLE page object function: Navigates to site under test and verifies the body of the html has loaded
            navToSite: function (){
                const self = this;
                this.api.url(process.env.URL);
                this.waitForElementPresent('body', 3000);
            }
        },

        {
            // This function will navigate to the correct page and switch frames to the iframe
            focusIfarme: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, "Iframes");
                this.api.pause(constants.PAUSE.pauseFor1);
                this.click(constants.SELECTORS.LINK, "Iframes");
                this.assert.urlContains('iframe');
                // Switch to iframe
                this.api.frame('[id="iframe-checkboxes"]');
            }
        },

        {
            // This function will verify the specific element(s) text is correct 
            verifyElText: function(){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="display-4"]');
                this.verify.textEquals('[class="display-4"]', "Hello, this is an Iframe!", "Title text is correct!");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[class="lead"]');
                this.verify.textEquals('[class="lead"]', "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.", "Subtitle text is correct!");
            }
        },

        {
            // This function will verify the specific element(s) text font size/weight is correct 
            verifyElFont: function (){
                const self = this;
                // Verify title font size and weight
                this.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-size', function (result) {
                    elSize = result.value;
                    this.verify.equal(elSize, '56px', "Title font size is correct!");
                });
                this.getCssProperty(constants.SELECTORS.CSS, '[class="display-4"]', 'font-weight', function (result) {
                    elWeight = result.value;
                    this.verify.equal(elWeight, '300', "Title font weight is correct!");
                });
                // Verify subtitle font size and weight
                this.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-size', function (result) {
                    elSize = result.value;
                    this.verify.equal(elSize, '20px', "Subtitle font size is correct!");
                });
                this.getCssProperty(constants.SELECTORS.CSS, '[class="lead"]', 'font-weight', function (result) {
                    elWeight = result.value;
                    this.verify.equal(elWeight, '300', "Subtitle font weight is correct!");
                });
            }
        },

        {
            // This function will verify button behavior making text visible when clicked
            verifyBtnBehavior: function (){
                const self = this;
                this.verify.not.visible('[id="show-text"]');
                // Click Learn more button
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="learn-more"]');
                this.click(constants.SELECTORS.CSS, '[id="learn-more"]');
                // Verify text is visible and correct
                this.verify.visible('[id="show-text"]');
                this.verify.textEquals('[id="show-text"]', "This text appears when you click the \"Learn more\" button", "Text is visible and correct!");
            }
        }
    ]
}