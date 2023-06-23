function Person(fName, lName) {
    this.fName = fName
    this.lName = lName
}

Person.prototype.getFullName = function () {
    return this.fName + " " + this.lName
}

function SuperHero(fName, lName, powers) {
    Person.call(this, fName, lName)
    this.powers = powers
}

// same can be done with class using extends keyword

// add one more method to it (can do more)
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false