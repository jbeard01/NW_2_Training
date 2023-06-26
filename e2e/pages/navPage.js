const constants = require('../constants');

module.exports = {
    //Use this template to spin off new page object files 
    elements: {
        htmlBody: 'body'

    },

    commands: [
        { 
            // EXAMPLE page object function: Navigates to site under test and verifies the body of the html has loaded
            navToSite: function (){
                const self = this;
                this.api.url(process.env.URL);
                this.waitForElementPresent(self.elements.htmlBody.selector, 3000);
            }
        },

        {
            // This function will navigate to the Buttons menu and select correct menu item by variables passed into the function
            // Expects 3 arguments: 1) the menu link text, 2) the link text of the menu item, and 3) the url content to verify correct landing page
            navToMenuItem: function (selector0, selector1, selector2){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, selector0);
                this.click(constants.SELECTORS.LINK, selector0);
                if(selector1 != null){
                    this.waitForElementPresent(constants.SELECTORS.LINK, selector1);
                    this.click(constants.SELECTORS.LINK, selector1);
                }
                this.verify.urlContains(selector2);
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