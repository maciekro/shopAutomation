import { reviewUser } from "../data-mocks/data-users";

describe('Add review on product', ()=>{
    it('review', ()=>{
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.request('https://automationexercise.com/products').its('status').should('eq', 200)
        cy.get(':nth-child(7) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.category-tab > :nth-child(1) > .nav').contains('Write Your Review')
        cy.get('#name').type(reviewUser.name)
        cy.get('#email').type(reviewUser.email)
        cy.get('#review').type(reviewUser.message)
        cy.get('#button-review').click()
        cy.get('.col-md-12 > .alert-success').contains('Thank you for your review.')
    })
})