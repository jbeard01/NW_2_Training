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
};