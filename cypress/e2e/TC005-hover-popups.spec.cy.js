/// <reference types="Cypress" />

describe('Pop-ups', function () {
  it('Handling pop-ups on hover', function () {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    // cy.get('a[href="#top"]').click({ force: true });
    cy.get('.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    cy.url().should('include', 'top');
  });
});
