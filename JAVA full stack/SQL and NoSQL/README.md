# SQL Database:

1. What is a SQL database?

   - A SQL database is a relational database management system (RDBMS) that stores and manages data organized in tables. It follows the Structured Query Language (SQL) for defining, manipulating, and retrieving data.

2. What are the advantages of using SQL databases?

   - Structured data model: SQL databases provide a structured and organized way to store data, ensuring data integrity and consistency.
   - ACID properties: SQL databases ensure Atomicity, Consistency, Isolation, and Durability, which guarantee reliable and transactional data operations.
   - Powerful query language: SQL provides a powerful and standardized language for querying and manipulating data, making it easier to retrieve and analyze information.
   - Scalability: SQL databases can handle large amounts of data and scale vertically by adding more resources to the server.

3. What are the different types of SQL databases?

   - Some popular types of SQL databases include MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, and SQLite.

4. What is a primary key?

   - A primary key is a unique identifier for each record in a table. It ensures that each row is uniquely identifiable and helps maintain data integrity.

5. What is a foreign key?

   - A foreign key is a field in a table that refers to the primary key of another table. It establishes a relationship between two tables, enforcing referential integrity and enabling data consistency across tables.

6. What is normalization in the context of databases?
   - Normalization is the process of organizing data in a database to eliminate redundancy and improve data integrity. It involves breaking down large tables into smaller, well-structured tables to reduce data duplication and anomalies.

## Normal Forms in SQL

1. Question: What is the purpose of normalization in database design?
   Answer: The purpose of normalization is to eliminate data redundancy, improve data integrity, and ensure data consistency in a relational database.

2. Question: What is the first normal form (1NF)?
   Answer: The first normal form (1NF) requires that a table has a primary key and that each column in the table contains only atomic values. It eliminates repeating groups and ensures that each column stores a single value.

3. Question: How is the first normal form (1NF) achieved?
   Answer: To achieve 1NF, you need to:

   - Identify a primary key for the table.
   - Remove repeating groups by placing them in separate tables with appropriate relationships.
   - Ensure that each column stores only atomic values.

4. Question: What is the second normal form (2NF)?
   Answer: The second normal form (2NF) builds on 1NF and requires that all non-key attributes depend on the entire primary key. It eliminates partial dependencies in a table.

5. Question: How is the second normal form (2NF) achieved?
   Answer: To achieve 2NF, you need to:

   - Ensure the table is in 1NF.
   - Identify any partial dependencies, where non-key attributes depend on only a part of the primary key.
   - Move the attributes causing partial dependencies to a separate table, with a foreign key referencing the original table.

6. Question: What is the third normal form (3NF)?
   Answer: The third normal form (3NF) builds on 2NF and requires that all non-key attributes depend on the primary key and only the primary key. It eliminates transitive dependencies in a table.

7. Question: How is the third normal form (3NF) achieved?
   Answer: To achieve 3NF, you need to:

   - Ensure the table is in 2NF.
   - Identify any transitive dependencies, where non-key attributes depend on other non-key attributes.
   - Move the attributes causing transitive dependencies to a separate table, with a foreign key referencing the original table.

8. Question: What is the difference between 2NF and 3NF?
   Answer: The main difference between 2NF and 3NF is that 2NF deals with eliminating partial dependencies, whereas 3NF deals with eliminating transitive dependencies.

9. Question: Can you have a table that is in 3NF but not in 2NF?
   Answer: No, it is not possible to have a table that is in 3NF but not in 2NF. Achieving 3NF inherently implies that the table is also in 2NF.

# NoSQL Database:

1. What is a NoSQL database?

   - A NoSQL database is a non-relational database that provides a flexible schema and is designed to handle large volumes of unstructured or semi-structured data. It offers horizontal scalability and high performance.

2. What are the advantages of using NoSQL databases?

   - Flexible schema: NoSQL databases allow for dynamic and schema-less data models, making it easier to store and retrieve data with varying structures.
   - Scalability: NoSQL databases are designed to scale horizontally, allowing for distributed and high-performance data processing.
   - High availability: NoSQL databases often replicate data across multiple nodes, ensuring high availability and fault tolerance.
   - Fast data access: NoSQL databases are optimized for fast read and write operations, making them suitable for handling large volumes of data.

3. What are the different types of NoSQL databases?

   - There are several types of NoSQL databases, including:
     - Document databases (e.g., MongoDB): Stores and retrieves data in JSON-like documents.
     - Key-value stores (e.g., Redis): Stores data as key-value pairs.
     - Column-family stores (e.g., Cassandra): Stores data in columns grouped by rows.
     - Graph databases (e.g., Neo4j): Stores data in nodes and edges to represent relationships.

4. How does data consistency work in NoSQL databases?

   - NoSQL databases provide eventual consistency, meaning that changes made to the data will be propagated and become consistent across nodes over time. This approach prioritizes scalability and availability over immediate consistency.

