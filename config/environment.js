/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blog',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    firebase: {
      apiKey: "AIzaSyDN9c5_dMEftTr6SIpasNelldItlt9lqyE",
      authDomain: "blog-7abdd.firebaseapp.com",
      databaseURL: "https://blog-7abdd.firebaseio.com",
      storageBucket: "blog-7abdd.appspot.com",
      messagingSenderId: "859959174312"
    },

    moment: {
        // Options:
        // 'all' - all years, all timezones
        // '2010-2020' - 2010-2020, all timezones
        // 'none' - no data, just timezone API
        includeTimezone: 'all'
      },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
