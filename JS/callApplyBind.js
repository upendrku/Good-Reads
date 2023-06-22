const person1 = {
    name: 'John',
    greet: function (message) {
        console.log(`${message}, ${this.name}!`);
    }
};

const employee1 = {
    name: 'Jane'
};

person.greet.call(employee1, 'Hello');

console.log('...........................')


function sum(a, b, c) {
    return a + b + c;
}

const numbers = [2, 4, 6];

const result = sum.apply(null, numbers);
console.log(result);

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
greetFunc();
