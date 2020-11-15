/// <reference types="cypress" />

context('Cadastro Usuário', () => {
  let usuario = {};

  before(() => {
    cy.fixture('mock.json').then(mock => usuario = mock);
  });

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('Procura o campo de "First name" e digita um nome', () => {
    cy.get('#defaultRegisterFormFirstName').type(usuario.primeiroNome);
  })

  it('Procura o campo de "Last name" e digita um nome', () => {
    cy.get('#defaultRegisterFormLastName').type(usuario.ultimoNome);
  })

  it('Procura o campo de "E-mail" e digita um e-mail', () => {
    cy.get('#defaultRegisterFormEmail').type(usuario.email);
  })

  it('Procura o campo de "Password" e digita um e-mail', () => {
    cy.get('#defaultRegisterFormPassword').type(usuario.pwd);
  })

  it('Procura o campo de "Password" e digita um password', () => {
    cy.get('#defaultRegisterPhonePassword').type(usuario.tel);
  })

});
