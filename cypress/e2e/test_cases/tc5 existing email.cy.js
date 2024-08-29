import { existingEmailUser } from "../data-mocks/data-users";

describe(' Register User with existing email', ()=>{
    it('existing email', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('be.visible').contains('New User Signup!')
        cy.get('[data-qa="signup-name"]').type(existingEmailUser.name)
        cy.get('[data-qa="signup-email"]').type(existingEmailUser.email)
        cy.get('[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('be.visible').contains('Email Address already exist!')
    })
})