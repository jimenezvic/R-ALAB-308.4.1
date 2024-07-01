
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let newArray = csv.split('\n');
console.log(newArray);

let dataArray = [];
newArray.forEach(item => {
  dataArray.push(item.split(','));
});
console.log(dataArray);

let cellHeaders = [];
dataArray[0].forEach(header => {
  cellHeaders.push(header.toLowerCase());
});
console.log(cellHeaders);

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

