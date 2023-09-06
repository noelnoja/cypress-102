class HomePage {
  getNameInput() {
    return cy.get(':nth-child(1) > .form-control');
  }

  selectGender() {
    return cy.get('select');
  }

  getDataBindingInput() {
    return cy.get(':nth-child(4) > .ng-pristine');
  }

  getEntrepreneurRadio() {
    return cy.get('#inlineRadio3');
  }

  productsLink() {
    return cy.get(':nth-child(2) > .nav-link');
  }
}

export default HomePage;
