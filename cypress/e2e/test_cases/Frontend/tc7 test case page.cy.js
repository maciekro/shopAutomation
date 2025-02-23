describe('Verify Test Cases Page ', ()=>{
    it('visibility of the test case page', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.request('https://automationexercise.com/test_cases').its('status').should('eq', 200)
    })
})