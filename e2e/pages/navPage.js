const constants = require('../constants');

module.exports = {
    //Use this template to spin off new page object files 
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