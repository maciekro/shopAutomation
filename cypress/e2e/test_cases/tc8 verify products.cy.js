describe('Verify All Products and product detail page', ()=>{
    it('verify products', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.request('https://automationexercise.com/products').its('status').should('eq', 200)
        cy.get('.features_items').should('be.visible').children().should('have.length', 36)
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.request('https://automationexercise.com/product_details/1').its('status').should('eq', 200)
        cy.get('.product-information > h2').invoke('prop', 'textContent').should('equal', 'Blue Top')
        cy.get('.product-information > :nth-child(3)').invoke('prop', 'textContent').should('contain', 'Category')
        cy.get(':nth-child(5) > span').invoke('prop', 'textContent').should('contain', 'Rs')
        cy.get('.product-information > :nth-child(6)').invoke('prop', 'textContent').should('contain', 'Availability')
        cy.get('.product-information > :nth-child(7)').invoke('prop', 'textContent').should('contain', 'Condition')
        cy.get('.product-information > :nth-child(8)').invoke('prop', 'textContent').should('contain', 'Brand')
    })
})