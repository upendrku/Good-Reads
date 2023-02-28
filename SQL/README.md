## Database basics

# Data

Data is numeric, textual, visual, or audio information that describes real-world systems. Data can vary in several important ways:
-> Scope- The amount of data produced and collected can vary.
-> Format- Data may be produced as numbers, text, image, audio, or video.
-> Access- Some data sources are private while others are made publicly available.

# DBMS

A database is a collection of data in a structured format.
-> A database system, also known as a database management system or DBMS, is software that reads and writes data in a database. Database systems ensure data is secure, internally consistent, and available at all times.
-> A query is a request to retrieve or change data in a database.
-> A database application is software that helps business users interact with database systems.

# Database roles

-> A database administrator is responsible for securing the database system against unauthorized users. A database administrator enforces procedures for user access and database system availability.
-> A database designer determines the format of each data element and the overall database structure. Database designers must balance several priorities, including storage, response time, and support for rules that govern the data.
-> A database programmer develops computer programs that utilize a database. Database programmers write applications that combine database query languages and general-purpose programming languages.
-> A database user is a consumer of data in a database. Database users request, update, or use stored data to generate reports or information.

## Database systems

# File systems and database systems

Large, complex databases that are shared by many users have special requirements:

-> Performance: When many users and applications simultaneously access large databases, query response time degrades rapidly. Database systems maintain fast response times by structuring data properly on storage media and processing queries efficiently.

-> Authorization: Many database users should have limited access to specific tables, columns, or rows of a database. Database systems authorize individual users to access specific data.

-> Security: Database systems ensure authorized users only access permissible data. Database systems also protect against hackers by encrypting data and restricting access.

-> Rules: Database systems ensure data is consistent with structural and business rules. Ex: When multiple copies of data are stored in different locations, copies must be synchronized as data is updated. Ex: When a course number appears in a student registration record, the course must exist in the course catalog.

-> Recovery: Computers, database systems, and individual transactions occasionally fail. Database systems must recover from failures and restore the database to a consistent state without loss of data.

# Transactions

Transaction management is a particularly challenging requirement for database systems.

A transaction is a group of queries that must be either completed or rejected as a whole. Execution of some, but not all, queries results in inconsistent or incorrect data.
When processing transactions, database systems must:

-> Ensure transactions are processed completely or not at all.
-> Prevent conflicts between concurrent transactions.
-> Ensure transaction results are never lost.

# Architecture

The architecture of a database system describes the internal components and the relationships between components. At a high level, the components of most database systems are similar:

-> The query processor interprets queries, creates a plan to modify the database or retrieve data, and returns query results to the application. The query processor performs query optimization to ensure the most efficient instructions are executed on the data.

-> The storage manager translates the query processor instructions into low-level file-system commands that modify or retrieve data. Database sizes range from megabytes to many terabytes, so the storage manager uses indexes to quickly locate data.

-> The transaction manager ensures transactions are properly executed. The transaction manager prevents conflicts between concurrent transactions. The transaction manager also restores the database to a consistent state in the event of a transaction or system failure.

-> The log is a file containing a complete record of all inserts, updates, and deletes processed by the database. The transaction manager writes log records before applying changes to the database. In the event of a failure, the transaction manager uses log records to restore the database.

-> The catalog, also known as a data dictionary, is a directory of tables, columns, indexes, and other database objects. Other components use catalog information to process and execute queries.

Database systems have different capabilities, and component details vary significantly. Ex: Some database systems do not support transactions and therefore have no transaction manager. Ex: The storage manager implementation depends on the physical structure of data on storage media.

# Database system architecture

A database system is composed of a query processor, storage manager, transaction manager, log, and catalog.
An application sends queries to the query processor.

The query processor uses information from the catalog to perform query optimization.

The storage manager translates the query processor instructions into file-system commands and uses an index to quickly locate the requested data.

The transaction manager logs insert, update, and delete queries, and the result is sent back to the application.

## Query languages

# Common queries

A database system responds to queries written in a query language. A query is a command for a database that typically inserts new data, retrieves data, updates data, or deletes data from a database. A query language is a computer programming language for writing database queries.

# Writing queries with SQL

Structured Query Language, or SQL, is the standard query language of relational database systems.

The term NoSQL refers to a new generation of non-relational databases. NoSQL originally meant 'does not support SQL'. However, many NoSQL databases have added support for SQL, and 'NoSQL' has come to mean 'not only SQL'.

# Creating tables with SQL

The SQL CREATE TABLE statement creates a new table by specifying the table and column names. Each column is assigned a data type that indicates the format of column values. Data types can be numeric, textual, or complex. Ex:

INT stores integer values.
DECIMAL stores fractional numeric values.
VARCHAR stores textual values.
DATE stores year, month, and day.

Some data types are followed by one or two numbers in parentheses, indicating the size of the data type. Ex: VARCHAR(10) indicates ten characters. DECIMAL(10, 3) indicates ten significant digits, including three after the decimal point.

<code>
CREATE TABLE Movie (
  ID INT,
  Title VARCHAR(100),
  Rating VARCHAR(5),
  ReleaseDate DATE
);

INSERT INTO Movie VALUES
(1, 'Rogue One: A Star Wars Story', 'PG-13', '2016-12-10'),
(2, 'Hidden Figures', 'PG', '2017-01-06'),
(3, 'Toy Story', 'G', '1995-11-22'),
(4, 'Avengers: Endgame', 'PG-13', '2019-04-26'),
(5, 'The Godfather', 'R', '1972-03-14');

-- Modify the SELECT statement:
SELECT \* FROM Movie;
</code>
