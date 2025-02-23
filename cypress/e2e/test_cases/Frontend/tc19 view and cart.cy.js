describe('View & Cart Brand Products', ()=>{
    it('view and cart', ()=>{
        cy.visit('/');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.brands_products > h2').should('be.visible')
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.request('https://automationexercise.com/brand_products/Polo').its('status').should('eq', 200)
        cy.get('.features_items').should('be.visible')
    })
})