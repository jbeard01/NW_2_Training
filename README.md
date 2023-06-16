# NW Training: QA Automation

This is a training and practice project for NightWatch.js. It uses an automation practice site created for use with automation learning

Use this project to 
 - test your local development environment
 - setup new projects
 - learn more about NightWatch.js 
 - or just tinker around and have fun 

Template files have been provided for POM and test cases. 

Useful links for places to seek help with Nightwatch.js:

- [API Reference](https://nightwatchjs.org/api/)
- [Understanding the Command Queue](https://github.com/nightwatchjs/nightwatch/wiki/Understanding-the-Command-Queue)
- [Nightwatch Assertions](https://shinesavita87.wordpress.com/2020/01/17/nightwatch-assertions/)
- [GitHub Discussions](https://github.com/nightwatchjs/nightwatch/discussions)
- [Google Groups](https://groups.google.com/g/nightwatchjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/nightwatch.js)
- [Why 'var self = this'](https://medium.com/@vijay.j.shekhawat/javascript-why-var-self-this-bbbaf98ab9d9)
- [Nightwatch Tutorials](https://testautomationu.applitools.com/nightwatchjs-tutorial/)

## Testing Environments!

This project uses dotenv to target specific testing environments, used with url command like this:

```javascript
browser.url(process.env.URL);
```

## How to run scripts: npm run <run script name>

Examples: Basics script running
- `npm run test`: This script is used to run new tests being developed using the tag "test" defined in NW root directory in package.json

## Before tests can be run, the .env file will need to be added locally

 - Create a file in the root directory called .env
 - add the following: URL=https://qa-practice.netlify.app/index.html

## To get reporting, create a reports directory, with a html-reports folder
 - in the root directory create the "reports" directory
 - inside the reports directory, create a new directory called "html-reports"

## This is your stock Nightwatch tool box (does not include custom commands written for this project)

Assertion command list examples: //node_modules/nightwatch/lib/api/asertions/

## Difference between hard and soft assertions
Hard assertion: .assert – when an assertion fails, the test ends, skipping all other assertions in the test script.
Soft assertion: .verify – when an assertion fails, the test logs the failure and continues with other assertions.
NOTE: There is an additional "expect" assertion that can be used with language chains and element commands as well
    IE: browser.expect.element('selector').to.contain.text("expectedText"); 

## Command list guide for training exercises

*** Exercise 1 (1.1, 1.2) ***

### url command

```javascript
/**
 * Retrieve the URL of the current page or navigate to a new URL.
 *
 * @example
 * module.exports = {
 *  'demo Test' : function(browser) {
 *     browser.url(function(result) {
 *       // return the current url
 *       console.log(result);
 *     });
 *     //
 *     // navigate to new url:
 *     browser.url('{URL}');
 *     //
 *     //
 *     // navigate to new url:
 *     browser.url('{URL}', function(result) {
 *       console.log(result);
 *     });
 *   }
 * }
 *
 * @link /#go
 * @syntax .url([url], [callback])
 * @syntax .url(callback)
 * @param {string|function} [url] If missing, it will return the URL of the current page as an argument to the supplied callback.
 * @param {Function} [callback]
 * @api protocol.navigation
 */
```

### waitForElementPresent command

```javascript
/**
 * Waits a given time in milliseconds (default 5000ms) for an element to be present in the page before performing any other commands or assertions.
 * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
 *
 * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
 * Similarly, the default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
 *
 * @example
 * module.exports = {
 *  'demo Test': function(browser) {
 *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
 *     browser.waitForElementPresent('#index-container');
 *
 *     // specify the locate strategy (css selector/xpath) as the first argument
 *     browser.waitForElementPresent('css selector', '#index-container');
 *
 *     // with explicit timeout (in milliseconds)
 *     browser.waitForElementPresent('#index-container', 1000);
 *
 *     // continue if failed
 *     browser.waitForElementPresent('#index-container', 1000, false);
 *
 *     // with callback
 *     browser.waitForElementPresent('#index-container', 1000, function() {
 *       // do something while we're here
 *     });
 *
 *     // with custom output message - the locate strategy is required
 *     browser.waitForElementPresent('css selector', '#index-container', 'The index container is found.');
 *
 *     // with custom Spanish message
 *     browser.waitForElementPresent('#index-container', 1000, 'elemento %s no era presente en %d ms');
 *
 *     // many combinations possible - the message is always the last argument
 *     browser.waitForElementPresent('#index-container', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
 *   },
 *
 *   'demo Test with selector objects': function(browser) {
 *      browser.waitForElementPresent({
 *        selector: '#index-container',
 *        timeout: 1000
 *      });
 *
 *      browser.waitForElementPresent({
 *        selector: '#index-container',
 *        locateStrategy: 'css selector'
 *      }, 'Custom output message');
 *
 *      browser.waitForElementPresent({
 *        selector: '.container',
 *        index: 2,
 *        retryInterval: 100,
 *        abortOnFailure: true
 *      });
 *   }
 *
 *   'page object demo Test': function (browser) {
 *      var nightwatch = browser.page.nightwatch();
 *      nightwatch
 *        .navigate()
 *        .assert.titleContains('Nightwatch.js');
 *
 *      nightwatch.api.waitForElementPresent('@featuresList', function(result) {
 *        console.log(result);
 *      });
 *   }
 * }
 *
 * @method waitForElementPresent
 * @syntax .waitForElementPresent([using], selector, [timeout], [pollInterval], [abortOnAssertionFailure], [callback], [message]);
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {number} [time=waitForConditionTimeout] The total number of milliseconds to wait before failing.
 * @param {number} [poll=waitForConditionPollInterval] The number of milliseconds to wait between checks. You can use this only if you also specify the time parameter.
 * @param {boolean} [abortOnFailure=abortOnAssertionFailure] By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @param {string} [message] Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms).
 * @sortIndex 0
 * @api protocol.waitforelements
 */
```

### click command

``` javascript
/**
 * Simulates a click event on the given DOM element. The element is scrolled into view if it is not already pointer-interactable. See the WebDriver specification for <a href="https://www.w3.org/TR/webdriver/#element-interactability" target="_blank">element interactability</a>.
 *
 * @example
 * module.exports = {
 *   demoTest(browser) {
 *     browser.click('#main ul li a.first');
 *
 *     browser.click('#main ul li a.first', function(result) {
 *       console.log('Click result', result);
 *     });
 *
 *     // with explicit locate strategy
 *     browser.click('css selector', '#main ul li a.first');
 *
 *     // with selector object - see https://nightwatchjs.org/guide#element-properties
 *     browser.click({
 *       selector: '#main ul li a',
 *       index: 1,
 *       suppressNotFoundErrors: true
 *     });
 *
 *     browser.click({
 *       selector: '#main ul li a.first',
 *       timeout: 2000 // overwrite the default timeout (in ms) to check if the element is present
 *     });
 *   },
 *
 *   demoTestAsync: async function(browser) {
 *     const result = await browser.click('#main ul li a.first');
 *     console.log('Click result', result);
 *   }
 * }
 *
 * @method click
 * @syntax .click(selector, [callback])
 * @syntax .click(using, selector, [callback])
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string} selector The CSS/Xpath selector used to locate the element.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.elementinteraction
 * @link /#dfn-element-click
 */
```

### urlContains command

``` javascript
/**
 * Checks if the current URL contains the given value.
 *
 * ```
 *    this.demoTest = function (browser) {
 *      browser.assert.urlContains('nightwatchjs.org');
 *    };
 * ```
 *
 * @method urlContains
 * @param {string} expected The value expected to exist within the current URL.
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */
```

### pause command

``` javascript
/**
 * pause() command provides the following functionalities:
 * - Pause the test execution for the given time in milliseconds.
 * - Pause the test execution indefinitely, until resumed by pressing a key in terminal.
 * - Pause the test execution, and then step over to the next test command (execute the next test command) and pause again.
 * 
 * This command will allow you to pause the test execution in between, hop on to the browser to check the state of your
 * application (or use DevTools to debug), and once satisfied, either resume the test execution from where it was left
 * off or step over to the next test command (execute the next test command) and pause again.
 * 
 * Stepping over to the next test command would allow you to see what exactly changed in your application when the next
 * test command was executed. You can also use DevTools to monitor those changes, like the network calls that were made
 * during the execution of that command, etc.
 *
 * @example
 * this.demoTest = function (browser) {
 *   // pause for 1000 ms
 *   browser.pause(1000);
 *   // pause indefinitely until resumed
 *   browser.pause();
 * };
 *
 * @method pause
 * @param {number} [ms] The number of milliseconds to wait.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.utilities
 */
```

### end command

``` javascript
/**
 * Ends the session. Uses session protocol command.
 *
 * @example
 * this.demoTest = function (browser) {
 *   browser.end();
 * };
 *
 * @method end
 * @syntax .end([callback])
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @see session
 * @api protocol.sessions
 */
```

*** Exercise 2 (2.1, 2.2, 2.3) ***

### frames command

``` javascript
/**
 * Change focus to another frame on the page.
 *
 * Changes the focus of all future commands to another frame on the page. The
 * target frame may be specified as one of the following:
 *
 * - A number that specifies a (zero-based) index into [window.frames](
 *   https://developer.mozilla.org/en-US/docs/Web/API/Window.frames)
 * - An element (css selector) which correspond to a `frame` or `iframe`
 *   DOM element
 * - The `null` value, to select the topmost frame on the page.
 *
 * If the specified frame can not be found, a `NoSuchFrameError` will be thrown
 *
 * @example
 *  this.demoTest = function (browser) {
 *    browser.frame('<ID>', function(result) {
 *      console.log(result);
 *    });
 * }
 *
 * @link /#switch-to-frame
 * @param {string|number|null} [frameId] Identifier for the frame to change focus to.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api protocol.frames
 */
```

### textEquals command

``` javascript
/**
 * Check if an element's inner text equals the expected text.
 *
 * @example
 * 
 * ```
 *   this.demoTest = function (browser) {
 *     browser.assert.textEquals('#main', 'The Night Watch');
 *   };
 * ```
 * 
 * @method textEquals 
 * @param {string|object} definition The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {string} expected text to match text.
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */
```

### getCssProperty command

``` javascript
/**
 * Retrieve the value of a css property for a given DOM element.
 *
 * @example
 * module.exports = {
 *   demoTest(browser) {
 *     browser.getCssProperty('#main ul li a.first', 'display', function(result) {
 *       console.log('result', result);
 *       ElDisplay = result.value;
 *       browser.assert.equal(ElDisplay, 'block', "[msg]")
 *     });
 *
 *     // with explicit locate strategy
 *     browser.getCssProperty('css selector', '#main ul li a.first', 'display', function(result) {
 *       console.log('result', result);
 *     });
 *
 *     // with selector object - see https://nightwatchjs.org/guide#element-properties
 *     browser.getCssProperty({
 *       selector: '#main ul li a.first',
 *       index: 1,
 *       suppressNotFoundErrors: true
 *     }, 'display', function(result) {
 *       console.log('result', result);
 *     });
 *   },
 *
 *   demoTestAsync: async function(browser) {
 *     const result = await browser.getCssProperty('#main ul li a.first', 'display');
 *     console.log('display', result);
 *   }
 * }
 *
 * @method getCssProperty
 * @syntax .getCssProperty(selector, cssProperty, callback)
 * @syntax .getCssProperty(using, selector, cssProperty, callback)
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {string} cssProperty The CSS property to inspect.
 * @param {function} callback Callback function which is called with the result value; not required if using `await` operator.
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @returns {*} The value of the css property
 * @api protocol.elementstate
 * @link /#get-element-css-value
 */
```

### visible command

``` javascript
/**
 * Checks if the given element is visible on the page.
 *
 * ```
 * this.demoTest = function (browser) {
 *   browser.assert.visible('.should_be_visible');
 *   browser.assert.visible({selector: '.should_be_visible'});
 *   browser.assert.visible({selector: '.should_be_visible', suppressNotFoundErrors: true});
 * };
 * ```
 *
 * @method visible
 * @param {string|object} definition The selector (CSS / Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide/working-with-page-objects/#element-properties).
 * @param {string} [msg] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */
```

*** Exercise 3 (3.1, 3.2, 3.3) ***

### setValue command

``` javascript
/**
 * Sends some text to an element. Can be used to set the value of a form element or to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
 *
 * <div class="alert alert-warning">From Nightwatch v2, <strong>setValue</strong> also clears the existing value of the element by calling the <strong>clearValue()</strong> beforehand.</div>
 *
 * An object map with available keys and their respective UTF-8 characters, as defined on [W3C WebDriver draft spec](https://www.w3.org/TR/webdriver/#character-types), is loaded onto the main Nightwatch instance as `browser.Keys`.
 *
 * @example
 * // send some simple text to an input
 * this.demoTest = function (browser) {
 *   browser.setValue('input[type=text]', 'nightwatch');
 * };
 *
 * // send some text to an input and hit enter.
 * this.demoTest = function (browser) {
 *   browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
 * };
 *
 *
 * @link /session/:sessionId/element/:id/value
 * @method setValue
 * @syntax .setValue(selector, inputValue, [callback])
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {string|array} inputValue The text to send to the element or key strokes.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @link /#element-send-keys
 * @api protocol.elementinteraction
 */
```

### waitForElementVisible command

``` javascript
/**
 * Waits a given time in milliseconds (default 5000ms) for an element to be visible in the page before performing any other commands or assertions.
 *
 * If the element fails to be present and visible in the specified amount of time, the test fails. You can change this by setting `abortOnFailure` to `false`.
 *
 * You can change the polling interval by defining a `waitForConditionPollInterval` property (in milliseconds) in as a global property in your `nightwatch.json` or in your external globals file.
 *
 * Similarly, a default timeout can be specified as a global `waitForConditionTimeout` property (in milliseconds).
 *
 * @example
 * module.exports = {
 *  'demo Test': function(browser) {
 *     // with default implicit timeout of 5000ms (can be overwritten in settings under 'globals.waitForConditionTimeout')
 *     browser.waitForElementVisible('#index-container');
 *
 *     // specify the locate strategy (css selector/xpath) as the first argument
 *     browser.waitForElementVisible('css selector', '#index-container');
 *
 *     // with explicit timeout (in milliseconds)
 *     browser.waitForElementVisible('#index-container', 1000);
 *
 *     // continue if failed
 *     browser.waitForElementVisible('#index-container', 1000, false);
 *
 *     // with callback
 *     browser.waitForElementVisible('#index-container', 1000, function() {
 *       // do something while we're here
 *     });
 *
 *     // with custom output message - the locate strategy is required
 *     browser.waitForElementVisible('css selector', '#index-container', 'The index container is found.');
 *
 *     // with custom Spanish message
 *     browser.waitForElementVisible('#index-container', 1000, 'elemento %s no era presente en %d ms');
 *
 *     // many combinations possible - the message is always the last argument
 *     browser.waitForElementVisible('#index-container', 1000, false, function() {}, 'elemento %s no era visible en %d ms');
 *   },
 *
 *   'demo Test with selector objects': function(browser) {
 *      browser.waitForElementVisible({
 *        selector: '#index-container',
 *        timeout: 1000
 *      });
 *
 *      browser.waitForElementVisible({
 *        selector: '#index-container',
 *        locateStrategy: 'css selector'
 *      }, 'Custom output message');
 *
 *      browser.waitForElementVisible({
 *        selector: '.container',
 *        index: 2,
 *        retryInterval: 100,
 *        abortOnFailure: true
 *      });
 *   }
 *
 *   'page object demo Test': function (browser) {
 *      var nightwatch = browser.page.nightwatch();
 *      nightwatch
 *        .navigate()
 *        .assert.titleContains('Nightwatch.js');
 *
 *      nightwatch.api.waitForElementVisible('@featuresList', function(result) {
 *        console.log(result);
 *      });
 *   }
 * }
 *
 * @syntax .waitForElementVisible([using], selector, [timeout], [pollInterval], [abortOnAssertionFailure], [callback], [message]);
 * @method waitForElementVisible
 * @param {string} [using] The locator strategy to use. See [W3C Webdriver - locator strategies](https://www.w3.org/TR/webdriver/#locator-strategies)
 * @param {string|object} selector The selector (CSS/Xpath) used to locate the element. Can either be a string or an object which specifies [element properties](https://nightwatchjs.org/guide#element-properties).
 * @param {number} [time=waitForConditionTimeout] The total number of milliseconds to wait before failing.
 * @param {number} [poll=waitForConditionPollInterval] The number of milliseconds to wait between checks. You can use this only if you also specify the time parameter.
 * @param {boolean} [abortOnFailure=abortOnAssertionFailure] By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @param {string} [message] Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms).
 * @sortIndex 20
 * @api protocol.waitforelements
 */
```

