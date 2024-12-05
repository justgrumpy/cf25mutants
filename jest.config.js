const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');
jestConfig.testPathIgnorePatterns = [...jestConfig.testPathIgnorePatterns, "<rootDir>/.stryker-tmp/"];
module.exports = {
    ...jestConfig,
    modulePathIgnorePatterns: ['<rootDir>/.localdevserver']
};
