describe('Verify Product quantity in Cart', ()=>{
    it('verify quantity', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.request('https://automationexercise.com/product_details/3').its('status').should('eq', 200)
        cy.get('#quantity').invoke('val', '5')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.get('.cart_quantity').contains('5')
    })
})