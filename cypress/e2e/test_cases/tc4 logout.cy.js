describe('logout user', ()=>{
    it('logout', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible').contains('Login to your account')
        cy.get('[data-qa="login-email"]').type('jon_doe1@niepodam.pl')
        cy.get('[data-qa="login-password"]').type('password')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.nav > :nth-child(10)').should('be.visible').contains(' Logged in as Jon_Doe1')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.request('https://automationexercise.com/login').its('status').should('eq', 200)
    })

})