import { formUser } from "../data-mocks/data-users";

describe('Contact Us Form ', ()=>{
    it('contect', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('div.contact-form > .title').should('be.visible').contains('Get In Touch')
        cy.get('[data-qa="name"]').type(formUser.name)
        cy.get('[data-qa="email"]').type(formUser.email)
        cy.get('[data-qa="subject"]').type('testujemy formularz')
        cy.get('[data-qa="message"]').type('Lorem ipsum')

        const fileInput = cy.get(':nth-child(6) > .form-control');
        const fileName = 'testFile.pdf';
        fileInput.attachFile(fileName);

        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('be.visible')
        cy.get('#form-section > .btn').click()
        cy.request('/').its('status').should('eq', 200)
    })
})