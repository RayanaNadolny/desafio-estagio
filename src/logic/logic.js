import { maxAbsences, situations } from "../config/config.js";

function getAverage(values) {
    let sum = 0;

    values.forEach(value => {
        sum += parseFloat(value);
    });

    return sum / values.length;
}

function getSituation(studentGrades, absences) {
    if (absences > maxAbsences) {
        return situations.failedByAbsence;
    }

    const average = getAverage(studentGrades);

    if (average >= 70) {
        return situations.approved;
    }
    else if (average >= 50 && average < 70) {
        return situations.finalExam;
    }
    else {
        return situations.failedByGrade;
    }
}

function getFinalApprovalGrade(studentGrades, situation) {
    if (situation != situations.finalExam) {
        return 0;
    }

    const average = getAverage(studentGrades);
    return Math.ceil(100 - average);
}

function getSituationsAndFinalApprovalGrades(allGrades, absences) {
    const results = [];

    allGrades.forEach((studentGrades, index) => {
        const situation = getSituation(studentGrades, absences[index]);
        const finalApprovalGrade = getFinalApprovalGrade(studentGrades, situation);
    
        const studentResult = [situation, finalApprovalGrade]
        console.log('Result calculated: ', studentResult);
        results.push(studentResult);
    });

    return results;
}

export { getSituationsAndFinalApprovalGrades }