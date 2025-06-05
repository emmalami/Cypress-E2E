/// <reference types="Cypress" />

describe('Ecommerce Website', () => {
    beforeEach(() => {
      // Visit the website before each test
      
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.wait
    });
    it('SignUp', () => {    
          cy.get('[name="username"]').type('Admin');
          cy.get('[name="password"]').type('admin123');
          cy.get('[type="submit"]').click();
          cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
          cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').select('ESS');
          cy.get('button[type="submit"]').click()
         
    });
});
after(() => {
cy.get('[class="oxd-userdropdown-name"]').click();
cy.get('a[href="/web/index.php/auth/logout"]').contains('Logout').click();
})