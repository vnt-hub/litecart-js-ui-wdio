const assert = require('assert');

describe('Items search', function () {
    it('should show results in case multiple items mathes', function (){
        browser.url(`/`)
        $('input[name="query"]').setValue('duck')
        browser.keys(['Enter']); 
        browser.pause(2000)
        const searchResultsPage = $('#box-search-results')
        const searchResults = searchResultsPage.$$('.product-column')
        assert(searchResults.length > 1,'Search results page should have multiple items on it')
    });

    it('should redirect to item page in case only one result matches', function (){
        browser.url(`/`)
        $('input[name="query"]').setValue('yellow')
        browser.keys(['Enter']); 
        browser.pause(2000)
        const searchResult =  $('#box-product')
        assert(searchResult.isDisplayed(), `Search results page should have only one result matches`)
    });

    it("should redirect to 'no matching results' in case no items matched", function() {
        browser.url('/')
        $('input[name="query"]').setValue('dsgweqwasdqwe')
        browser.keys(['Enter']); 
        browser.pause(2000)
        const searchResultsPage = $('#box-search-results').$('em')
        const noSearchResults = searchResultsPage.getText()
        assert(noSearchResults.includes('No matching results'), `Search results page should have 'no matching results'`)
    })
})