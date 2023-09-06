/// <reference types="Cypress" />

describe('Framework suite', function () {
  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    cy.get(':nth-child(1) > .form-control').type(this.data.name);
    cy.get('select').select(this.data.gender);
    cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name);
    cy.get(':nth-child(1) > .form-control')
      .type(this.data.name)
      .should('have.attr', 'minlength', '2');
    cy.get('#inlineRadio3').should('be.disabled');
    cy.get(':nth-child(2) > .nav-link').click();
    this.data.products.forEach((proudct) => {
      cy.addToCart(proudct);
    });
  });
});
