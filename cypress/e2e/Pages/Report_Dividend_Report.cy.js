/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
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
  cy.get('[formcontrolname="otp1"]').type('0');
  cy.get('[formcontrolname="otp2"]').type('0');
  cy.get('[formcontrolname="otp3"]').type('0');
  cy.get('[formcontrolname="otp4"]').type('0');
  cy.wait(3000);


    //cy.get('.continue_button_wrap').click()

    //Click on form
     cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    cy.wait(5000)


    // click on Reports
    cy.get('#ReportDropdown').click({ force: true })
    cy.wait(4000)

    // 7) Dividend Report
    //cy.get('#ReportDropdown').click()
    cy.get('[href="#/dividend-report"]').click()
    cy.wait(3000)

    //Click on Submit Button
    cy.get('.btn').click()
    cy.wait(5000)

    cy.get('[src="../../../../assets/image/icon/pdf.png"]').click()
    cy.wait(5000)

    //cy.get('[data-kendo-grid-item-index="5"] > [data-kendo-grid-column-index="5"]').click()
    //cy.wait(3000)

    cy.get('.header_top_space_add').click()
    cy.wait(1000)

    cy.get('.mis-corporate-form > :nth-child(1)').click()
        .type("{downArrow}{downArrow}{Enter}")
    cy.wait(2000)

    cy.get('.btn').click()
    cy.wait(5000)

    //Selecting GRID
    cy.get('.k-grid').click()
    cy.wait(3000)


    // Selecting GRID Content
    cy.get('.k-group-footer > [aria-colindex="1"]').click()
    cy.wait(3000)

    //Move to TOP 
    cy.get('.mis > .container').click()
    cy.wait(3000)

    cy.get('body').click()
    cy.wait(4000)

   //Download Excel Report
   cy.get('[src="../../../../assets/image/icon/excel.png"]').click()
   cy.wait(3000)
})