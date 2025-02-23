describe('Backend API Tests - Get All Brands List', () => {
    const apiUrl = 'https://automationexercise.com/api/brandsList';

    it('Get All Brands List', () => {
        cy.request({method: 'GET', url: apiUrl, headers: { 'Accept': 'application/json' } //forces json response
        }).then((response) => {
            let responseBody = response.body;
            //if 'response.body' is string, parse as json
            if (typeof responseBody === 'string') {
                responseBody = JSON.parse(responseBody);
            }
            cy.log(responseBody); // Logowanie poprawnej odpowiedzi API
            expect(response.status).to.eq(200);
            expect(responseBody).to.be.an('object'); //check if 'responseBody' is json object
            expect(responseBody).to.have.property('responseCode', 200);
            expect(responseBody).to.have.property('brands').that.is.an('array').that.is.not.empty;
            const firstBrand = responseBody.brands[0];
            expect(firstBrand).to.have.property('id').that.is.a('number');
            expect(firstBrand).to.have.property('brand').that.is.a('string');
            const brandNames = responseBody.brands.map(brand => brand.brand);
            expect(brandNames).to.include.members(["Polo", "H&M", "Madame", "Biba", "Babyhug", "Mast & Harbour", "Kookie Kids", "Allen Solly Junior"]);
        });
    });
});
