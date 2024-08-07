const csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor`s Assistant,26';

function feelingLoopy(file) { 
    const rows = file.split("\n");
    const headings = rows[0].split(',');
    const lowerCaseHeadings = [];

    for (let i = 0; i < headings.length; i++) {
        lowerCaseHeadings.push(headings[i].toLowerCase());
    }

    const resultArray = [];

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].split(",");
        const rowObj = {};

        for (let j = 0; j < cells.length; j++) {
            rowObj[lowerCaseHeadings[j]] = cells[j];
        }

        resultArray.push(rowObj);
    }

    return resultArray;
}

const result = feelingLoopy(csv);

result.pop();


const newObject1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
result.splice(1, 0, newObject1);


const newObject2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
result.push(newObject2);


function toCSV(array) {
    if (array.length === 0) return '';

    
    const headers = Object.keys(array[0]);

    
    let csvString = headers.join(',');

    
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];
        let row = '';

        for (let j = 0; j < headers.length; j++) {
            if (j > 0) row += ',';
            row += obj[headers[j]];
        }

        csvString += '\n' + row;
    }

    return csvString;
}

const newCSV = toCSV(result);
console.log(newCSV);