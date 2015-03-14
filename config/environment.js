/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'widget-builder-widget',
    environment: environment,
    locationType: 'none',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://ember.dev:35729/",
      'font-src': "'self' http://www.askthem.io/",
      'connect-src': "'self' http://www.askthem.io/ http://askthem.dev/ ws://ember.dev:35729/",
      'img-src': "'self' http://i.embed.ly/ http://www.askthem.io/ http://askthem.dev/",
      'style-src': "'self'",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      rootElement: '#widget-builder-widget-container'
    },
    // configuration for options initializer
    optionsConfig: {
      // use defaults
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.askThemHost = 'askthem.dev';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.askThemHost = 'askthem.dev';
  }

  if (environment === 'production') {
    ENV.APP.askThemHost = 'www.askthem.io';
  }

  ENV['ember-apijax'] = {
    'host': 'http://' + ENV.APP.askThemHost
  };

  return ENV;
};
