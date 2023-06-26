const constants = require('../constants');

module.exports = {
    elements: {
        // shared elements
        password: '[id="password"]',
        // login page elements
        loginEmail: '[id="email"]',
        submitBtn: '[id="submitLoginBtn"]',
        // registration form elements
        firstName: '[id="firstName"]',
        lastName: '[id="lastName"]',
        phone: '[id="phone"]',
        countryPicker: '[id="countries_dropdown_menu"]',
        email: '[id="emailAddress"]',
        chkboxToC: '[id="exampleCheck1"]',
        registerBtn:'[id="registerBtn"]'
    },

    commands: [
        {
            // This function will attempt to login to the website
            // This function expects 2 arguments passed in 1) email, 2) password
            login: function (selector0, selector1){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.loginEmail.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.loginEmail.selector, selector0);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.password.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.password.selector, selector1);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.submitBtn.selector);
                this.click(constants.SELECTORS.CSS, self.elements.submitBtn.selector);
            }
        },

        {
            // This function will fill out the registration form
            // This function expects a single argument (must be an object) 1) account object. This function will then parse the account object variables
            // To use correctly all objects passed in to this function must have the same variable names
            registerForm: function (selector){
                const self = this;
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.firstName.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.firstName.selector, selector.firstName);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.lastName.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.lastName.selector, selector.lastName);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.phone.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.phone.selector, selector.phone);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.countryPicker.selector);
                this.click(constants.SELECTORS.CSS, self.elements.countryPicker.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, selector.country);
                this.click(constants.SELECTORS.CSS, selector.country);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.email.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.email.selector, selector.email);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.password.selector);
                this.setValue(constants.SELECTORS.CSS, self.elements.password.selector, selector.password);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.chkboxToC.selector);
                this.click(constants.SELECTORS.CSS, self.elements.chkboxToC.selector);
                this.waitForElementPresent(constants.SELECTORS.CSS, self.elements.registerBtn.selector);
                this.click(constants.SELECTORS.CSS, self.elements.registerBtn.selector);
            }
        }
    ]
}