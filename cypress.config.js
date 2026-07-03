const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "reports/mochawesome",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {

    baseUrl: "https://www.saucedemo.com",

    defaultCommandTimeout: 8000,

    video: false,

    screenshotOnRunFailure: true,

    retries: {
      runMode: 1,
      openMode: 0
    },

    specPattern: "cypress/e2e/**/*.cy.js",

    env: {
      username: "standard_user",
      password: "secret_sauce"
    },

    setupNodeEvents(on, config) {

      on("task", {

        logToTerminal(message) {
          console.log(message);
          return null;
        }

      });

    }

  },

  blockHosts: [
    "*.saucedemo.com/service-worker.js"
  ]

});