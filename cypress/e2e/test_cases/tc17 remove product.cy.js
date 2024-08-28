describe('Remove Products From Cart', ()=>{
    it('remove product', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get(':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(9) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('u').click()
        cy.request('https://automationexercise.com/view_cart').its('status').should('eq', 200)
        cy.get('#product-6 > .cart_delete > .cart_quantity_delete').click()
        cy.get('#product-6 > .cart_description > h4 > a').should('not.exist')
    })
})