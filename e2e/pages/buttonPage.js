const constants = require('../constants');

module.exports = {
    elements: {
        btnLink: "Buttons",
        // checkbox button elements
        chkbox1: '[id="checkbox1"]',
        chkbox2: '[id="checkbox2"]',
        chkbox3: '[id="checkbox3"]',
        // raido buttons elements
        radioBtn1: '[for="radio-button1"]',
        radioBtn2: '[for="radio-button2"]',
        radioBtn3: '[for="radio-button3"]',
        radioBtn4: '[for="radio-button4"]'
    },

    commands: [
        {
            // This function will verify that the checkboxes are present
            // This function expects no arguments passed into it
            verifyChkBoxes: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.chkbox1.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.chkbox2.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.chkbox3.selector);
            }
        },

        {
            // This function will navigate to the correct page and verify that the radio buttons are present
            // This function expects no arguments passed into it
            verifyRadioBtns: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.radioBtn1.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.radioBtn2.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.radioBtn3.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.radioBtn4.selector);
            }
        }
    ]
}