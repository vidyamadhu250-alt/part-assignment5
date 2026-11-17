
# Playwright Automation – Part Assignment 5

## Project Overview

This project demonstrates practical knowledge of the Playwright Test Framework using JavaScript. It covers JSON data-driven testing, retry mechanisms, test tagging, Excel data handling using ExcelJS, assertions, and debugging techniques.

## Assignment Tasks

### Task 1: JSON Test Data & Parameterization

- Created a `testdata.json` file to store registration test data separately from the test script.
- Used JSON data to populate the registration form on [Automation Test Store](https://automationteststore.com/index.php?rt=account/create).
- Automated and verified the following fields:
  - First Name
  - Last Name
  - Email
  - Telephone
  - Fax
  - Company
- Verified that the entered values were correctly displayed in the form fields.

### Task 2: Retry Mechanism & Flaky Test Handling

Covered the following concepts:

- Retry mechanism in Playwright and why it is used.
- Meaning of flaky tests.
- Common causes of flaky tests, such as timing issues, unstable elements, network delays, and test-data problems.
- How Playwright retries failed tests.
- How retries help identify intermittent failures and improve test execution reliability.

### Task 3: Test Tags – Smoke, Regression & Sanity Testing

Automated the login module of [QA Brains](https://practice.qabrains.com/ecommerce/login).

Used:
- `test.describe()` to group login test cases.
- `test.beforeEach()` to navigate to the application before each test.
- Meaningful test names and Playwright assertions.

Test scenarios:

| Test Type | Tags | Scenario |
|---|---|---|
| Smoke | `@smoke @login` | Valid login |
| Regression | `@regression @login` | Invalid login |
| Sanity | `@sanity @login` | Empty email with valid password |

**Commands to execute tagged tests:**

```bash
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"
npx playwright test --grep "@sanity"
```

### Task 4: Reading Excel Data Using ExcelJS

- Installed and used the ExcelJS package.
- Created a workbook using `ExcelJS.Workbook()`.
- Read the Excel file `Obsqura Testing.xlsx`.
- Accessed the worksheet named `Sheet1`.
- Used `eachRow()` to iterate through rows.
- Used `eachCell()` to read individual cell values.
- Displayed the Excel data in the terminal.

**Execution command:**

```bash
node readExcel.js
```

### Task 5: Assertions & Debugging in Playwright

Covered the following concepts:

**Assertions**
- Hard Assertions – Test execution stops when an assertion fails.
- Soft Assertions – Test execution continues after an assertion fails and reports failures at the end.

**Debugging Methods**
- `page.pause()` – Pauses test execution for inspection.
- Playwright Inspector – Helps inspect locators and debug tests.
- `--debug` – Runs tests in debugging mode.
- `--headed` – Runs tests with the browser visible.

View the HTML report:

```bash
npx playwright show-report
```

Run the ExcelJS script:

```bash
node readExcel.js
```

## Project Structure

The project contains Playwright test scripts, separate JSON test data, an ExcelJS script, and supporting files.




