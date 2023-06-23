// Closure example in javascript
function f() {
    let value = 123;

    return function () {
        console.log(value);
    }
}

let g = f(); // while g function exists, the value stays in memory

g = null; // ...and now the memory is cleaned up