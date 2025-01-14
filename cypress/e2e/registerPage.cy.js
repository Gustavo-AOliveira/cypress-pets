describe('Must open the page', () => {
  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
})


describe('Must fill in the fields and register', ()=> {
  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');
    cy.get('[data-test="input-password"]').type('Gustavo123');
    cy.get('[data-test="input-confirm-password"]').type('Gustavo123');
    cy.get('[data-test="submit-button"]').click()
  })
})

describe('Must return a error message when register without fill in the fields', () => {

  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="submit-button"]').click()

    cy.contains('form > :nth-child(5)', 'É necessário informar um endereço de email');
    cy.contains('form > :nth-child(8)', 'Crie uma senha');
    cy.contains('form > :nth-child(11)', 'Repita a senha criada acima');
    }) 
})


describe('Must return a error message when dont fill in the email field', () => {

  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-password"]').type('Gustavo123');
    cy.get('[data-test="input-confirm-password"]').type('Gustavo123');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('form > :nth-child(5)', 'É necessário informar um endereço de email');

    })
})

describe('Must return a error message when dont fill in the email field', () => {

  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-password"]').type('Gustavo123');
    cy.get('[data-test="input-confirm-password"]').type('Gustavo123');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('form > :nth-child(5)', 'É necessário informar um endereço de email');

    })
})

describe('Must return a error message when dont fill in the password field', () => {

  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('form > :nth-child(7)', 'Crie uma senha');

    })
})

describe('Must return a error message when dont fill in the confirm password field', () => {

  it('page', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('Gustavo1');
    cy.get('[data-test="input-email"]').type('gustavo1@gmail.com');
    cy.get('[data-test="input-password"]').type('Gustavo123');

    cy.get('[data-test="submit-button"]').click()
    cy.contains('.error', 'Repita a senha criada acima');

    })
})