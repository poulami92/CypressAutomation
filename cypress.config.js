const { defineConfig } = require("Cypress");

module.exports = defineConfig({

  defaultCommandTimeout : 4000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
});
