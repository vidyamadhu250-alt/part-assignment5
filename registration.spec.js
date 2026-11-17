const { test, expect } = require('@playwright/test');

// Read test data from JSON file
const testData = require('./test-data/testdata.json');

test('Registration Form using JSON Test Data', async ({ page }) => {

    // Step 1: Navigate to registration page
    await page.goto('https://automationteststore.com/index.php?rt=account/create');

    // Step 2: Enter First Name
    await page.locator('#AccountFrm_firstname').fill(testData.firstName);

    // Step 3: Enter Last Name
    await page.locator('#AccountFrm_lastname').fill(testData.lastName);

    // Step 4: Enter Email
    await page.locator('#AccountFrm_email').fill(testData.email);

    // Step 5: Enter Telephone
    await page.locator('#AccountFrm_telephone').fill(testData.telephone);

    // Step 6: Enter Fax
    await page.locator('#AccountFrm_fax').fill(testData.fax);

    // Step 7: Enter Company
    await page.locator('#AccountFrm_company').fill(testData.company);

    // Step 8: Verify First Name
    await expect(page.locator('#AccountFrm_firstname'))
        .toHaveValue(testData.firstName);

    // Step 9: Verify Last Name
    await expect(page.locator('#AccountFrm_lastname'))
        .toHaveValue(testData.lastName);

    // Step 10: Verify Email
    await expect(page.locator('#AccountFrm_email'))
        .toHaveValue(testData.email);

    // Step 11: Verify Telephone
    await expect(page.locator('#AccountFrm_telephone'))
        .toHaveValue(testData.telephone);

    // Step 12: Verify Fax
    await expect(page.locator('#AccountFrm_fax'))
        .toHaveValue(testData.fax);

    // Step 13: Verify Company
    await expect(page.locator('#AccountFrm_company'))
        .toHaveValue(testData.company);

});