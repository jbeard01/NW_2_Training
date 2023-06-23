const constants = require('../constants');

module.exports = {
    elements: {
        btnLink: "Buttons",

    },

    commands: [
        {
            // This function will navigate to the Buttons menu and select correct menu item by variables passed into the function
            // Expects 2 arguments 1) the link text of the menu item, and 2) the url content to verify correct landing page
            navToButtons: function (selector0, selector1){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, self.elements.btnLink.selector);
                this.click(constants.SELECTORS.LINK, self.elements.btnLink.selector);
                this.waitForElementPresent(constants.SELECTORS.LINK, selector0);
                this.click(constants.SELECTORS.LINK, selector0);
                this.verify.urlContains(selector1);
            }
        },

        {
            // This function will verify that the checkboxes are present
            verifyChkBoxes: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox1"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox2"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="checkbox3"]');
            }
        },

        {
            // This function will navigate to the correct page and verify that the radio buttons are present
            verifyRadioBtns: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
                this.click(constants.SELECTORS.LINK, "Buttons");
                this.waitForElementPresent(constants.SELECTORS.LINK, "Radio buttons");
                this.click(constants.SELECTORS.LINK, "Radio buttons");
                this.verify.urlContains('radiobuttons');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button1"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button2"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button3"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[for="radio-button4"]');
            }
        }
    ]
}