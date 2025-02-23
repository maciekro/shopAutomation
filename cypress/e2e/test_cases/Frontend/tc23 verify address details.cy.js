import { registerDeleteUser } from "../../data-mocks/data-users";

describe('Verify address details in checkout page', ()=>{
    it('Verify address', ()=>{
        cy.visit('/');
        cy.request('/').its('status').should('eq', 200);
        cy.get('.header-middle').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').type(registerDeleteUser.name);
        cy.get('[data-qa="signup-email"]').type(registerDeleteUser.email);
        cy.get('[data-qa="signup-button"]').click();
        cy.get(':nth-child(3) > .top').click();
        cy.get('[data-qa="password"]').type(registerDeleteUser.password);
        cy.get('[data-qa="days"]').select(4);
        cy.get('[data-qa="months"]').select(6)
        cy.get('[data-qa="years"]').select('2000')
        cy.get('form > :nth-child(7)').click()
        cy.get('form > :nth-child(8)').click()
        cy.get('[data-qa="first_name"]').type(registerDeleteUser.firstName);
        cy.get('[data-qa="last_name"]').type(registerDeleteUser.lastName);
        cy.get('[data-qa="company"]').type(registerDeleteUser.company);
        cy.get('[data-qa="address"]').type(registerDeleteUser.address);
        cy.get('[data-qa="address2"]').type(registerDeleteUser.address2);
        cy.get('[data-qa="country"]').select(registerDeleteUser.country);
        cy.get('[data-qa="state"]').type(registerDeleteUser.state);
        cy.get('[data-qa="city"]').type(registerDeleteUser.city);
        cy.get('[data-qa="zipcode"]').type(registerDeleteUser.zipcode);
        cy.get('[data-qa="mobile_number"]').type(registerDeleteUser.phone);
        cy.get('[data-qa="create-account"]').click();
        cy.get('b').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.get(':nth-child(10) > a').should('be.visible').contains('Logged in as Jon_Doe');
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get(':nth-child(5) > .btn').click();
        cy.get('u').click();
        cy.get('.col-sm-6 > .btn').click();
        cy.get('#address_delivery > .address_firstname').should('have.text', 'Mr. Jon Doe');
        cy.get('#address_delivery > :nth-child(3)').should('have.text', registerDeleteUser.company);
        cy.get('#address_delivery > :nth-child(4)').should('have.text', registerDeleteUser.address);
        cy.get('#address_delivery > .address_city').invoke('text').then((text)=>{
            expect(text).to.include(registerDeleteUser.city);
            expect(text).to.include(registerDeleteUser.state);
            expect(text).to.include(registerDeleteUser.zipcode);
        });
        cy.get('#address_delivery > .address_country_name').should('have.text', registerDeleteUser.country);
        cy.get('#address_delivery > .address_phone').should('have.text', registerDeleteUser.phone);
        cy.get(':nth-child(5) > a').click();
        cy.get('b').contains('Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();
    });
});