---
slug: databases
id: databases
title: Database 101
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [database]
---

<img width="100%" src="https://convergesolve.com/wp-content/uploads/2015/05/database-word-cloud.jpg" />

## What is a database?

According to [Oracle](https://www.oracle.com/database/what-is-database/), a database is an "organized collection of structured information, or data, typically stored electronically in a computer system." In simplistic terms, it's a file or document of tangible or intangible data about a particular item. For example, information collected to describe a person would be that individual's name, age, dob, weight, height, etc. A collection of individuals or items would assemble a table, and a group of tables would form a database. 

:::note What's a table?
A table represents a subject or event in an application
:::

<img src="https://s3-us-west-1.amazonaws.com/morpheus-staging/system/spud_media/188/original/tables1.jpg?1414453819" width="100%"/>

## Types of databases
### Relational
This type of database defines database relationships in the form of tables. It is also called Relational DBMS, which is the most popular DBMS type in the market. Database example of the RDBMS system include MySQL, Oracle, and Microsoft SQL Server database.
#### 🥇 Popular Relational DBMS: 
- [POSTGRESQL](./postgres/intro.md)
- MYSQL
- ORACLE
- SQL SERVER

### NoSQL
🚧 No Content
#### 🥇 Popular NoSQL DBMS:
- MongoDB
- DynamoDB
- ORACLE
- SQL SERVER

## What is Structured Query Language (SQL)?

🚧 No Content
## The database design process

### The design process consists of the following steps:

<details>
<summary>1. Determine the purpose of your database</summary>
    This helps prepare you for the remaining steps.
</details>

<details>
<summary>2. Find and organize the information required</summary>
    Gather all of the types of information you might want to record in the database, such as product name and order number.
</details>     

<details>
<summary>3. Divide the information into tables</summary>
    Divide your information items into major entities or subjects, such as Products or Orders. Each subject then becomes a table.
</details>     

<details>
<summary>4. Turn information items into columns</summary>
    Divide your information items into major entities or subjects, such as Products or Orders. Each subject then becomes a table.
    <br />
    Decide what information you want to store in each table. Each item becomes a field, and is displayed as a column in the table. For example, an Employees table might include fields such as Last Name and Hire Date.
</details>     

<details>
<summary>5. Specify primary keys</summary>
    Divide your information items into major entities or subjects, such as Products or Orders. Each subject then becomes a table.
    <br />
    Decide what information you want to store in each table. Each item becomes a field, and is displayed as a column in the table. For example, an Employees table might include fields such as Last Name and Hire Date.
</details>        

<details>
<summary>6. Specify primary keys</summary>
    Divide your information items into major entities or subjects, such as Products or Orders. Each subject then becomes a table.
    <br />
    Decide what information you want to store in each table. Each item becomes a field, and is displayed as a column in the table. For example, an Employees table might include fields such as Last Name and Hire Date.
    <br />
    Choose each table’s primary key. The primary key is a column that is used to uniquely identify each row. An example might be Product ID or Order ID.
</details>        

<details>
<summary>7. Set up the table relationships</summary>
    Look at each table and decide how the data in one table is related to the data in other tables. Add fields to tables or create new tables to clarify the relationships, as necessary.
</details>            

<details>
<summary>8. Refine your design</summary>
    Analyze your design for errors. Create the tables and add a few records of sample data. See if you can get the results you want from your tables. Make adjustments to the design, as needed.
</details>            

<details>
<summary>9. Apply the normalization rules</summary>
    Apply the data normalization rules to see if your tables are structured correctly. Make adjustments to the tables, as needed.
</details>            

### Primary Key

🚧 No Content

### Secondary Key

🚧 No Content

### Constraints

🚧 No Content

