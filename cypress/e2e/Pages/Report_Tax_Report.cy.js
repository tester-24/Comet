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
    cy.get('[formcontrolname="otp1"]').type('0')
    cy.get('[formcontrolname="otp2"]').type('0')
    cy.get('[formcontrolname="otp3"]').type('0')
    cy.get('[formcontrolname="otp4"]').type('0')
    cy.wait(4000)

    //Click on form
    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    cy.wait(4000);

    // click on Reports
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
    
    cy.wait(4000)

     // 5) Tax P&L
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
     cy.wait(4000)

    // Click on View 
    cy.get('.btn').click()
    cy.wait(9000)

    //Select Segment - NSE_FNO
    cy.get('.ng-submitted > :nth-child(2) > :nth-child(1)') .click({ force: true })
    .type("{downArrow}{Enter}")
    cy.wait(4000)

    //Select FY Year
    cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
    .type("{downArrow}{Enter}")
    cy.wait(4000)
    
    // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(5000)

    //Select FY Year
    cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
    .type("{downArrow}{downArrow}{Enter}")
    cy.wait(4000)

   // Click on DOWNLOAD 
   cy.get('.btn').click()
   cy.wait(3000)

   //Select FY Year
   cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
   .type("{downArrow}{downArrow}{downArrow}{Enter}")
   cy.wait(4000)

  // Click on DOWNLOAD 
  cy.get('.btn').click()
  cy.wait(9000)



    //Selecting A Segment - CURRENCY 
     cy.get('.ng-submitted > :nth-child(2) > :nth-child(1)').click()
    .type("{downArrow}{Enter}")
     cy.wait(4000)


   //Select FY Year
   cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
   .type("{upArrow}{upArrow}{upArrow}{upArrow}{Enter}")
   cy.wait(4000)

     // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(3000)


    //Select FY Year
   cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
   .type("{downArrow}{downArrow}{downArrow}{Enter}")
   cy.wait(4000)


    // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(5000)

    //Select FY Year
   cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
   .type("{upArrow}{upArrow}{upArrow}{Enter}")
   cy.wait(4000)

     // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(3000)



     //Selecting A Segment - MCX 
     cy.get('.ng-submitted > :nth-child(2) > :nth-child(1)').click()
    .type("{downArrow}{downArrow}{Enter}")
     cy.wait(4000)


     //Select FY Year
     cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
     .type("{upArrow}{upArrow}{upArrow}{Enter}")
     cy.wait(4000)

     // Click on DOWNLOAD 
     cy.get('.btn').click()
     cy.wait(3000)


      //Select FY Year
   cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click({ force: true })
   .type("{downArrow}{downArrow}{downArrow}{Enter}")
   cy.wait(4000)


    // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(3000)


     //Select FY Year
    cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
   .type("{downArrow}{Enter}")
    cy.wait(4000)


    // Click on DOWNLOAD 
    cy.get('.btn').click()
    cy.wait(3000)
     

     //Select FY Year
     cy.get('.ng-submitted > :nth-child(2) > :nth-child(2)').click()
     .type("{upArrow}{upArrow}{Enter}")
     cy.wait(4000)

     // Click on DOWNLOAD 
     cy.get('.btn').click()
     cy.wait(3000)
})