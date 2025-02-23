describe('Add Products in Cart', ()=>{
    it('add product', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('div.productinfo.text-center a[data-product-id="1"]').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('div.productinfo.text-center a[data-product-id="2"]').click()
        cy.get('u').click()
        cy.get('#cart_info').should('include.text', 'Blue Top').and('include.text', 'Men Tshirt');
    })
})