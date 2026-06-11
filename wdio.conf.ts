import path from 'path';

export const config: WebdriverIO.Config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    
    port: 4723,

    
    specs: [
        path.join(process.cwd(), 'test_Apk', 'specs', '**', '*.ts')
    ],
    
    exclude: [],

   
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Pixel_7',
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'DemoApp.apk'),
        'appium:noReset': false,
        'appium:fullReset': false
    }],

    
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

   
    services: ['appium'],

    
    framework: 'mocha',
    reporters: ['spec', ['allure', { outputDir: 'allure-results' }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

   
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
}