import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import { credentials } from './credentials.js';

export function getAuthenticatedSpreadsheetsService() {
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
    credentials: credentials
  });
  console.log('- Application authenticated -');

  return google.sheets({version: 'v4', auth}).spreadsheets;
}