5. What is sharding in NoSQL databases?

   - Sharding is the process of distributing data across multiple nodes or machines in a NoSQL database. It allows for horizontal scalability by dividing the dataset into smaller subsets and storing them on different nodes.

6. Stored Procedures:
   Stored procedures are precompiled database programs that are stored in the database server. They contain a set of SQL statements and procedural logic, which can be executed as a single unit. Stored procedures are typically used to encapsulate complex database operations and provide an interface for other applications to interact with the database.

Example: Let's consider a scenario where you have an e-commerce application. You can create a stored procedure called `calculate_total_price` that calculates the total price of a customer's order based on the products and quantities.

```sql
CREATE PROCEDURE calculate_total_price(IN customerId INT, OUT totalPrice DECIMAL(10, 2))
BEGIN
    SELECT SUM(quantity * price) INTO totalPrice
    FROM orders
    JOIN order_items ON orders.order_id = order_items.order_id
    JOIN products ON order_items.product_id = products.product_id
    WHERE orders.customer_id = customerId;
END;
```

In this example, the stored procedure takes a customer ID as input and returns the total price as output. It retrieves the relevant data from multiple tables, performs calculations, and stores the result in the `totalPrice` output parameter. This stored procedure can be called by the application whenever it needs to calculate the total price for a specific customer's order.

7. Types of Joins in MySQL:
   MySQL supports different types of JOIN operations to combine rows from multiple tables based on a related column between them. The main types of JOINs in MySQL are:

- INNER JOIN: Returns only the matching rows from both tables based on the join condition.

Example: Let's say you have two tables, `Customers` and `Orders`. You can use an INNER JOIN to retrieve the orders placed by customers.

```sql
SELECT Orders.order_id, Customers.customer_name
FROM Orders
INNER JOIN Customers ON Orders.customer_id = Customers.customer_id;
```

- LEFT JOIN: Returns all the rows from the left table and the matching rows from the right table based on the join condition. If no match is found, NULL values are included for the columns of the right table.

Example: Consider the same `Customers` and `Orders` tables. A LEFT JOIN can be used to retrieve all customers and their orders, including customers who haven't placed any orders.

```sql
SELECT Customers.customer_name, Orders.order_id
FROM Customers
LEFT JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

- RIGHT JOIN: Returns all the rows from the right table and the matching rows from the left table based on the join condition. If no match is found, NULL values are included for the columns of the left table.

Example: Continuing with the `Customers` and `Orders` tables, a RIGHT JOIN can be used to retrieve all orders and their corresponding customers, including orders without associated customers.

```sql
SELECT Customers.customer_name, Orders.order_id
FROM Customers
RIGHT JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

- FULL JOIN: Returns all the rows from both tables, matching rows from both tables based on the join condition. If no match is found, NULL values are included for the columns of the non-matching table.

Example: Using the same `Customers` and `Orders` tables, a FULL JOIN can be used to retrieve all customers and their orders, including customers without orders and orders without customers.

```sql
SELECT Customers.customer_name, Orders.order_id
FROM Customers
FULL JOIN Orders ON Customers.customer_id = Orders.customer_id;
```

8. Difference between DELETE and TRUNCATE in MySQL:
   DELETE and TRUNCATE are both used to remove data from a table in MySQL, but they differ in their behavior.

- DELETE: The DELETE statement is used to delete specific rows from a table based on a condition. It is a logged operation, meaning that it generates

undo logs and can be rolled back.

Example: Let's say you have a table called `Customers` and you want to delete customers who haven't placed any orders.

```sql
DELETE FROM Customers WHERE customer_id NOT IN (SELECT customer_id FROM Orders);
```

In this example, the DELETE statement deletes rows from the `Customers` table where the customer ID is not found in the subquery that retrieves customer IDs from the `Orders` table.

- TRUNCATE: The TRUNCATE statement is used to remove all rows from a table. It is a non-logged operation, meaning that it does not generate undo logs and cannot be rolled back. TRUNCATE also resets the auto-increment value for the table.

Example: Suppose you have a table called `Products` and you want to remove all products.

```sql
TRUNCATE TABLE Products;
```

In this example, the TRUNCATE statement removes all rows from the `Products` table, effectively emptying the table.

9. Difference between Stored Procedures and Functions in MySQL:
   Stored procedures and functions in MySQL are both database objects that encapsulate a set of SQL statements and procedural logic. However, there are some differences between them:

- Purpose: A stored procedure is primarily used to perform an action or a series of actions in the database, while a function is used to return a single value or a table of values.

- Usage: Stored procedures are typically called by applications or other stored procedures to perform specific operations or tasks. Functions are usually used within SQL statements to retrieve computed values.

- Return Type: Stored procedures do not have a return type. They can have input parameters and output parameters to pass values between the procedure and the calling code. Functions have a specific return type defined when they are created.

