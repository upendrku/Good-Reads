1. Inversion of Control (IoC) in the Spring framework refers to the principle where the control of creating and managing objects is transferred to an external entity (typically the Spring container or application context). In simpler terms, instead of creating objects directly in your code, you define the dependencies and let the container handle their creation and injection.

Example:
Let's consider a scenario where you have a service class (`UserService`) that requires a dependency on a data access object (DAO) class (`UserDao`). Without IoC, you would typically create an instance of `UserDao` within `UserService` using the `new` keyword.

```java
public class UserService {
    private UserDao userDao;

    public UserService() {
        userDao = new UserDao();
    }

    // ...
}
```

With IoC, you delegate the responsibility of creating and injecting the `UserDao` instance to the Spring container. You define the dependency in the configuration and let the container manage it.

```java
public class UserService {
    private UserDao userDao;

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    // ...
}
```

In this example, the `UserDao` instance is passed to the `UserService` constructor, and the Spring container is responsible for creating the `UserDao` bean and injecting it into `UserService`. This way, the control of creating and managing dependencies is inverted to the container.

2. Bean Lifecycle in Spring:
   The lifecycle of a bean in Spring refers to its creation, initialization, usage, and destruction. Spring provides various callback methods that can be implemented in a bean to perform custom logic at different stages of its lifecycle. Here's an example to illustrate the bean lifecycle:

```java
public class MyBean implements InitializingBean, DisposableBean {

    public MyBean() {
        System.out.println("Constructor called");
    }

    public void afterPropertiesSet() throws Exception {
        System.out.println("InitializingBean's afterPropertiesSet() method called");
    }

    public void customInit() {
        System.out.println("Custom init method called");
    }

    public void doSomething() {
        System.out.println("Bean's business logic method called");
    }

    public void destroy() throws Exception {
        System.out.println("DisposableBean's destroy() method called");
    }

    public void customDestroy() {
        System.out.println("Custom destroy method called");
    }
}
```

In this example, the `MyBean` class implements `InitializingBean` and `DisposableBean` interfaces, which provide the callback methods for initialization and destruction.

During the lifecycle, the following events occur:

- Constructor: The constructor is called when the bean is created.

- InitializingBean's afterPropertiesSet(): This method is called after the bean properties are set, allowing for additional initialization logic.

- Custom init method: If you define a custom initialization method in the bean configuration, it is called after `afterPropertiesSet()`.

- Bean's business logic: The bean is now fully initialized and can execute its business logic.

- DisposableBean's destroy(): This method is called when the bean is about to be destroyed or released.

- Custom destroy method: If you define a custom destroy method in the bean configuration, it is called after `destroy()`.

3. Transaction in Spring:
   In the context of the Spring framework, a transaction refers to a set of database operations that must be treated as a single unit of work. Transactions ensure data consistency and integrity by providing the ability to either commit or rollback all the operations as a single atomic operation.

Example:
Let's consider a scenario where you have a service class (`UserService`) that performs operations on a database using a data access object (DAO) class (`UserDao`). You want to ensure that multiple database operations are executed

within a single transaction.

```java
@Transactional
public class UserService {
    private UserDao userDao;

    public void createUser(User user) {
        userDao.save(user);
    }

    public void deleteUser(User user) {
        userDao.delete(user);
    }

    // ...
}
```

By annotating the `UserService` class or its specific methods with `@Transactional`, you indicate that the operations should be executed within a transaction. If an exception occurs during any of the database operations, the transaction will be rolled back, undoing the changes made by previous operations. If all operations complete successfully, the transaction will be committed, making the changes persistent.

Using the `@Transactional` annotation, you can define the transactional behavior at the class or method level, specify propagation, isolation level, and other transaction attributes as per your requirements.
