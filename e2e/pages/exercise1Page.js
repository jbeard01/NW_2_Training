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
                
            }
        },

        {
            // This function will navigate to the correct page and verify that the radio buttons are present
            verifyRadioBtns: function (){
                const self = this;
               
            }
        },

        {
            // This function will navigate to the home screen using the navbar, and verify the page is correct by checking the URL
            navToHome: function (){
                const self = this;
               
            }
        }
    ]
}