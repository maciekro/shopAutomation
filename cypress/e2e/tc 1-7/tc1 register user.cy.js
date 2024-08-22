describe('e2e register user', ()=>{
    it('register user', ()=> {
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200);
        cy.get('.header-middle').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.signup-form > h2').should('be.visible').contains('New User Signup!');
        cy.get('[data-qa="signup-name"]').type('Jon_Doe');
        cy.get('[data-qa="signup-email"]').type('jon_doe@niepodam.pl');
        cy.get('[data-qa="signup-button"]').click();
    })
})