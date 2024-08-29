import { activeUser } from "../data-mocks/data-users"; //POM user credentials

describe('Search Products and Verify Cart After Login', ()=>{
    it('search and verify', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.request('https://automationexercise.com/products').its('status').should('eq', 200)
        cy.get('#search_product').type('winter')
        cy.get('#submit_search').click()
        cy.get('.title').should('be.visible').contains('Searched Products')
        cy.get('.features_items').contains('Winter')
        cy.get('.productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#cart_items > :nth-child(1)').contains('Winter')
        cy.get(':nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type(activeUser.email)
        cy.get('[data-qa="login-password"]').type(activeUser.password)
        cy.get('[data-qa="login-button"]').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('#cart_items > :nth-child(1)').contains('Winter')
    })
})