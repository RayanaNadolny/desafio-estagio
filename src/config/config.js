const spreadsheetId = '1NKSiP5Ef5CJh47tK-uRxEl-hi5wgMMOjGmw8OttQino';

const absencesRange = 'C4:C27';
const gradesRange = 'D4:F27';
const resultsRange = 'G4:H27';
const maxAbsences = 15;

const situations = {
  failedByAbsence: 'Reprovado por Falta',
  failedByGrade: 'Reprovado por Nota',
  finalExam: 'Exame Final',
  approved: 'Aprovado'
}

export { spreadsheetId, absencesRange, gradesRange, resultsRange, maxAbsences, situations }