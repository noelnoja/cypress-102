/// <reference types="Cypress" />

describe('Child Windows', () => {
  it('handling child windows', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);

    cy.get('#opentab').invoke('removeAttr', 'target').click();

    cy.origin('https://www.qaclickacademy.com', () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
    });
  });
});
