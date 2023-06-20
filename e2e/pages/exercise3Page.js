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
                this.waitForElementPresent(constants.SELECTORS.LINK, "Forms");
                this.click(constants.SELECTORS.LINK, "Forms");
                this.waitForElementPresent(constants.SELECTORS.LINK, "Register");
                this.click(constants.SELECTORS.LINK, "Register");
                this.verify.urlContains('register');
            }
        },

        {
            // This function will attempt to login to the website
            login: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="email"]');
                this.setValue(constants.SELECTORS.CSS, '[id="email"]', "test_1@test.com");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
                this.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
                this.click(constants.SELECTORS.CSS, '[id="submitLoginBtn"]');
            }
        },

        {
            // This function will fill out the registration form
            registerForm: function (){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="firstName"]');
                this.setValue(constants.SELECTORS.CSS, '[id="firstName"]', "First_name");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="lastName"]');
                this.setValue(constants.SELECTORS.CSS, '[id="lastName"]', "Last_name");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="phone"]');
                this.setValue(constants.SELECTORS.CSS, '[id="phone"]', "5555555555");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
                this.click(constants.SELECTORS.CSS, '[id="countries_dropdown_menu"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[value="United States of America"]');
                this.click(constants.SELECTORS.CSS, '[value="United States of America"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="emailAddress"]');
                this.setValue(constants.SELECTORS.CSS, '[id="emailAddress"]', "test_1@test.com");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="password"]');
                this.setValue(constants.SELECTORS.CSS, '[id="password"]', "auto_test_1");
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
                this.click(constants.SELECTORS.CSS, '[id="exampleCheck1"]');
                this.waitForElementPresent(constants.SELECTORS.CSS, '[id="registerBtn"]');
                this.click(constants.SELECTORS.CSS, '[id="registerBtn"]');
            }
        }
    ]
}