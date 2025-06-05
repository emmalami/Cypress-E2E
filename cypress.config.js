const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      return require('./cypress/plugins/index.js')(on,config)
      // Implement node event listeners here if needed (optional)
    },
    supportFile: "cypress/support/e2e.js", // Path to your support file
  
  },
});

