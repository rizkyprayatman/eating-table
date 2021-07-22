/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable import/no-extraneous-dependencies */
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1200x900',
      chrome: {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      }
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'rev-eating-table-rp',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
