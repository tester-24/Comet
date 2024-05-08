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

  //Click on Partner
  cy.get('#PartnerDropdown').click()
  cy.wait(3000)

  //tag : COLLECTION_Selling

  //Click on Collection
  cy.get('[href="#/collection"]').click()
  cy.wait(3000)

  //Select Category
  cy.get('.k-input-value-text').click()
  cy.get('select')
  cy.wait(3000)

  cy.get('.k-input-value-text').click()
  .type("{downArrow}{Enter}")
  cy.wait(3000)
   

  //Click on Submit Button
  cy.get('.col-md-3 > .btn').click()
  cy.wait(5000)
  

 
   
})
