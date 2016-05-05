require('ts-node/register');

exports.config = {
    baseUrl: 'http://localhost:8080/',

    exclude: [],

    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            'test/e2e/**/*.ts'
        ],
        format: 'pretty'
    },

    specs: [
        'test/e2e/features/*/*.feature'
    ],

    allScriptsTimeout: 110000,
    getPageTimeout: 100000,

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['show-fps-counter=true']
        }
    },

    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    },

    seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",

    /**
     * Angular 2 configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
    useAllAngular2AppRoots: true
};
