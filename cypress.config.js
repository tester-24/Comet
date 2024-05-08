const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kbhrfm',
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress - report',
    embeddedScreenshots: true,
    html: true,
    inlineAssets: true,
    saveAllAttempts: true,
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});