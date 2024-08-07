

const csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function feelingLoopy(file) { 
    let rows = file.split("\n");
    for (let i=0; i <rows.length; i++) {
            rows[i] = rows[i].split(",")
        }
        newArray = rows;
       
    }
    
feelingLoopy(csv);
console.log(newArray)
