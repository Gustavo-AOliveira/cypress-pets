beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.intercept('POST','https://adopet-api-i8qu.onrender.com/adotante/login',{
        statusCode: 400,}).as('stubPost')
    })


describe('Login page', () => {
    
    it('Must open the page', () => {
        cy.login('gustavo1@gmail.com','Gustavo123');
    })

    
    it('Must return a error about fields', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Insira sua senha').should('be.visible');
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    })

    it('Must return a password error', () => {
        cy.get('[data-test="input-loginEmail"]').type('gustavo1@gmail.com');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Insira sua senha').should('be.visible');
    })
  
    it('Must return a email errorpage', () => {
        cy.get('[data-test="input-loginPassword"]').type('Gustavo123');

        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    })

    it('Must failed without field erros', () => {
        cy.login('gustavo1@gmail.com','Gustavo123');
        cy.wait('@stubPost');
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })

})


  






  