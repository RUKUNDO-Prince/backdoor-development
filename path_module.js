const path = require('path');

// PLATFORM SPECIFIC SEPARATOR
// console.log(path.sep);

// JOIN PATHS USING THE SEPARATOR
const filePath = path.join('content', 'sub_folder', 'test.txt');
// console.log(filePath);


// HOW TO KNOW THE LAST LOCATION IN THE FILEPATH
const base = path.basename(filePath);
// console.log(base);


// HOW TO GET THE ABSOLUTE PATH 
const absolute = path.resolve(__dirname, 'content', 'sub_folder', 'test.txt');
console.log(absolute);