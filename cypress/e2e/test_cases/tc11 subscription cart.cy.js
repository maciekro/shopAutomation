describe('Verify Subscription in Cart page', ()=>{
    it('Subscription cart', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('#footer').scrollIntoView();
        cy.get('.single-widget > h2').should('be.visible').contains('Subscription')
        cy.get('#susbscribe_email').type('test_email@example.com')
        cy.get('#subscribe').click()
        cy.get('.alert-success').should('be.visible')
    })
})