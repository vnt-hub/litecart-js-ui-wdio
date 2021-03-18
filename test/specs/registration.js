const assert = require('assert');

describe('User', function () {
    it('can register', function () {
        browser.url(`/create_account`)
        const registrationForm = $('#box-create-account')
        registrationForm.$('input[name="firstname"]').setValue('Test')
        registrationForm.$('input[name="lastname"]').setValue('Test')
        const countrySelect = $('select[name="country_code"]')
        countrySelect.selectByVisibleText('Belarus')

        const email = `test${new Date().getTime() / 1000}@test.com`
        
        registrationForm.$('input[name="email"]').setValue(email)
        registrationForm.$('input[name="phone"]').setValue('+375291234567')

        registrationForm.$('input[name="password"]').setValue('Qwerty123qwe')
        registrationForm.$('input[name="confirmed_password"]').setValue('Qwerty123qwe')
        registrationForm.$('input[name="terms_agreed"]').click()

        browser.pause(10000)

        registrationForm.$('button[name="create_account"]').click()

        // '#notices .alert-success'
        // 'Your customer account has been created.'
        browser.pause(2000)
        const alert = $('#notices .alert-success')

        assert(alert.isDisplayed(), `Expected success alert after registration`)
        
        const alertText = alert.getText()
        const expectedText = 'Your customer account has been created.'
        assert(alertText.includes(expectedText),
            `Alert text:  "${alertText}" to match expected: "${expectedText}", after successful registration`)
    })
})