const obj = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
}
for (let key in obj) {
    console.log(key)
}

for (let val of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(val)
}

if ('name' in obj) {
    console.log('Found')
}

delete obj.name
console.log(obj)

// make a deep copy of object
const objCopy = structuredClone(obj)
objCopy.name = "Cena"
console.log(objCopy)
console.log(obj)

// A function that is a property of an object is called its method.

let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name)
        console.log(user.name); // "user" instead of "this"
    }

};

console.log(user.toString())

let admin = user;
admin.sayHi()

user = null; // overwrite to make things obvious
// admin.sayHi(); // TypeError: Cannot read property 'name' of null