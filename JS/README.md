# Slice ( )

The slice( ) method copies a given part of an array and returns that copied part as a new array. It doesn’t change the original array.

array.slice(from, until);

From: Slice the array starting from an element index
Until: Slice the array until another element index

NOTE: The slice( ) method doesn’t include the last given element.

<code>
let array = [1, 2, 3, "hello world, 4.12, true]
let newArr = array.slice(0, 3) // [1, 2, 3]
</code>

# Splice ( )

The splice( ) method changes an array, by adding or removing elements from it.

- Removing Elements:
  For removing elements, we need to give the index parameter, and the number of elements to be removed:

array.splice(index, number of elements);

Index is the starting point for removing elements. Elements which have a smaller index number from the given index won’t be removed:

<code>
let array = [1, 2, 3, "hello world, 4.12, true]
array.splice(2); // Every element starting from index 2, will be removed [3, "hello world, 4.12, true]
array; // [1, 2]
</code>

If we don’t define the second parameter, every element starting from the given index will be removed from the array:

- Adding Elements:
  For adding elements, we need to give them as the 3rd, 4th, 5th parameter (depends on how many to add) to the splice ( ) method:

array.splice(index, number of elements, element, element);

As an example, I’m adding a and b in the very beginning of the array and I remove nothing:

<code>
let array = [1, 2, 3, "hello world, 4.12, true]
array.splice(0, 0, 'a', 'b'); // []
array; // ["a", "b", 1, 2, 3, "hello world, 4.12, true]
</code>

# Split ( )

The split( ) method is used for strings. It divides a string into substrings and returns them as an array. It takes 2 parameters, and both are optional.

string.split(separator, limit);

Separator: Defines how to split a string… by a comma, character etc.
Limit: Limits the number of splits with a given number

<code>
let array = [1, 2, 3, "hello world, 4.12, true]
let myString = array.toString();
let newArray = myString.split(",", 3); // ["1", "2", "3"]
</code>

# Transpiler

A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.

E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So, if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100.

A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100.

```javaScript
// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;
```

Now the rewritten code is suitable for older JavaScript engines.

Usually, a developer runs the transpiler on their own computer, and then deploys the transpiled code to the server.

Speaking of names, Babel is one of the most prominent transpilers out there.

Modern project build systems, such as webpack, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.

# Polyfills

New language features may include not only syntax constructs and operators, but also built-in functions.

For example, Math.trunc(n) is a function that “cuts off” the decimal part of a number, e.g Math.trunc(1.23) returns 1.

In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail.

As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations.

For this particular case, the polyfill for Math.trunc is a script that implements it, like this:

```javaScript
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

JavaScript is a highly dynamic language. Scripts may add/modify any function, even built-in ones.

Two interesting polyfill libraries are:

core js that supports a lot, allows to include only needed features.
polyfill.io service that provides a script with polyfills, depending on the features and user’s browser.

# Mark and Sweep Garbage collection

Garbage collection is performed automatically. We cannot force or prevent it.
Objects are retained in memory while they are reachable.
Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we’ve seen in the example above.

# Symbol

Symbol is a primitive data type in JavaScript that represents a unique identifier and can be used as a property key of an object to create hidden properties.

In JavaScript, `Symbol` is a primitive data type that represents a unique identifier. It was introduced in ECMAScript 2015 (ES6) to provide a way to create unique values that can be used as object properties. Symbols are immutable and unique, meaning each symbol value is different from any other symbol value.

Here's an example of how to create and use a Symbol:

```javascript
// Creating a Symbol
const symbol1 = Symbol()
const symbol2 = Symbol('description') // Optional description for debugging

// Using Symbols as object properties
const obj = {}

// Adding a property with a Symbol key
obj[symbol1] = 'value 1'
obj[symbol2] = 'value 2'

console.log(obj[symbol1]) // Output: value 1
console.log(obj[symbol2]) // Output: value 2

// Iterating over object properties
for (const key in obj) {
  console.log(key) // Symbols will not be logged
}

// Getting all symbol properties of an object
const symbolProperties = Object.getOwnPropertySymbols(obj)
console.log(symbolProperties) // Output: [Symbol(), Symbol(description)]

// Retrieving the value associated with a Symbol property
console.log(obj[symbolProperties[0]]) // Output: value 1
```

Symbols are useful when you want to create unique property keys for objects, especially in cases where you want to prevent name collisions or make properties non-enumerable (not iterated over using `for...in` loop). They are often used to define special behaviors or metadata within objects.

# Closure

In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from its outer (enclosing) scope even after the outer function has finished executing. In other words, a closure gives a function access to variables from an outer scope, even when the outer function has returned.

Here's an example that demonstrates the concept of closures:

```javascript
function outerFunction() {
  const outerVariable = 'I am from the outer function'

  function innerFunction() {
    console.log(outerVariable)
  }

  return innerFunction
}

const closure = outerFunction() // The inner function retains a reference to the outer scope

closure() // Output: "I am from the outer function"
```

In the above example, `outerFunction` defines an inner function `innerFunction`. Inside `innerFunction`, we can access the `outerVariable` declared in the outer scope of `outerFunction`, even after `outerFunction` has finished executing. This is possible because `innerFunction` forms a closure over the environment in which it was defined, preserving the reference to `outerVariable`.

Closures are commonly used in JavaScript for various purposes, such as creating private variables, implementing data encapsulation, and creating functions with persistent state. They are powerful and flexible constructs that contribute to the functional programming capabilities of JavaScript.

# Call, Apply, Bind

Here's a comparison between `call`, `apply`, and `bind` in tabular format:

|                 | `call`                                            | `apply`                                           | `bind`                                                           |
| --------------- | ------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------- |
| Invocation      | Immediately invokes the function                  | Immediately invokes the function                  | Returns a new function with the bound `this` value and arguments |
| Arguments       | Accepts individual arguments                      | Accepts an array-like object or an actual array   | Accepts individual arguments and partially applies them          |
| `this` value    | Explicitly sets the `this` value                  | Explicitly sets the `this` value                  | Creates a new function with the bound `this` value               |
| Execution       | Executes the function with the provided arguments | Executes the function with the provided arguments | Does not execute the function immediately                        |
| Return value    | Returns the result of the function execution      | Returns the result of the function execution      | Returns a new function                                           |
| Context binding | Can change the `this` value dynamically           | Can change the `this` value dynamically           | Can bind the `this` value permanently to a function              |

It's important to note that while `call` and `apply` invoke the function immediately, `bind` returns a new function with the bound `this` value and partially applied arguments, which can be invoked later.

# Promises

There are 6 static methods of Promise class:

Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, it becomes the error of Promise.all, and all other results are ignored.
Promise.allSettled(promises) (recently added method) – waits for all promises to settle and returns their results as an array of objects with:
status: "fulfilled" or "rejected"
value (if fulfilled) or reason (if rejected).
Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
Promise.any(promises) (recently added method) – waits for the first promise to fulfill, and its result becomes the outcome. If all of the given promises are rejected, AggregateError becomes the error of Promise.any.
Promise.resolve(value) – makes a resolved promise with the given value.
Promise.reject(error) – makes a rejected promise with the given error.
Of all these, Promise.all is probably the most common in practice.

# Async Await

```javaScript
async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}

f();
```

# Generators

```javaScript
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2
}

function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

for(let value of generator) {
  alert(value); // 1, then 2, then 3
}
```
