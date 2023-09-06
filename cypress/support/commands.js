Cypress.Commands.add('addToCart', (productName) => {
  cy.get('h4.card-title').each(($el, i, list) => {
    if ($el.text().includes(productName)) {
      cy.get('button.btn.btn-info').eq(i).click();
    }
  });
});
