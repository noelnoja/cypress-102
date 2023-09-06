/// <reference types="Cypress" />
import HomePage from './pages/homePage';

describe('Framework suite', function () {
  const homePage = new HomePage();

  before(function () {
    cy.fixture('example').then(function (data) {
      this.data = data;
    });
  });

  it('First test case', function () {
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    homePage.getNameInput().type(this.data.name);
    homePage.getNameInput().should('have.attr', 'minlength', '2');
    homePage.selectGender().select(this.data.gender);
    homePage.getDataBindingInput().should('have.value', this.data.name);
    homePage.getEntrepreneurRadio().should('be.disabled');
    homePage.productsLink().click();
    this.data.products.forEach((proudct) => {
      cy.addToCart(proudct);
    });
  });
});
