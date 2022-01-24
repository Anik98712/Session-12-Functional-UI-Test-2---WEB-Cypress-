/// <reference types="cypress" />
var mobile_input_field = "[name='username']";
var pass_input_field = "[name='password']";
var submit_button = "[name='signon']";
var logout_locator = "[href='/actions/Account.action?signoff=']"

class signIn
{

    fill_up_login_form(mobile,pass)
    {
        cy.get(mobile_input_field).type(mobile)
        cy.get(pass_input_field).clear()
        cy.get(pass_input_field).type(pass)
    }
    
    click_on_submit()
    {
        cy.get(submit_button).click();
    }

    logout()
    {
        cy.get(logout_locator).click();
    }
}

export default signIn