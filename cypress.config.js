const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  projectId: "gvu97i",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});
