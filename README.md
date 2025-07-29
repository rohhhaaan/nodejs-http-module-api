#Student Management RESTful API

This project demonstrates how to build a minimal Student Management RESTful API using only the raw HTTP module in Node.js, without relying on popular frameworks like Express. It's designed to provide a foundational understanding of how web servers and APIs function at a lower level.

Features
This API supports basic CRUD (Create, Read, Update, Delete) operations for managing student data:

GET /students: Retrieve a list of all students.

GET /students/:id: Fetch a single student by their unique ID.

POST /students: Create a new student entry.

Handles 404 Not Found for unknown routes or unsupported HTTP methods.

Technologies Used
Node.js: The JavaScript runtime environment.

Built-in Node.js http module: For creating the HTTP server and handling requests/responses.

Built-in Node.js url module: For parsing incoming request URLs.

JSON: For data exchange between the client and server.
