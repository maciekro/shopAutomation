describe(' Login User with incorrect email and password', ()=>{
    it('incorrect login', ()=> {
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.header-middle').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible').contains('Login to your account')
        cy.get('[data-qa="login-email"]').type('Jan_Kowalski@example.com')
        cy.get('[data-qa="login-password"]').type('incorrectPassword')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible').contains('Your email or password is incorrect!')
    })
})