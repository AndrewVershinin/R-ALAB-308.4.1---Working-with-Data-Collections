

// //Part 1

// let i = 1;
// while (i <= 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizz Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     }  else {
//         console.log(i)
//     }
//     i++;
// }


// // Part 2

// let num = 20;

// while (true) {
//     let isPrime = true;

//     // Check if num is a prime number
//     if (num > 1) {
//         for (let i = 2; i <= num / 2; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
                
//             }
//         }
//     } else {
//         isPrime = false;
//     }

//     // If the number is prime, log it and exit the loop
//     if (isPrime) {
//         console.log(num);
//         break;
//     }

//     num++;
// }


// Part 3

// let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
// let cells = csv.split(",");
// function feelingLoopy(file) { 
//     rows = file.split("\n")
//     for (let i=0; i <rows.length; i++) {
//         rows[i] = rows[i].split(",")
//     }
//     console.log(rows)
// }
// feelingLoopy(csv);


let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Function to parse and log CSV data
function feelingLoopy(file) {
    // Split the CSV string into rows
    let rows = file.split("\n");
    
    // Loop through each row
    for (let i = 0; i < rows.length; i++) {
        // Split each row into cells
        let cells = rows[i].split(",");
        
        // Log each row's cells
        console.log(cells.join(', '));
    }
}

// Call the function with the CSV data
feelingLoopy(csv);