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
   cy.wait(5000)

    //Click on form
    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
   cy.wait(3000)



    // click on Reports
    cy.get('#ReportDropdown').click({ force: true })
    cy.wait(2000)

    // 3) Trade Log
    //cy.get('#ReportDropdown').click()
    cy.get('[href="#/tradelog"]').click()
    cy.wait(3000)

    // 1) year 2023-2024
    //Click on CheckBox 
    cy.get('.k-icon').click()
    cy.wait(200)

    //Click on Download Button
    cy.get('.btn').click()
    cy.wait(200)

    // 2) year 2022-2023
    cy.get('.k-icon')
    //.type("{downArrow}{Enter}")
    cy.wait(200)

    // //Click on Download Button
    cy.get('.btn')
    cy.wait(4000)

    // 3) year 2021-2022
    cy.get('.k-icon').type("{downArrow}{downArrow}{Enter}")
    cy.wait(200)

    //Click on Download Button
    cy.get('.btn').click()

})