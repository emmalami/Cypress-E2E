/// <reference types="Cypress" />

describe('Ecommerce Website', () => {
  beforeEach(() => {
    // Visit the website before each test
    
    cy.visit('https://ecommerce-playground.lambdatest.io/');
  });  
    it('Dashboard Navigation', () => {
      cy.get('SPAN.icon.svg-icon').then(($elements) => {
        cy.log(`Found ${$elements.length} elements`);
        cy.get('SPAN.icon.svg-icon').eq(4).click();
        cy.get('#widget-navbar-217841 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title').click();
        cy.get('.figure-caption.mb-2').should('exist').then(($elements) => {
          cy.log(`Found ${$elements.length} elements`);
          cy.get('.figure-caption.mb-2').eq(0).click();
          cy.get('SPAN.icon.svg-icon').then(($elements) => {
            cy.log(`Found ${$elements.length} elements`);
            cy.get('SPAN.icon.svg-icon').eq(4).click({ force: true });
            cy.get('#widget-navbar-217841 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title').click({ force: true });
            cy.get('.figure-caption.mb-2').should('exist').then(($elements) => {
              cy.log(`Found ${$elements.length} elements`);
              cy.get('.figure-caption.mb-2').eq(2).click();
              cy.get('SPAN.icon.svg-icon').then(($elements) => {
                cy.log(`Found ${$elements.length} elements`);
                cy.get('SPAN.icon.svg-icon').eq(4).click({ force: true });
                cy.get('#widget-navbar-217841 > .navbar-nav > :nth-child(1) > .icon-left > .info > .title').click({ force: true });
                cy.get('.figure-caption.mb-2').should('exist').then(($elements) => {
                  cy.log(`Found ${$elements.length} elements`);
                  cy.get('.figure-caption.mb-2').eq(3).click();
  
                  // HOME
                  cy.get('nav span').contains('Home').click();
                  cy.get('nav span').contains('AddOns').click();
                  cy.get('nav span').contains('AddOns').click();
                  cy.contains('span', 'Designs').should('be.visible').click();
                  cy.get('h5[id="mz-accordion-label-214969-1"] i[class="ml-auto fas fa-plus"]').click();
                });
              });
            });
          });
        });
      });
    });
  });

