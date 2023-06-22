Here are some of the most common JavaScript design patterns and their examples:

- **Singleton pattern:** This pattern ensures that there is only one instance of a class in a program. This can be useful for classes that represent resources that should only be accessible from a single location, such as a database connection.

```javascript
class DatabaseConnection {
  constructor() {
    if (DatabaseConnection.instance) {
      throw new Error('Another instance of DatabaseConnection already exists')
    }

    DatabaseConnection.instance = this
  }

  static getInstance() {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection()
    }

    return DatabaseConnection.instance
  }
}

const databaseConnection = DatabaseConnection.getInstance()
```

- **Factory pattern:** This pattern provides a way to create objects without having to expose the underlying implementation. This can be useful for creating objects that are expensive to create, or for creating objects that need to be created in a specific way.

```javascript
class CarFactory {
  static createCar(type) {
    switch (type) {
      case 'sedan':
        return new Sedan()
      case 'sports car':
        return new SportsCar()
      default:
        throw new Error('Invalid car type')
    }
  }
}

const car = CarFactory.createCar('sedan')
```

- **Prototype pattern:** This pattern allows objects to be created by copying the properties and methods of an existing object. This can be useful for creating objects that are similar to each other, or for creating objects that need to be created quickly.

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}

const john = new Person('John Doe')
const mary = new Person('Mary Smith')

console.log(john.name) // "John Doe"
console.log(mary.name) // "Mary Smith"
```

- **Adapter pattern:** This pattern allows two incompatible interfaces to work together. This can be useful for working with legacy code, or for working with different APIs.

```javascript
class OldAPI {
  getFoo() {
    return 'foo'
  }
}

class NewAPI {
  getBar() {
    return 'bar'
  }
}

class Adapter extends OldAPI {
  constructor() {
    super()
    this.newApi = new NewAPI()
  }

  getBar() {
    return this.newApi.getBar()
  }
}

const adapter = new Adapter()
console.log(adapter.getFoo()) // "foo"
console.log(adapter.getBar()) // "bar"
```
