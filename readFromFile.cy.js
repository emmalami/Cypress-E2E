/// <reference types="Cypress" />

/*
cypress.config.js

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
  },
});


cypress/plugins/index.js

/// <reference types="cypress" />
 
const readXlsx = require('./read-xlsx')
 
module.exports = (on, config) => {
on('task', {
    'readXlsx': readXlsx.read
  }) 
}


cypress/plugins/read-xlsx.js

const fs = require('fs');
const XLSX = require('xlsx');
const read = ({file, sheet='Sheet1'}) => {
const buf = fs.readFileSync(file);
const workbook = XLSX.read(buf, { type: 'buffer' });
const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
return rows
}
 
module.exports = {
read,
}
*/

describe('Ecommerce Website', () => {
  let data; // Store data globally

  before(function () {  // Run once before all tests
    cy.task('readXlsx', { file: 'cypress/fixtures/fromExcel.xlsx', sheet: 'Sheet1' })
      .then((rows) => {
        data = rows;  // Assign data properly
        cy.log('Excel Data Loaded:', JSON.stringify(data)); // Debugging
      });
  });

  beforeEach(function () {  
    cy.wrap(data).should('not.be.undefined'); // Ensure data is available
    cy.visit('https://ecommerce-playground.lambdatest.io/'); 
  });

  it('SignUp', function() {
    expect(data).to.not.be.undefined; // Ensure data is loaded
    cy.get('.icon.fas.fa-user').click({ force: true });
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/register"]').click({ multiple: true });
    cy.get('.page-title.h3').should('have.text', 'Register Account');

    cy.get('#input-firstname').type(data[0].firstname);
    cy.get('#input-lastname').type(data[0].lastname);
    cy.get('#input-email').type(data[0].email);
    cy.get('#input-telephone').type(data[0].telephone);
    cy.get('#input-password').type(data[0].password);
    cy.get('#input-confirm').type(data[0].password);

    cy.get('label[for="input-newsletter-yes"]').should('not.be.checked').click();
    cy.get('label[for="input-agree"]').should('not.be.checked').click();
    cy.get('input[value="Continue"]').click();
  });

  it('SignIn', function() {  
    expect(data).to.not.be.undefined; 

    cy.get('.icon.fas.fa-user').click({force: true});
    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/login"]').click();

    cy.get('#input-email').type(data[0].email);
    cy.get('#input-password').type(data[0].password);
    cy.get('input[type="submit"]').click();

    cy.get('a[href="https://ecommerce-playground.lambdatest.io/index.php?route=account/edit"]')
      .should('exist')
      .first()
      .click({ force: true })
      .wait(2000)
      .url()
      .should('include', 'route=account/edit');

    cy.go(-1);
    cy.go(1);
  });

});



