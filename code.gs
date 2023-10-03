function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('CSV Importer')
    .addItem('Import CSV', 'showFileDialog')
    .addToUi();
}

function showFileDialog() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('UploadCSV')
    .setWidth(500)
    .setHeight(500);

  SpreadsheetApp.getUi()
    .showModalDialog(htmlOutput, 'Upload CSV File');
}

function importCSVData(data, selectedColumns, sheetName, importOption) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    // Create a new sheet if it doesn't exist
    sheet = spreadsheet.insertSheet(sheetName);
  }

  var csvData = Utilities.parseCsv(data);
  var batchSize = csvData.length > 50000 ? 5000 : 1000;

  // Initialize the HTML output for the dialog
  var htmlOutput = HtmlService.createHtmlOutput("Importing...");
  var dialog = SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Please wait');

  // Filter and import selected columns in batches
  var headerRow = csvData[0];
  var columnIndices = selectedColumns.map(function (column) {
    return headerRow.indexOf(column);
  });

  for (var startRow = 1; startRow <= csvData.length; startRow += batchSize) {
    var endRow = Math.min(startRow + batchSize - 1, csvData.length);
    var batchData = csvData.slice(startRow - 1, endRow);

    if (importOption === "replace" && startRow === 1) {
      // Clear the existing data only for the first batch if replacing
      sheet.clear();
    }

    var filteredData = batchData.map(function (row) {
      return columnIndices.map(function (index) {
        return row[index];
      });
    });

    sheet.getRange(sheet.getLastRow() + 1, 1, filteredData.length, filteredData[0].length).setValues(filteredData);

    // Update the progress message within the existing dialog
    var progressMessage = "Importing rows " + startRow + " to " + endRow + " of " + csvData.length;
    htmlOutput = HtmlService.createHtmlOutput(progressMessage);
    dialog = SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Importing...');
  }

  // Display a confirmation message within the existing dialog after import is complete
  var confirmationMessage = "CSV File Uploaded!";
  htmlOutput = HtmlService.createHtmlOutput(confirmationMessage);

  // Close the dialog after a brief delay (e.g., 2 seconds)
  htmlOutput.append("<script>setTimeout(function() { google.script.host.close(); }, 2000);</script>");
  dialog = SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Upload Complete');
}


