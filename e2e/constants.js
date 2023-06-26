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
        buttonMenu: "",
        chkboxLink: "",
        chkBoxUrlVerify: '',
        radioBtnLink: "",
        radioBtnUrlVerify: '',
        chkBox2: '',
        resetBtnXpath: '',
        radioBtn1: ''
    },
    IFRAMES: {
        iframeMenu: "",
        iframeUrlVerify: '',
        titleLoc: '',
        titleText: "",
        titleFontSize: '',
        titleFontWeight: '',
        subTitleLoc: '',
        subTitleText: "",
        subTitleFontSize: '',
        subTitleFontWeight: '',
        learnMoreBtnLoc: '',
        learnMoreBtnText: '',
        learnMoreText: "",
    },
    FORMS: {
        formsMenu: "",
        loginLink: "",
        registerLink: "",
        loginUrlVerify: '',
        registerUrlVerify: '',
        alertMsgLoc: '',
        badCredMsg: "",
        createActSucessMsg: "",
        loginSuccessMsg: "",
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