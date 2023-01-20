const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function asynReadline(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, function (value) {
      if (value === "" || value.length < 3) {
        reject("une erreur s'est produite");
      } else {
        resolve(value);
      }
    });
  });
}

(async () => {
    try 
    {
        const response1 = await asynReadline("Qui es-tu ?");
        const response2 = await asynReadline("comment ca va ?");
        console.log(response1);
        console.log(response2);  

    } 
    catch(e)
    {
        console.log(e);
    }
 
})();