- Invocation: Stored procedures are invoked using the CALL statement or can be executed automatically as triggers or events. Functions are invoked within SQL statements, such as SELECT or WHERE clauses.

- Transaction Control: Stored procedures can contain transaction control statements like COMMIT and ROLLBACK to manage database transactions. Functions cannot perform transaction control.

- Use in Queries: Stored procedures cannot be used directly in queries, while functions can be used in SELECT statements or as part of expressions.

Example:

```sql
-- Stored Procedure
DELIMITER //
CREATE PROCEDURE GetCustomerCount(IN city VARCHAR(50), OUT count INT)
BEGIN
    SELECT COUNT(*) INTO count FROM Customers WHERE City = city;
END //
DELIMITER ;

-- Function
DELIMITER //
CREATE FUNCTION GetCustomerCount(city VARCHAR(50)) RETURNS INT
BEGIN
    DECLARE count INT;
    SELECT COUNT(*) INTO count FROM Customers WHERE City = city;
    RETURN count;
END //
DELIMITER ;
```

In this example, the stored procedure `GetCustomerCount` takes a city as input and returns the customer count through an output parameter. The function `GetCustomerCount` takes a city as input and returns the customer count as the result. The stored procedure can be invoked using the CALL statement, while the function can be used in a SELECT statement.

# Compare both

Here's a comparison of SQL and NoSQL databases in a tabular format:

| Criteria        | SQL Database                                                 | NoSQL Database                                                |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------- |
| Data Model      | Relational                                                   | Non-relational                                                |
| Schema          | Fixed schema                                                 | Flexible schema                                               |
| Data Structure  | Tables                                                       | Key-value, Document, Column-family, Graph                     |
| Query Language  | SQL (Structured Query Language)                              | Varies based on the database type                             |
| ACID Compliance | Generally supports ACID transactions                         | Varies based on the database type                             |
| Scalability     | Vertical scaling (adding resources to a server)              | Horizontal scaling (adding more servers)                      |
| Joins           | Supports complex joins and relationships                     | Limited or no support for joins                               |
| Data Integrity  | Enforced by defining relationships and constraints           | Looser data integrity, eventual consistency                   |
| Normalization   | Follows normalization principles                             | Denormalized data model                                       |
| Data Storage    | Structured data stored in tables                             | Unstructured or semi-structured data                          |
| Suitable For    | Structured data, complex queries, maintaining data integrity | Unstructured or rapidly changing data, high scalability needs |
| Examples        | MySQL, PostgreSQL, Oracle Database                           | MongoDB, Cassandra, Redis                                     |

# Decide which one to use?

From an architectural point of view, the choice between SQL and NoSQL databases depends on several factors and the specific requirements of your application. Here are some considerations for when to prefer each type:

## When to prefer SQL databases:

1. Structured data: If your data has a well-defined schema and requires a fixed structure, SQL databases are a good fit. They are designed for managing structured data and ensuring data integrity.

2. Complex queries and relationships: SQL databases excel at handling complex queries involving multiple tables and relationships. If your application requires frequent joins and complex data manipulations, SQL databases provide powerful querying capabilities.

3. ACID transactions: If your application requires strong transactional support and data consistency, SQL databases are a good choice. They ensure Atomicity, Consistency, Isolation, and Durability (ACID) properties, making them suitable for applications with critical data integrity needs.

4. Data integrity and constraints: SQL databases enforce data integrity through the use of constraints, such as primary keys, foreign keys, and unique constraints. If maintaining data integrity is crucial for your application, SQL databases provide robust mechanisms for enforcing these constraints.

## When to prefer NoSQL databases:

1. Unstructured or semi-structured data: If your data is unstructured, varying in schema, or has a flexible structure, NoSQL databases offer more flexibility. They can store and process diverse data types, including documents, key-value pairs, columnar data, or graphs.

2. Scalability and performance: NoSQL databases are designed for horizontal scalability, allowing you to scale your application by distributing data across multiple servers. They can handle large volumes of data and high traffic loads, making them suitable for highly scalable applications.

3. Agile development and rapid iterations: NoSQL databases provide a flexible schema that allows for easy modifications and iterations. They are well-suited for agile development processes, where requirements may change frequently and the data model needs to adapt accordingly.

4. High read/write throughput: If your application requires high-speed data ingestion, frequent updates, or read-heavy workloads, NoSQL databases can provide better performance. They often prioritize scalability and high throughput over strict data consistency.

It's important to note that these considerations are general guidelines, and the choice between SQL and NoSQL databases should be based on a thorough analysis of your application's specific requirements, scalability needs, data structure, and expected usage patterns. In some cases, a combination of both SQL and NoSQL databases, known as polyglot persistence, may be the most suitable approach for meeting diverse data management needs within a single application.
