console.log('Before setTimeout');

setTimeout(() => {
    console.log('Inside setTimeout callback');
}, 2000);

console.log('After setTimeout');


let counter = 0;

const intervalId = setInterval(() => {
    console.log(`Counter: ${counter}`);
    counter++;

    if (counter === 5) {
        clearInterval(intervalId); // Stop the interval after reaching 5
    }
}, 1000);
