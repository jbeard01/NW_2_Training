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
            // This function will navigate to the correct page and verify that the checkboxes are present
            verifyChkBoxes: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, "Buttons");
                this.click(constants.SELECTORS.LINK, "Buttons");
                this.waitForElementPresent(constants.SELECTORS.LINK, "Checkboxes");
                this.click(constants.SELECTORS.LINK, "Checkboxes");
                this.verify.urlContains('checkboxes');
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
        },

        {
            // This function will navigate to the home screen using the navbar, and verify the page is correct by checking the URL
            navToHome: function (){
                const self = this;
                this.waitForElementVisible(constants.SELECTORS.CSS, '[id="home"]');
                this.click(constants.SELECTORS.CSS, '[id="home"]');
                this.verify.urlEquals(process.env.URL); // verify home page URL
            }
        }
    ]
}