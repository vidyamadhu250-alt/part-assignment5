
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 40000,

    expect: {
        timeout: 5000,
    },

    reporter: 'html',

    use: {
        browserName: 'chromium',
        headless: false,
        launchOptions: {
            slowMo: 500,
        },
    },
});
