describe('API messages', () => {

    it('Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/48f581a4-a338-4180-a022-2bdac6b575e9',
            headers: Cypress.env()
            
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('msg')
        })

    } )
})