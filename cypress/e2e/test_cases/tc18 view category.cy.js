describe('View Category Products', ()=>{
    it('category products', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
        cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
        cy.request('https://automationexercise.com/category_products/1').its('status').should('eq', 200)
        cy.get('.title').should('be.visible').contains('Women - Dress Products')
        cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
        cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click()
        cy.request('https://automationexercise.com/category_products/6').its('status').should('eq', 200)
        cy.get('.title').should('be.visible').contains('Men - Jeans Products')
    })
})