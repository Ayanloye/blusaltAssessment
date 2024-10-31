const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter:'mochawesome',
    "reporterOptions": {
      "charts": true,
      "overwrite": true,
      "html": true,
      "json": true,
      "reportDir": "cypress/report",
    },
    baseUrl:'https://demo.mifos.io/#/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/*.feature",
  },
});
