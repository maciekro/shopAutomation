describe('Verify Scroll Up using "Arrow" button and Scroll Down functionality', ()=>{
    it('Verify Scroll Up using "Arrow"', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200);
        cy.scrollTo('bottom');
        cy.get('.single-widget > h2').should('be.visible').contains('Subscription');
        cy.get('#scrollUp').click();
        cy.get('.active > :nth-child(1) > h2').should('have.text', 'Full-Fledged practice website for Automation Engineers');
    });
});