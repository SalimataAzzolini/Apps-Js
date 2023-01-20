const sharedWorker = new SharedWorker("SharedWorker.js");

const numbers = [2, 4];

sharedWorker.port.postMessage([2, 4]);

sharedWorker.port.onmessage = function (event) {
    const result = event.data;
    console.log(result);
};