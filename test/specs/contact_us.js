const assert = require('assert');

describe("Contact us", function() {
    it("message should send", function() {

        browser.url('/customer-service')

        $('#box-contact-us').$('input[name="name"]').setValue('testname')
        $('#box-contact-us').$('input[name="email"]').setValue('test@test.com')
        $('#box-contact-us').$('input[name="subject"]').setValue('testsubject')
        $('#box-contact-us').$('textarea[name="message"]').setValue('testmessage')
        browser.pause(10000)
        $('#box-contact-us').$('button[name="send"]').click()
        browser.pause(4000)

        const alertSuccess = $('#notices .alert-success')
        assert(alertSuccess.isDisplayed(), `Expected success alert after send message`)

        const alertText = alertSuccess.getText()
        const expectedText = 'Your email has successfully been sent'
        assert(alertText.includes(expectedText),
            `Alert text:  "${alertText}" to match expected: "${expectedText}", after successful send`)
    })
})