const person1 = {
    name: 'John',
    greet: function (message) {
        console.log(`${message}, ${this.name}!`);
    }
};

const employee1 = {
    name: 'Jane'
};

person1.greet.call(employee1, 'Hello'); // Hello, Jane!

console.log('...........................')


function sum(a, b, c) {
    return a + b + c;
}

const numbers = [2, 4, 6];

const result = sum.apply(null, numbers);
console.log(result); // 12

console.log('...........................')

const person = {
    name: 'John',
    greet: function (message) {
        console.log(`${message}, ${this.name}!`);
    }
};

const employee = {
    name: 'Jane'
};

const greetFunc = person.greet.bind(employee, 'Hello');
greetFunc(); // Hello, Jane!


// simplest example

const myFunction = function (name) {
    console.log(`Hello, ${name}`);
};

// call
myFunction.call({ name: "John" }); // Hello, John

// apply
myFunction.apply({ name: "Jane" }, ["Jane"]); // Hello, Jane

// bind
const boundFunction = myFunction.bind({ name: "Mary" });
boundFunction(); // Hello, Mary