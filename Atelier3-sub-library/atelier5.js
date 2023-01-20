// Include fs module
const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


async function asynReadline(question) {
    return new Promise((resolve, reject) => {
      rl.question(question, function (value) {
        if (value === "") {
          reject("une erreur s'est produite");
        } else {
          resolve(value);
        }
      });
    });
  }


  (async () => {
      try 
      {    const allFilesPath = [];
          const response = await asynReadline("Mettez un chemin de ficher?");
          allFilesPath.push(response);
          console.log(allFilesPath);

          Promise.allSettled(allFilesPath).
          then((results) => results.forEach((result) => console.log(result)));

  
      } 
      catch(e)
      {
          console.log(e);
      }
   
  })();
  