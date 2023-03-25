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
