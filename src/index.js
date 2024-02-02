import { getAuthenticatedSpreadsheetsService } from "./auth/auth.js";
import { absencesRange, gradesRange, resultsRange, spreadsheetId } from "./config/config.js";
import { getSituationsAndFinalApprovalGrades } from "./logic/logic.js";

async function app() {
  const spreadsheets = getAuthenticatedSpreadsheetsService();

  const absences = (await spreadsheets.values.get({spreadsheetId, range: absencesRange})).data.values;
  const grades = (await spreadsheets.values.get({spreadsheetId, range: gradesRange})).data.values;
  console.log('- Retrieved grades and absences -')

  const result = getSituationsAndFinalApprovalGrades(grades,  absences);
  console.log('- All student results calculated -');

  await spreadsheets.values.update({
    spreadsheetId,
    range: resultsRange,
    valueInputOption: 'RAW',
    requestBody: {
      values: result
  }});
  console.log('- Data uploaded to the spreadsheet -');
}

app();