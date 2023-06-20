const constants = require('../constants');

module.exports = {
    elements: {
        

    },

    commands: [
        { 
            // EXAMPLE page object function
            navToSite: function (){
                const self = this;
                this.api.url(process.env.URL);
                this.waitForElementPresent('body', 3000);
            }
        },

        {


        }
    ]
}