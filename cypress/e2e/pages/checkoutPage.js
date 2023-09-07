class CheckoutPage {
  getCheckoutBtn() {
    return cy.get(':nth-child(4) > :nth-child(5) > .btn');
  }

  getCountryInput() {
    return cy.get('#country');
  }

  acceptCheckbox() {
    return cy.get('input#checkbox2');
  }

  submitBtn() {
    return cy.get('input[type="submit"]');
  }

  alertText() {
    return cy.get('.alert');
  }
}

export default CheckoutPage;
