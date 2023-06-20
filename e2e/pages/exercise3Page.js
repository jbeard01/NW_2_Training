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
            // This function will navigate to the login page of forms menu
            navToLogin: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
                this.click(constants.SELECTORS.LINK, "Forms");
                this.waitForElementPresent(constants.SELECTORS.LINK, "Login");
                this.click(constants.SELECTORS.LINK, "Login");
                this.verify.urlContains('login');
            }
        },

        {
            // This function will navigate to the register page of forms menu
            navToReg: function (){
                const self = this;
                
            }
        },

        {
            // This function will attempt to login to the website
            login: function (){
                const self = this;
                
            }
        },

        {
            // This function will fill out the registration form
            registerForm: function (){
                const self = this;
                
            }
        }
    ]
}