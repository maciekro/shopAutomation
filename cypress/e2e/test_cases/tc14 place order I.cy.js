describe('Place Order: Register while Checkout', ()=>{
    it('Register while Checkout', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200)
        cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.request('https://automationexercise.com/test_cases').its('status').should('eq', 200)
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.modal-body > :nth-child(2) > a > u').click()
        cy.get('[data-qa="signup-name"]').type('JSmith')
        cy.get('[data-qa="signup-email"]').type('jsmith@niepodam.pl')
        cy.get('[data-qa="signup-button"]').click()
        cy.get(':nth-child(3) > .top').click()
        cy.get('[data-qa="password"]').type('password')
        cy.get('[data-qa="days"]').select(5);
        cy.get('[data-qa="months"]').select(7)
        cy.get('[data-qa="years"]').select('1999')
        cy.get('[data-qa="first_name"]').type('John')
        cy.get('[data-qa="last_name"]').type('Smith')
        cy.get('[data-qa="address"]').type('moon')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('Ontario')
        cy.get('[data-qa="city"]').type('Ontario')
        cy.get('[data-qa="zipcode"]').type('1234')
        cy.get('[data-qa="mobile_number"]').type('1234567')
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible').contains('Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        cy.get(':nth-child(10) > a').should('be.visible').contains(' Logged in as JSmith')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.col-sm-6 > .btn').click()
        
        const slowa = ['John Smith', 'moon', 'Canada'];

cy.get('#address_delivery').invoke('text').then((text) => {
  slowa.forEach((slowo) => {
    expect(text).to.include(slowo);
  });
});
cy.get('.form-control').type('Lorem Ipsum')
cy.get(':nth-child(7) > .btn').click()
cy.get('[data-qa="name-on-card"]').type('VISA')
cy.get('[data-qa="card-number"]').type('4709224220934907')
cy.get('[data-qa="cvc"]').type('690')
cy.get('[data-qa="expiry-month"]').type('12').type('9999')
cy.get('[data-qa="expiry-year"]').type('9999')
cy.get('[data-qa="pay-button"]').click()
cy.get(':nth-child(5) > a').click()
cy.get('[data-qa="account-deleted"]').should('be.visible').contains('Account Deleted!')
cy.get('[data-qa="continue-button"]').click()
    })
})