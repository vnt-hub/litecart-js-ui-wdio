const chai = require('chai')

const expect = chai.expect
const assert = chai.assert

chai.should()

describe('Chai', function () {
    it('should', function () {
        browser.url()
        $("div").isDisplayed().should.equal(true, 'hello world')
        $("div").isDisplayed().should.to.be.equal(true, 'hello world')
    })

    it('expect', function () {
        browser.url()
        expect($("div").isDisplayed(), 'error mesage').to.be.true
    })

    it('assert', function () {
        browser.url();
        assert.isTrue($("div").isDisplayed(), 'hello world')
    })
})