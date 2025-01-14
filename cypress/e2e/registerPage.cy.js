describe('Register page', () => {
  it('Must open the page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })



  it('Must fill in the fields and register', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');
    cy.get('[data-test="input-password"]').type('Gustavo123');
    cy.get('[data-test="input-confirm-password"]').type('Gustavo123');
    cy.get('[data-test="submit-button"]').click()
  })

  it('Must return a error message when register without fill in the fields', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click()

    cy.contains('form > :nth-child(5)', 'É necessário informar um endereço de email');
    cy.contains('form > :nth-child(8)', 'Crie uma senha');
    cy.contains('form > :nth-child(11)', 'Repita a senha criada acima');
    }) 
  
  it('Must return a error message when dont fill in the email field', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-password"]').type('Gustavo123');
    cy.get('[data-test="input-confirm-password"]').type('Gustavo123');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('form > :nth-child(5)', 'É necessário informar um endereço de email');

    })

  it('Must return a error message when dont fill in the password field', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('Crie uma senha').should('be.visible');

    })

  it('Must return a error message when dont fill in the confirm password field', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');
    cy.get('[data-test="input-password"]').type('Gustavo123');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('.error', 'Repita a senha criada acima');

    })
})