const assert = require('assert');

describe('Items search', function () {
    it('should show results in case multiple items mathes', function (){
        browser.url(`/`)
        $('input[name="query"]').setValue('duck')
        browser.keys(['Enter']); 
        browser.pause(10000)
        const searchResultsPage = $('#box-search-results')
        const searchResults = searchResultsPage.$$('.product-column')
        assert(searchResults.length > 1,'Search results page should have multiple items on it')
    })
})