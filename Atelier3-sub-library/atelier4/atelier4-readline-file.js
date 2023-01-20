/* import { readFile } from 'node:fs'; */
// Include fs module
const fs = require("fs");


const file = "./file1.txt";
const file2 = "./file2.txt";
const type = "utf8";


function asyncReadFile(filePath, typeFile, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: "utf8", flag: "r" },
    function (err, data) 
      {
        if (err) {
          reject(err);
      } else {
          console.log(data);
          resolve(data);
      }
      }
    );
  });
}

const promise1 = asyncReadFile(file);
const promise2 =  asyncReadFile(file2);

const promises = [promise1, promise2 ];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result)));










// Calling the fs.readFileSync() method
// for reading file 'input2.txt'
/* const data = fs.readFileSync('./file2.txt',
			{encoding:'utf8', flag:'r'}); */
/* console.log(data); */
