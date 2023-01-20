self.onconnect = (e) => {
    const port = e.ports[0];

    port.onmessage = (e) => {
    
        const [number1, number2] = e.data;
        const result = number1 * number2;

        port.postMessage(result);

    };
};