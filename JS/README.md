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
