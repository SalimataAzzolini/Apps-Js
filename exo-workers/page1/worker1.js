self.onmessage = function (event) {
 
    const receved = event.data;
    const invertedMessage = receved.split('').reverse().join('');

    self.postMessage(invertedMessage);
};