const constants = require('../constants');

module.exports = {
    elements: {
        iframeLink: "Iframes",
        iframeUrl: "iframe",
        iframeLoc: '[id="iframe-checkboxes"]'
    },

    commands: [
        {
            // This function will navigate to the correct page and switch frames to the iframe
            focusIfarme: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, self.elements.iframeLink.selector);
                this.api.pause(constants.PAUSE.pauseFor1);
                this.click(constants.SELECTORS.LINK, self.elements.iframeLink.selector);
                this.assert.urlContains(self.elements.iframeUrl.selector);
                // Switch to iframe
                this.api.frame(self.elements.iframeLoc.selector);
            }
        },

        {
            // This function will verify the specific element(s) text is correct 
            verifyElText: function(selector0, selector1){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, selector0);
                this.verify.textEquals(selector0, selector1, "Element text is correct!");
            }
        },

        {
            // This function will verify the specific element(s) text font size is correct 
            verifyElFontSize: function (selector0, selector1){
                const self = this;
                // Verify title font size and weight
                this.getCssProperty(constants.SELECTORS.CSS, selector0, 'font-size', function (result) {
                    elSize = result.value;
                    this.verify.equal(elSize, selector1, "Font size is correct!");
                });
            }
        },

        {
            // This function will verify the specific element(s) text font weight is correct 
            verifyElFontWeight: function (selector0, selector1){
                const self = this;
                // Verify title font size and weight
                this.getCssProperty(constants.SELECTORS.CSS, selector0, 'font-weight', function (result) {
                    elWeight = result.value;
                    this.verify.equal(elWeight, selector1, "Font weight is correct!");
                });
            }
        },

        {
            // This function will verify button behavior making text visible when clicked
            verifyBtnBehavior: function (selector0, selector1){
                const self = this;
                this.verify.not.visible(selector0);
                // Click Learn more button
                this.waitForElementPresent(constants.SELECTORS.CSS, selector0);
                this.click(constants.SELECTORS.CSS, selector0);
                // Verify text is visible and correct
                this.verify.visible(selector0);
                this.verify.textEquals(selector0, selector1, "Text is visible and correct!");
            }
        }
    ]
}