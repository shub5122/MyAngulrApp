// Karma configuration file, see link for more information

// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {

  config.set({

    basePath: '',

    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    browsers: ['ChromeHeadless'],

    plugins: [

      require('karma-jasmine'),

      require('karma-chrome-launcher'),

      require('karma-jasmine-html-reporter'),

      require('karma-coverage-istanbul-reporter'),

      require('karma-phantomjs-launcher'),

      require('karma-coverage'),

      require('@angular-devkit/build-angular/plugins/karma')

    ],

    client: {

      clearContext: false // leave Jasmine Spec Runner output visible in browser

    },

    coverageIstanbulReporter: {

      dir: require('path').join(__dirname, './coverage/DemoApp'),

      reports: ['html', 'lcovonly', 'text-summary'],

      fixWebpackSourcePaths: true

    },

    reporters: ['progress', 'kjhtml'],

    preprocessors: {'app/scripts/**/*.js': ['coverage']},

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    customLaunchers: {

        ChromeHeadless: {

            base: 'Chrome',

            flags: [

            '--headless',

            '--disable-web-security',

            '--disable-setuid-sandbox',

            '--no-sandbox',

            '--remote-debugging-port=9222',

        ]

      }

},

   //   'PhantomJS_custom': {

   //     base: 'PhantomJS',

   //     options: {

   //       windowName: 'my-window',

   //       settings: {

    //        webSecurityEnabled: false

   //       },

   //     },

   //     flags: ['--load-images=true'],

   //     debug: true

   //   }

   // },

   //   browsers: ['PhantomJS', 'PhantomJS_custom'],

      singleRun: true,

      restartOnFileChange: true,

    phantomjsLauncher: {

      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)

      exitOnResourceError: true

    },

  });

};
