export class LoginPage {

    enterUsername() {
        //cy.get(':nth-child(2) > .text_form').clear()
        cy.get('.userid_wrap > .input_wrap > .text_form').type('J33')
    }

    enterPassword() {
        cy.get('#LoginPassword').type('Alpha@123')
    }

    clickLogin() {
        cy.get('.login_button_wrap').click({ force: true });
    }
}