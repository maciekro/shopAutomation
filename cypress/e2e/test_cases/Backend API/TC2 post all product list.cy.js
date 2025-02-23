describe('Backend API Tests', () => {
    const apiUrl = 'https://automationexercise.com/api/productsList';

    it('POST To All Products List', () => {
        cy.request({method: 'POST', url: apiUrl, failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include('This request method is not supported');
        });
    });
});
