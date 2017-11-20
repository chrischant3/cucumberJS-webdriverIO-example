const {defineSupportCode} = require('cucumber');
const homePage = require('../support/pages/homePage');
const page = homePage(browser);
const {expect} = require('chai')


defineSupportCode(({Given, Then}) => {
    Given(
        /^I visit "([^"]*)?"$/, function(url) {
            page.openPage()
        });

    Then(
        /^the page title "([^"]*)?" is present$/, function(title) {
            //examples of how to access element text
            console.log('title: ', browser.getTitle())
            console.log('title function: ', page.title())
            expect(page.title()).to.equal(title)
        });
});