/// <reference types="Cypress" />

describe('Ecommerce Website', () => {
  beforeEach(function () {  // Use function() to access `this`
      cy.fixture('TestData.json').then((data) => {
          this.testData = data;  // Store fixture data for later use
      });

      // Visit the website before each test   
      cy.visit('https://ecommerce-playground.lambdatest.io/');
  });

  it('SignUp', function() {  // Use function() instead of arrow function
      cy.get('.icon.fas.fa-user').click({ force: true });
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click({ multiple: true });
      cy.get('.page-title.h3').should('have.text', 'Register Account');

      cy.get('#input-firstname').type('test');
      cy.get('#input-lastname').type('test');
      cy.get('#input-email').type(this.testData.validEmail);  // Use correct reference
      cy.get('#input-telephone').type(this.testData.validPhoneNumber);  // Use correct reference
      cy.get('#input-password').type(this.testData.validPassword);
      cy.get('#input-confirm').type(this.testData.validPassword);

      cy.get('label[for="input-newsletter-yes"]').should('not.be.checked').click();
      cy.get('label[for="input-agree"]').should('not.be.checked').click();
      cy.get('input[value="Continue"]').click();
  });

  it('SignIn', function() {  // Use function() to access `this.testData`
      cy.get('.icon.fas.fa-user').click({force: true});

      // Click on Login link
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click();

      // Enter login details
      cy.get('#input-email').type(this.testData.validEmail);
      cy.get('#input-password').type(this.testData.validPassword);
      
      // Click submit
      cy.get('input[type="submit"]').click();

      // Navigate to Edit Account
      cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/edit"]')
        .should('exist') // Ensure element exists
        .first()
        .click({ force: true })
        .wait(2000) // Wait for page to load
        .url()
        .should('include', 'route=account/edit');

      // Navigate back and forward
      cy.go(-1);
      cy.go(1);
  });
});
