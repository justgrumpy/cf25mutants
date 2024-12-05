const { jestConfig } = require('./jest.config.js');
module.exports = {
  testRunner: "jest",
  mutate: [
    "force-app/main/default/lwc/**/*.js",
    "!force-app/main/default/lwc/**/__tests__/*.*"
  ],
  thresholds: { high: 90, low: 85, break: null },
  jest: {
    projectType: 'custom',
    config: jestConfig,
    enableFindRelatedTests: true
  }
};