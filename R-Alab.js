let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 1: Split the CSV data into rows
let rows = csvData.split('\n');

// Step 2: Determine the number of columns
let numColumns = rows[0].split(',').length;

// Step 3: Create a two-dimensional array
let resultArray = rows.map(row => row.split(','));

// Step 4: Extract headers and convert them to lowercase
let headers = resultArray[0].map(header => header.toLowerCase());

// Step 5: Create an array of objects
let objectsArray = resultArray.slice(1).map(row => {
  let obj = {};
  row.forEach((cell, index) => {
    obj[headers[index]] = cell;
  });
  return obj;
});

console.log("Array of Objects:", objectsArray);

// Step 6: Remove the last element
objectsArray.pop();

// Step 7: Insert a new object at index 1
objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Step 8: Add another object to the end
objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log("Modified Array of Objects:", objectsArray);

// Step 9: Calculate the average age
let totalAge = objectsArray.reduce((sum, obj) => sum + parseInt(obj.age), 0);
let averageAge = totalAge / objectsArray.length;

console.log("Average Age:", averageAge);

// Step 10: Transform the data back into CSV format
let csvHeaders = headers.join(',');
let csvRows = objectsArray.map(obj => Object.values(obj).join(','));
let finalCsv = [csvHeaders, ...csvRows].join('\n');

console.log("Final CSV Data:\n" + finalCsv);

console.log("------------------------------------------------------------------------");

// Step 1: Create a variable for the CSV string data
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 2: Split the string data at \n and convert it into an array
let newArray = csv.split('\n');
console.log(newArray);

// Step 3: Create an empty array called dataArray and populate it
let dataArray = [];
newArray.forEach(item => {
  dataArray.push(item.split(','));
});
console.log(dataArray);

// Step 4: Extract the headers and store them in cellHeaders
let cellHeaders = [];
dataArray[0].forEach(header => {
  cellHeaders.push(header.toLowerCase());
});
console.log(cellHeaders);

// Step 5: Create an array of objects using the headers
let objectArray = [];
for (let i = 1; i < dataArray.length; i++) {
  let row = dataArray[i];
  let obj = {};
  for (let j = 0; j < row.length; j++) {
    obj[cellHeaders[j]] = row[j];
  }
  objectArray.push(obj);
}
console.log(objectArray);
