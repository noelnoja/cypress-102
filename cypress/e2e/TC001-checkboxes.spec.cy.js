/// <reference types="Cypress" />

describe('Checkboxes', () => {
  it('Handling single checkbox', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
  });
  it('Handling multiple checkboxes', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    cy.get('input[type="checkbox"]')
      .check(['option2', 'option3'])
      .should('be.checked');
  });
  it('Handling multiple checkboxes', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    cy.get('input[type="checkbox"]')
      .check(['option2', 'option3'])
      .should('be.checked');
  });
});
