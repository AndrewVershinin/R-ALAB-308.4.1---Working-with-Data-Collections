const csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor`s Assistant,26';

function feelingLoopy(file) { 
    const rows = file.split("\n")
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
console.log(result);