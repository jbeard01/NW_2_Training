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
client.url(process.env.URL);
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
Hard assertion: .assert – when an assertion fails, the test ends, skipping all other assertions.
Soft assertion: .verify – when an assertion fails, the test logs the failure and continues with other assertions
NOTE: There is an additional "expect" assertion that can be used with language chains and element commands as well
    IE: client.expect.element('selector').to.contain.text("expectedText"); 

## Command list guide for training exercises

*** Exercise 1-3 ***

