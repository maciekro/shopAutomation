describe('register user', ()=>{
    it('register user', ()=> {
        cy.visit('https://webapp.supportiv-stage.com/?channel=walmart_web&from=walmart&reset=1');
        cy.request('https://webapp.supportiv-stage.com/?channel=walmart_web&from=walmart&reset=1').its('status').should('eq', 200)
        cy.get('#thought-control').type('my cat is dead and Im sad')
        cy.get('#link-find-room').click()
    })
})