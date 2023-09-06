/// <reference types="Cypress" />

describe('Alerts', () => {
  it('Handling pop-up alerts', () => {
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click();
    cy.on('window:alert', (str) => {
      expect(str).to.be.eq(
        'Hello , share this practice page and share your knowledge'
      );
    });
  });

  it('Handling confirm alerts', () => {
    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
    cy.get('#confirmbtn').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.be.eq('Hello , Are you sure you want to confirm?');
    });
  });
});
