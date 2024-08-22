describe('login user with correct email and password', ()=>{
    it('register user', ()=> {
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get('.header-middle').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('be.visible').contains('New User Signup!')
        cy.get('[data-qa="signup-name"]').type('Jon_Doe')
        cy.get('[data-qa="signup-email"]').type('jon_doe@niepodam.pl')
        cy.get('[data-qa="signup-button"]').click()
        cy.get(':nth-child(1) > b').should('be.visible').contains('Enter Account Information')
        cy.get(':nth-child(3) > .top').click();
        cy.get('[data-qa="password"]').type('password')
        cy.get('[data-qa="days"]').select(4);
        cy.get('[data-qa="months"]').select(6)
        cy.get('[data-qa="years"]').select('2000')
        cy.get('form > :nth-child(7)').click()
        cy.get('form > :nth-child(8)').click()
        cy.get('[data-qa="first_name"]').type('Jon')
        cy.get('[data-qa="last_name"]').type('Doe')
        cy.get('[data-qa="company"]').type('Test_Company')
        cy.get('[data-qa="address"]').type('World')
        cy.get('[data-qa="address2"]').type('America')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Texas')
        cy.get('[data-qa="city"]').type('Houston')
        cy.get('[data-qa="zipcode"]').type('12345')
        cy.get('[data-qa="mobile_number"]').type('1234567890')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.get('.nav > :nth-child(10)').should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="login-email"]').type('jon_doe@niepodam.pl')
        cy.get('[data-qa="login-password"]').type('password')
        cy.get('[data-qa="login-button"]').click()
    })
})