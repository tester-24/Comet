/// <reference types="cypress"/>

import { LoginPage } from "./login_1.cy.js"
const loginPage = new LoginPage

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    cy.wait(3000)

    //Pin Page
    cy.get('.form_wrap').click()
    cy.wait(2000)
 
  //Enter Pin
  cy.wait(1000);
  cy.get('[formcontrolname="otp1"]').type('1');
  cy.get('[formcontrolname="otp2"]').type('2');
  cy.get('[formcontrolname="otp3"]').type('3');
  cy.get('[formcontrolname="otp4"]').type('4');
  cy.wait(3000);
   
   //cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)

  //Click on PARTNERS
  cy.get('#PartnerDropdown').click()
  cy.wait(3000)

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  cy.wait(3000)

  //Select Category
  cy.get('.k-input-value-text').click()
  cy.get('select')
  cy.wait(3000)

  cy.get('.k-input-value-text').click()
  .type("{downArrow}{downArrow}{downArrow}{downArrow}{downArrow}{Enter}")
  cy.wait(3000)


  //Click On Submit Button
  cy.get('.mt-1 > .btn').click()
  cy.wait(7000)


  //Click on Calendar
  cy.get('.collection_date_picker > .k-input-button')

  

  //Download Excel
  //.cy.get('.btn > .ng-star-inserted').click()
  //.cy.wait(3000)
   
   
})
