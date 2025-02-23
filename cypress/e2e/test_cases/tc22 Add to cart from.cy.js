describe(' Add to cart from Recommended items', ()=>{
    it('recommended items', ()=>{
        cy.visit('/');
        cy.scrollTo('bottom');
        cy.get('.features_items > .title').should('be.visible');
        cy.get('.active > :nth-child(2) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').click();
        cy.get('h4 > a').should('be.visible').contains('Winter Top');
    });
});