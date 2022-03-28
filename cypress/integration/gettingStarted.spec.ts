/// <reference types="cypress" />

describe('First test Suite', () => {

  it.only('First Test', () => {
    cy.visit('/');
    cy.contains('Form').click();
    cy.contains('Form Layouts').click();

    cy.get('[data-cy]="signInButton"').click();

  });

});

