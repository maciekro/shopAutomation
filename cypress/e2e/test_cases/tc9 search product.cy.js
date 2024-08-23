describe(' Search Product', ()=>{
    it('search', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.request('https://automationexercise.com/products').its('status').should('eq', 200)
        cy.get('#search_product').type('Men Tshirt')
        cy.get('#submit_search').click()
        cy.get('.title').should('be.visible').contains('Searched Products')
    })
})