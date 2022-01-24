/// <reference types="cypress" />

class BasePage
{

    go_to_page(url)
    {
        if(url == null)
        {
            cy.visit("https://petstore.octoperf.com/")
        }
        else
        {
            cy.visit("https://petstore.octoperf.com/"+url)
        }
    }

    

}

export default BasePage