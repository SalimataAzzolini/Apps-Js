const worker1 = new Worker("worker1.js");


    document.querySelector('#btn').addEventListener('click', function(e){
        e.preventDefault();
    
        const message = document.querySelector('#message').value;
        console.log(message);

        worker1.postMessage(message);

    })

    worker1.onmessage = function (event) {
    console.log("Recu :" + event.data);
    };




