describe('API messages', () => {
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0OGY1ODFhNC1hMzM4LTQxODAtYTAyMi0yYmRhYzZiNTc1ZTkiLCJhZG9wdGVyTmFtZSI6Ikd1c3Rhdm8xIiwiaWF0IjoxNzM2ODgxMjUwLCJleHAiOjE3MzcxNDA0NTB9.ikRXnz4YS3c6HkNDLNMqdJqodRT9zE84hczqhAOrFvE'

    it('Api', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/48f581a4-a338-4180-a022-2bdac6b575e9',
            headers: { authorization }
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('msg')
        })
    } )
})