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
    // cy.get('.six_digit_pin_wrap').invoke('val').then((otp) => {
    //     // 0000
    // });
    cy.wait(4000)

   //Click on form
   cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
   cy.wait(4000);

    // click on Reports
    cy.get('#ReportDropdown').click({ force: true })
    cy.get('[href="#/ledger"]').click()
    cy.wait(4000)

    // // 1) Ledger
    // cy.get('[href="#/ledger"]').click()
    // cy.wait(3000)

    //cy.get('#k-ee80777c-65a3-499b-8f68-628452b3db14').click()
    //Select from SEGMENT - EQUITY 
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
        .type("{downArrow}{downArrow}{Enter}")
    cy.wait(2000)

    //Click on Year
    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
        .type("{downArrow}{downArrow}{Enter}")
    cy.wait(2000)

    //Click on View Button 
    cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
    cy.wait(8000)

    //View GRID 
    cy.get('.k-grid-content').click()
    cy.wait(3000)

    // Click on Contract Bills 
    cy.get('.btn > img').click()
    cy.wait(4000)

    //Bills 
    cy.get('#bills').click()
    cy.wait(3000)

    //Download 
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(8000)

    //Ledger 
    cy.get('.modal-footer > :nth-child(2)').click({ force: true })
    cy.wait(4000)

    //Downloads -- SEND EMAIL
    //cy.get('.modal-footer > :nth-child(1)').click()
    //cy.wait(6000)

    //Click on [X]
    cy.get('.btn-close').click()
    cy.wait(4000)

    //Selecting from SEGMENT - FUTURE_OPTION
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
        .type("{downArrow}{Enter}")
    cy.wait(4000)


    //click on year
    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
        .type("{downArrow}{Enter}")
    cy.wait(2000)

    //Click on View Button
    cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
    cy.wait(6000)


    // //View GRID 
    // cy.get('.k-grid-content').click()
    // cy.wait(5000)


    //Click on LEDGER / CONTARCT BILLS
    cy.get('.btn > img').click()
    cy.wait(2000)

    //Click on Download
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(5000)

    //Click on Contacts
    cy.get(':nth-child(1) > .row > .col-sm-8 > :nth-child(2) > .form-check-label').click()
    cy.wait(2000)

    //Click on Download
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(8000)

    //Click on SEND MAIL
    cy.get('.modal-footer > :nth-child(1)').click({ force: true })
    cy.wait(3000)

    ///Click on [X] Button
    cy.get('.btn-close').click({ force: true })
    // cy.get('.close > span').click()
    cy.wait(4000)

    //Selecting from SEGMENT - CURRENCY
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
        .type("{downArrow}{Enter}")
    cy.wait(2000)


    //Selecting Year
    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
        .type("{downArrow}{Enter}")
    cy.wait(2000)

    //Click on View Button
    cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
    cy.wait(3000)


    //View GRID 
    cy.get('.k-grid-content').click({ force: true })
    cy.wait(5000)

    //Click on Contract/Bills
    cy.get('.btn > img').click()
    cy.wait(2000)

    //Click on Download
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(6000)

    //CLick on Ledger
    cy.get('#ledger').click()
    cy.wait(3000)

    //Click on SEND MAIL
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.wait(4000)


    ///Click on [X] Button
    cy.get('.btn > img').click({ force: true })
    // cy.get('.close > span').click()
    cy.wait(4000)

    //Selecting from SEGMENT - COMMODITY
    cy.get('.container > form.ng-valid > :nth-child(2) > :nth-child(1)').click()
        .type("{downArrow}{Enter}")
    cy.wait(4000)

    //Selecting from Year
    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
    cy.wait(3000)

    //Click on View Button 
    cy.get(':nth-child(2) > :nth-child(3) > .btn').click()
    cy.wait(5000)

    //cy.get('.k-grid-content').click()
    //cy.wait(2000)

    //cy.wait(4000)

    cy.get('.btn > img').click({ force: true })
    cy.wait(2000)

    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(2000)

    cy.get('#bills').click()
    cy.wait(2000)

    cy.get('.modal-footer > :nth-child(2)').click()
    cy.wait(2000)

    cy.get('.btn-close').click({ force: true })
    cy.wait(4000)



})

