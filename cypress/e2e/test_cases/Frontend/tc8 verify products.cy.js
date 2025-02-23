
describe('Verify All Products and product detail page', () => {
    const baseUrl = 'https://automationexercise.com';
    const productsUrl = `${baseUrl}/products`;
    const productDetailsUrl = `${baseUrl}/product_details/1`;

beforeEach(() => {
     cy.visit('/');
     cy.request('/').its('status').should('eq', 200);
    });

it('Verify products listing and product details page', () => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.request(productsUrl).its('status').should('eq', 200);

//check visibility and amount of products
    cy.get('.features_items').should('be.visible').children().should('have.length', 36);

//click on product
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.request(productDetailsUrl).its('status').should('eq', 200);
//check details
     verifyProductDetails('Blue Top');
    });

    function verifyProductDetails(expectedProductName) {
    cy.get('.product-information > h2').invoke('text').should('equal', expectedProductName);
    cy.get('.product-information > :nth-child(3)').invoke('text').should('contain', 'Category');
    cy.get(':nth-child(5) > span').invoke('text').should('contain', 'Rs');
    cy.get('.product-information > :nth-child(6)').invoke('text').should('contain', 'Availability');
    cy.get('.product-information > :nth-child(7)').invoke('text').should('contain', 'Condition');
    cy.get('.product-information > :nth-child(8)').invoke('text').should('contain', 'Brand');
    }
});
