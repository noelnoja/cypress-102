const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    baseUrl: 'https://rahulshettyacademy.com',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
