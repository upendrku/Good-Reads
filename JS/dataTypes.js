
/* 

NUMBERS

num.toString(base) converts a number to a string in the numeral system with the given base.
For regular number tests:

isNaN(value) converts its argument to a number and then tests it for being NaN
Number.isNaN(value) checks whether its argument belongs to the number type, and if so, tests it for being NaN
isFinite(value) converts its argument to a number and then tests it for not being NaN/Infinity/-Infinity
Number.isFinite(value) checks whether its argument belongs to the number type, and if so, tests it for not being NaN/Infinity/-Infinity
For converting values like 12pt and 100px to a number:

Use parseInt/parseFloat for the “soft” conversion, which reads a number from a string and then returns the value they could read before the error.
For fractions:

Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
Make sure to remember there’s a loss of precision when working with fractions.
*/

const num = 123
num.toString(2) // '1111011'

/* STRING

There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
We can use special characters, such as a line break \n.
To get a character, use: [] or at method.
To get a substring, use: slice or substring.
To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.
There are several other helpful methods in strings:

str.trim() – removes (“trims”) spaces from the beginning and end of the string.
str.repeat(n) – repeats the string n times.
…and more to be found in the manual.
Strings also have methods for doing search/replace with regular expressions.

*/

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

ucFirst("john"); // John

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

truncate("What I'd like to tell on this topic is:", 20) // "What I'd like to te…"


/* 
ARRAYS

The call to new Array(number) creates an array with the given length, but without elements.

The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
If we shorten length manually, the array is truncated.
Getting the elements:

we can get element by its index, like arr[0]
also we can use at(i) method that allows negative indexes. For negative values of i, it steps back from the end of the array. If i >= 0, it works same as arr[i].
We can use an array as a deque with the following operations:

push(...items) adds items to the end.
pop() removes the element from the end and returns it.
shift() removes the element from the beginning and returns it.
unshift(...items) adds items to the beginning.
To loop over the elements of the array:

for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
for (let item of arr) – the modern syntax for items only,
for (let i in arr) – never use.
To compare arrays, don’t use the == operator (as well as >, < and others), as they have no special treatment for arrays. They handle them as any objects, and it’s not what we usually want.

Instead you can use for..of loop to compare arrays item-by-item.

arr.fill(value, start, end) – fills the array with repeating value from index start to end.

arr.copyWithin(target, start, end) – copies its elements from position start till position end into itself, at position target (overwrites existing).

arr.flat(depth)/arr.flatMap(fn) create a new flat array from a multidimensional array.

Array.from(obj[, mapFn, thisArg]) makes a real Array from an iterable or array-like obj, and we can then use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
*/

let arr1 = ["I", "study", "JavaScript"];

arr1.splice(1, 1); // from index 1 remove 1 element

alert(arr1); // ["I", "JavaScript"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr2.splice(0, 3, "Let's", "dance");

alert(arr2) // now ["Let's", "dance", "right", "now"]

let arr3 = ["t", "e", "s", "t"];

alert(arr3.slice(1, 3)); // e,s (copy from 1 to 3)

alert(arr3.slice(-2)); // s,t (copy from -2 till the end)

let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1

alert(arr.includes(1)); // true

let fruits = ['Apple', 'Orange', 'Apple']

alert(fruits.indexOf('Apple')); // 0 (first Apple)
alert(fruits.lastIndexOf('Apple')); // 2 (last Apple)

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

// Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0

// Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3

alert(Array.isArray([])); // true

/*
MAP

Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.

Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

/*
SET

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

Its main methods are:

new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

The same methods Map has for iterators are also supported:

set.keys() – returns an iterable object for values,
set.values() – same as set.keys(), for compatibility with Map,
set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

*/

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

/*
WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.
*/

/* 
Date

Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
Months are counted from zero (yes, January is a zero month).
Days of week in getDay() are also counted from zero (that’s Sunday).
Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.
*/

let date1 = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getWeekDay(date1));        // should output "TU"

alert(getLocalDay(date1));       // tuesday, should show 2

let date = new Date(2015, 0, 2);
alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/*
JSON

JSON is a data format that has its own independent standard and libraries for most programming languages.
JSON supports plain objects, arrays, strings, numbers, booleans, and null.
JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify.
*/