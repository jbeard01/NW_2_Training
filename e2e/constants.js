module.exports = {
    /* all locator strategies:
            css selector
            link text
            partial link text
            tag name
            xpath
       https://nightwatchjs.org/api/commands/#element
    */
       SELECTORS: {
        CSS: 'css selector',
        XPATH: 'xpath',
        TAGNAME: 'tag name',
        LINK: 'link text',
        PARTIAL_LINK: 'partial link text'
    },
    PAUSE: {
        pauseFor1: '1000',
        pauseFor2: '2000',
        pauseFor3: '3000'
    },
    BUTTONS: {
        buttonMenu: "Buttons",
        chkboxLink: "Checkboxes",
        chkBoxUrlVerify: 'checkboxes',
        radioBtnLink: "Radio buttons",
        radioBtnUrlVerify: 'radiobuttons',
        chkBox2: '[id="checkbox2"]',
        resetBtnXpath: '//*[text()="Reset"]',
        radioBtn1: '[for="radio-button1"]'
    },
    IFRAMES: {
        iframeMenu: "Iframes",
        iframeUrlVerify: 'iframe',
        titleLoc: '[class="display-4"]',
        titleText: "Hello, this is an Iframe!",
        titleFontSize: '56px',
        titleFontWeight: '300',
        subTitleLoc: '[class="lead"]',
        subTitleText: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        subTitleFontSize: '20px',
        subTitleFontWeight: '300',
        learnMoreBtnLoc: '[id="learn-more"]',
        learnMoreBtnText: '[id="show-text"]',
        learnMoreText: "This text appears when you click the \"Learn more\" button",
    },
    FORMS: {
        formsMenu: "Forms",
        loginLink: "Login",
        registerLink: "Register",
        loginUrlVerify: 'login',
        registerUrlVerify: 'register',
        alertMsgLoc: '[id="message"]',
        badCredMsg: "Bad credentials! Please try again! Make sure that you've registered.",
        createActSucessMsg: "The account has been successfully created!",
        loginSuccessMsg: "test_1@test.com, you have successfully logged in!",
        account: {
            firstName: "First_name",
            lastName: "Last_name",
            phone: "5555555555",
            country: '[value="United States of America"]',
            email: "test_1@test.com",
            password: "auto_test_1"
        }
    }
};