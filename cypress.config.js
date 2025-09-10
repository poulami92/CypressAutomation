const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = defineConfig({
  projectId: 's7ghkm',


  //overite cypress default command timeout
  defaultCommandTimeout : 4000,

  //generate test execution video
    video : true,

  // enable reporting
  reporter: 'cypress-mochawesome-reporter',

  env :{
    url : 'https://rahulshettyacademy.com/'
  },
  
  //retry fail tc 1 more time
    retries: {
      runMode: 1
     },

  
  e2e: {
    async setupNodeEvents(on, config) {
    
      //Enable listenter so that reporter can catch test execution result
      require('cypress-mochawesome-reporter/plugin')(on); 

      //wait until plugin is fully loaded before proceeds to next step--way to run async commands
      await addCucumberPreprocessorPlugin(on, config);

      // Add browserify preprocessor for .feature files
      on(
        "file:preprocessor",
         browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
     );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;

    },

    specPattern : 'cypress/integration/examples/BDD/*.feature',
    //specPattern : 'cypress/integration/examples/*.js',
    supportFile : 'cypress/support/e2e.js'
  },
});
