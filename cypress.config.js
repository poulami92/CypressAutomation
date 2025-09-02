const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's7ghkm',


  //overite cypress default command timeout
  defaultCommandTimeout : 4000,

  // enable reporting
  reporter: 'cypress-mochawesome-reporter',

  env :{
    url : 'https://rahulshettyacademy.com/'
  },

  //generate test execution video
    video : true,
  //retry fail tc 1 more time
    retries: {
      runMode: 1
     },

  //Enable listenter so that reporter can catch test execution result
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    specPattern : 'cypress/integration/examples/*.js',
    supportFile : 'cypress/support/e2e.js'
  },
});
