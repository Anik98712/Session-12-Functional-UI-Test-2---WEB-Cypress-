/// <reference types="cypress" />
import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const search = new SearchPage ;


describe('Assignment login-> ', () => {

  it('Go to the login website and check website properly loaded', () => {
    base_page.go_to_page();
    cy.contains("Enter the Store").click()
    cy.contains("Sign In").click({force:true})
  })
  it("fill up the form and click on submit",()=>
  {
    const number = "anik";
    const password = "asdfghqwerty";
    login.fill_up_login_form(number,password);
    login.click_on_submit();
    search.search("parrot")
  })

  it("logging out from the website",()=>
  {
    login.logout();
  })


})
