import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../../pages/homePage';
import ProductsPage from '../../pages/productsPage';
import CheckoutPage from '../../pages/checkoutPage';

const homePage = new HomePage();
const productsPage = new ProductsPage();
const checkoutPage = new CheckoutPage();

// Scenario 1
Given('I open eCommerce page', () => {
  cy.visit(`${Cypress.env('baseUrl')}/angularpractice/`);
});

When('I add items into cart', () => {
  homePage.productsLink().click();
  this.data.products.forEach((proudct) => {
    cy.addToCart(proudct);
  });
});

Then('Validate the total prices', () => {
  productsPage.getCheckoutBtn().click();
  let totalItemsPrice = 0;
  checkoutPage
    .itemsPriceColumn()
    .each(($el, i, list) => {
      const ItemPrice = Number($el.text().split(' ')[1]);
      totalItemsPrice += ItemPrice;
    })
    .then(() => {
      cy.log(totalItemsPrice);
    });

  checkoutPage.totalItemsPrice().then(($el) => {
    const totalPrice = Number($el.text().split(' ')[1]);
    expect(totalPrice).to.equal(totalItemsPrice);
  });

  productsPage.getCheckoutBtn().click();
});

Then('Select the country and verify thankyou', () => {
  checkoutPage.getCountryInput().type('India');
  checkoutPage.acceptCheckbox().click({ force: true });
  checkoutPage.submitBtn().click();
  checkoutPage
    .alertText()
    .should(
      'contain',
      'Success! Thank you! Your order will be delivered in next few weeks :-).'
    );
});

// Scenario 2
When('I fill the form details', function () {
  homePage.getNameInput().type(this.data.name);
  homePage.selectGender().select(this.data.gender);
});

Then('Validate the forms behavior', () => {
  homePage.getNameInput().should('have.attr', 'minlength', '2');
  homePage.getDataBindingInput().should('have.value', this.data.name);
  homePage.getEntrepreneurRadio().should('be.disabled');
});

Then('Select navigate to shopping page', () => {
  homePage.productsLink().click();
});
