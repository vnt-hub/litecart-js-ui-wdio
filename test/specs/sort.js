const assert = require('assert');

describe("Search results sorting", function() {
    it("correctly arranges items when using 'by price' sorting", function() {
        browser.url('/')
        $('input[name="query"]').setValue('duck')
        browser.keys(['Enter']);
        browser.pause(2000)

        searchResultsPage = $('#box-search-results')
        sortByPriceLink = searchResultsPage.$('=Price')
        sortByPriceLink.click()
        browser.pause(2000)

        const searchResults = searchResultsPage.$$('.product.column')
      
        const itemPrices = searchResults.map(function (item){
            return item.getAttribute('data-price')          
        })

        let prevValue = null;

        for(let i =0; i < itemPrices.length; i++){
          if(prevValue !== null){
              assert(prevValue <= itemPrices[i] ,'Price sorting is wrong');
              prevValue = itemPrices[i];
            } 
            else {
              prevValue = itemPrices[i];
            }  
        }
    });

    it("correctly arranges items when using 'by name' sorting", function() {
        browser.url('')
        $('input[name="query"]').setValue('duck')
        browser.keys(['Enter']);
        searchResultsPage = $('#box-search-results')
        sortByNameLink = searchResultsPage.$('=Name')
        sortByNameLink.click()
        browser.pause(2000)

        const searchResultNames = searchResultsPage.$$('.name')

        let prevValue = null;
 
        for(let i =0; i < searchResultNames.length; i++){
            if(prevValue !== null){
                assert(prevValue < searchResultNames[i].getText() ,'Name sorting is wrong');
                prevValue = searchResultNames[i].getText();
            } 
            else {
                prevValue = searchResultNames[i].getText();
            }
        }
    });
  });