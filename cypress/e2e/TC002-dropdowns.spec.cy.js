/// <reference types="Cypress" />

describe('Dropdowns', () => {
  it('Handling static dropdown', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    cy.get('#dropdown-class-example')
      .select('option1')
      .should('have.value', 'option1');
  });
  it('Handling dynamic dropdown', () => {
    cy.visit(`${Cypress.env('baseUrl')}/AutomationPractice/`);
    cy.get('#autocomplete').type('Tanzania{enter}');
    // cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    //   if ($e1.text() === 'Tanzania') {
    //     cy.wrap($e1).click();
    //   }
    // });
    cy.get('#autocomplete').should('have.value', 'Tanzania');
  });
});
