# ES6 and ES6+ Features

- **Let and const keywords:** These keywords are used to declare variables that are scoped to the block in which they are declared. This helps to prevent accidental variable redeclaration and makes the code more readable.

```javascript
let x = 10
const y = 20

{
  let x = 30 // This is a new variable x
  console.log(x) // 30
}

console.log(x) // 10
console.log(y) // 20
```

- **Arrow functions:** Arrow functions are a new type of function that are concise and easy to read. They are also more efficient than traditional functions, because they do not create a new scope.

```javascript
const add = (x, y) => x + y

console.log(add(10, 20)) // 30
```

- **Template literals:** Template literals allow you to embed expressions and variables in strings. This makes it easier to format strings and to create dynamic strings.

```javascript
const name = 'John Doe'
const age = 30

const greeting = `Hello, ${name}! You are ${age} years old.`

console.log(greeting) // Hello, John Doe! You are 30 years old.
```

- **Destructuring assignment:** Destructuring assignment allows you to extract the values from an object or array into separate variables. This makes it easier to work with complex data structures.

```javascript
const person = {
  name: 'John Doe',
  age: 30,
}

const { name, age } = person

console.log(name) // John Doe
console.log(age) // 30
```

- **Object rest and spread operators:** The object rest and spread operators are used to extract the remaining properties from an object or to spread the elements of an array into a new array.

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  address: '123 Main Street',
}

const { name, ...other } = person

console.log(name) // John Doe
console.log(other) // { age: 30, address: "123 Main Street" }

const array = [1, 2, 3, 4]
const newArray = [...array, 5, 6, 7]

console.log(newArray) // [1, 2, 3, 4, 5, 6, 7]
```

- **Classes:** Classes are a new way to create objects in JavaScript. They provide a more structured way to organize code and to inherit properties and methods from other classes.

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`)
  }
}

const person = new Person('John Doe', 30)
person.sayHello() // Hello, my name is John Doe
```

- **Modules:** Modules are a way to organize code into reusable units. They allow you to import and export code from other modules, which makes it easier to share code and to keep your code organized.

```javascript
// module.exports is used to export the contents of the module
module.exports = {
  sayHello() {
    console.log('Hello, world!')
  },
}

// import the module and use the exported function
const { sayHello } = require('./module')
sayHello() // Hello, world!
```

- **Default parameters:** Default parameters allow you to specify a default value for a parameter in a function. This makes it easier to write functions that can be used with different sets of arguments.

```javascript
function sayHello(name = 'World') {
  console.log(`Hello, ${name}`)
}

sayHello() // Hello, World!
sayHello('John Doe') // Hello, John Doe!
```

- **Promises:** Promises are a new way to handle asynchronous code. They provide a more structured way to write code that can handle multiple asynchronous operations.

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello, world!')
  }, 1000)
})

promise.then((result) => {
  console.log(result) // Hello, world!
})
```

- **Async and await:** Async and await are new keywords that allow you to write asynchronous code in a more concise and readable way.

```javascript
async function sayHello() {
  const result = await fetch('https://example.com')
  console.log(result)
}

sayHello() // Hello, world!
```

- **Symbol:** Symbols are a new type of object that can be used to represent unique values. They are often used to create keys for objects and arrays.

```javascript
const symbol = Symbol('my-symbol')

const object = {
  [symbol]: 'Hello, world!',
}

console.log(object[symbol]) // Hello, world!
```

- **Object.entries() and Object.values():** These methods allow you to iterate over the properties of an object in a different way than the `for...in` loop.

```javascript
const person = {
  name: 'John Doe',
  age: 30,
}

for (const property of Object.entries(person)) {
  console.log(property)
} // [ "name", "John Doe" ]
// [ "age", 30 ]

for (const value of Object.values(person)) {
  console.log(value)
} // John Doe
// 30
```

## Here are some other features that were introduced as part of ES6 and ES6+:

- **SharedArrayBuffer:** SharedArrayBuffer is a new type of ArrayBuffer that can be shared between multiple threads. This makes it possible to write code that can be executed in parallel.

- **Intl API:** The Intl API provides a way to format and parse dates, numbers, and currencies in a locale-sensitive way.

- **Unicode 10 support:** ES6 supports the full Unicode 10 character set. This means that you can now use characters from all over the world in your JavaScript code.

- **For...of loop:** The `for...of` loop is a new way to iterate over arrays and objects. It is more efficient than the `for...in` loop, and it can also be used to iterate over strings.

- **Array.prototype.includes():** The `Array.prototype.includes()` method allows you to check if an element is contained in an array.

- **String.prototype.startsWith() and String.prototype.endsWith():** These methods allow you to check if a string starts with or ends with a specific substring.

- **Math.log10():** The `Math.log10()` method returns the logarithm of a number in base 10.

- **Number.isFinite() and Number.isNaN():** These methods allow you to check if a number is finite or NaN.

- **Object.assign():** The `Object.assign()` method allows you to copy the properties of one object to another object.

- **Object.is():** The `Object.is()` method allows you to compare two objects and determine if they are the same object.

- **Map and Set:** Map and Set are new collection types that allow you to store key-value pairs and unique values, respectively.
