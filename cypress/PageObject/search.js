/// <reference types="cypress" />


var search_input = "[name='keyword']";
var search_button = "[name='searchProducts']";
class SearchPage
{
    search (keyword)
    {
        cy.get(search_input).type(keyword);
        cy.get(search_button).click()
    }

}

export default SearchPage