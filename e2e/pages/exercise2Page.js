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
                
            }
        },

        {
            // This function will verify the specific element(s) text font size/weight is correct 
            verifyElFont: function (){
                const self = this;
                
            }
        },

        {
            // This function will verify button behavior making text visible when clicked
            verifyBtnBehavior: function (){
                const self = this;
                
            }
        }
    ]
}