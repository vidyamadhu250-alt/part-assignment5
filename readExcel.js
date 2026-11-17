const ExcelJS = require('exceljs');

// Create a new Excel workbook
const workbook = new ExcelJS.Workbook();

// Function to read Excel data
async function readExcel() {

    // Read the Excel file
    await workbook.xlsx.readFile('Obsqura Testing.xlsx');

    // Get the worksheet named Sheet1
    const worksheet = workbook.getWorksheet('Sheet1');

    // Iterate through each row
    worksheet.eachRow((row, rowNumber) => {

        console.log(`Row ${rowNumber}:`);

        // Iterate through each cell in the row
        row.eachCell((cell, colNumber) => {

            // Display cell values
            console.log(`Column ${colNumber}: ${cell.text}`);

        });

    });
}

// Call the function
readExcel();