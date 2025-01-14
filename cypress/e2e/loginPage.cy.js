beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
})

describe('Must open the page', () => {
    
    it('page', () => {
        cy.get('[data-test="input-loginEmail"]').type('gustavo1@gmail.com');
        cy.get('[data-test="input-loginPassword"]').type('Gustavo123');
        cy.get('[data-test="submit-button"]').click();
    })
  })

  describe('Must return a error about fields', () => {
    
    it('page', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Insira sua senha').should('be.visible');
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    })
  })

  describe('Must return a password error', () => {
    
    it('page', () => {
        cy.get('[data-test="input-loginEmail"]').type('gustavo1@gmail.com');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Insira sua senha').should('be.visible');
    })
  })

  describe('Must return a email error', () => {
    
    it('page', () => {
        cy.get('[data-test="input-loginPassword"]').type('Gustavo123');

        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
    })
  })






  