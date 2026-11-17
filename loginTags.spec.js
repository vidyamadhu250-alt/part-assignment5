const { test, expect } = require('@playwright/test');

test.describe('QA Brains Login Module', () => {

    // Navigate to login page before every test
    test.beforeEach(async ({ page }) => {

        await page.goto('https://practice.qabrains.com/ecommerce/login');

    });

    // 1. Smoke Testing
    test('Verify login with valid credentials @smoke @login', async ({ page }) => {

        // Enter valid email
        await page.locator('input[type="email"]')
            .fill('test@qabrains.com');

        // Enter valid password
        await page.locator('input[type="password"]')
            .fill('Password123');

        // Click Login button
        await page.getByRole('button', { name: 'Login' }).click();

        // Verify successful redirection
        await expect(page).not.toHaveURL(/\/ecommerce\/login\/?$/);

    });

    // 2. Regression Testing
    test('Verify login with invalid credentials @regression @login', async ({ page }) => {

        // Enter invalid email
        await page.locator('input[type="email"]')
            .fill('wronguser@gmail.com');

        // Enter invalid password
        await page.locator('input[type="password"]')
            .fill('WrongPassword123');

        // Click Login button
        await page.getByRole('button', { name: 'Login' }).click();

        // Verify error message
        await expect(
            page.getByText(/invalid|incorrect|wrong|failed/i).first()
        ).toBeVisible();

    });

    // 3. Sanity Testing
    // 3. Sanity Testing
test('Verify validation when email is empty @sanity @login', async ({ page }) => {

    // Leave email field empty

    // Enter valid password
    await page.locator('input[type="password"]')
        .fill('Password123');

    // Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify custom email validation message
    await expect(
        page.getByText('Email is a required field')
    ).toBeVisible();

    // Verify user remains on login page
    await expect(page).toHaveURL(/\/ecommerce\/login\/?$/);

});

});


// const { test, expect } = require('@playwright/test');

// test.describe('QA Brains Login Module', () => {

//     // Navigate to login page before each test
//     test.beforeEach(async ({ page }) => {
//         await page.goto('https://practice.qabrains.com/ecommerce/login');
//     });

//     // 1. SMOKE TEST

// test('Valid Login - Smoke Testing @smoke @login', {
//     tag: ['@smoke', '@login']
// }, async ({ page }) => {

//     // Enter valid credentials
//     await page.locator('input[type="email"]')
//         .fill('test@qabrains.com');

//     await page.locator('input[type="password"]')
//         .fill('Password123');

//     // Click Login
//     await page.getByRole('button', { name: 'Login' }).click();

//     // Verify successful redirection
//     await expect(page).not.toHaveURL(/\/ecommerce\/login\/?$/);

// });

//     // 2. REGRESSION TEST
    
// test('Invalid Login - Regression Testing @regression @login', {
//     tag: ['@regression', '@login']
// }, async ({ page }) => {

//     await page.locator('input[type="email"]')
//         .fill('invalid@example.com');

//     await page.locator('input[type="password"]')
//         .fill('WrongPassword123');

//     await page.getByRole('button', { name: 'Login' }).click();

//     // Verify username error
//     await expect(
//         page.getByText('Username is incorrect.')
//     ).toBeVisible();

//     // Verify password error
//     await expect(
//         page.getByText('Password is incorrect.')
//     ).toBeVisible();

// });


//     // 3. SANITY TEST
// test('Empty Email - Sanity Testing @sanity @login', {
//     tag: ['@sanity', '@login']
// }, async ({ page }) => {

//     // Leave email empty
//     await page.locator('input[type="password"]').fill('Password123');

//     await page.getByRole('button', { name: 'Login' }).click();

//     // Verify custom validation message
//     await expect(
//         page.getByText('Email is a required field')
//     ).toBeVisible();

//     // Verify user stays on login page
//     await expect(page).toHaveURL(/\/ecommerce\/login\/?$/);
// });
// });
