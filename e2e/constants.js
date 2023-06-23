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
        chkboxLink: "Checkboxes",
        chkBoxUrlVerify: 'checkboxes',
        radioBtnLink: "",
        radioBtnUrlVerify: '',
        chkBox2: '[id="checkbox2"]',
        resetBtnXpath: '//*[text()="Reset"]',
        radioBtn1: '[for="radio-button1"]'
    },
    IFRAMES: {
        titleLoc: '[class="display-4"]',
        titleText: "Hello, this is an Iframe!",
        titleFontSize: '56px',
        titleFontWeight: '300',
        subTitleLoc: '[class="lead"]',
        subTitleText: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        subTitleFontSize: '20px',
        subTitleFontWeight: '300',
        learnMoreBtnLoc: '[id="show-text"]',
        learnMoreText: "This text appears when you click the \"Learn more\" button",
    },
    FORMS: {

    }
};