describe('Backend API Tests', () => {
    const apiUrl = 'https://automationexercise.com/api/productsList';

it('Get All Products List', () => {
    //send GET request to API
cy.request({method:'GET', url: apiUrl}).then((response) => {
    expect(response.status).to.eq(200);
});
});
});