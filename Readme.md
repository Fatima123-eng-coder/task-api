# Task API

A simple RESTful CRUD API built using Node.js and Express.js.

## Features

- Get all tasks
- Get task by ID
- Create a new task
- Update an existing task
- Delete a task
- Swagger API Documentation
- JSON Responses
- Proper HTTP Status Codes

---

## Technologies Used

- Node.js
- Express.js
- Swagger UI Express

---

## Installation

Clone the repository

```bash
git clone <repository-link>
```

Install dependencies

```bash
npm install
```

Run the server

```bash
npm start
```

or

```bash
node index.js
```

---

## Base URL

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | / | Home |
| GET | /health | Health Check |
| GET | /tasks | Get All Tasks |
| GET | /tasks/:id | Get Task by ID |
| POST | /tasks | Create Task |
| PUT | /tasks/:id | Update Task |
| DELETE | /tasks/:id | Delete Task |

---

## Swagger Documentation

Open

```
http://localhost:3000/docs
```

---

## Example Request

POST /tasks

```json
{
    "title":"Learn Express"
}
```

Example Response

```json
{
    "id":3,
    "title":"Learn Express",
    "done":false
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
|200|Success|
|201|Created|
|204|Deleted Successfully|
|400|Bad Request|
|404|Not Found|

---

## Author

Fatima Saleem

BS Software Engineering

COMSATS University Islamabad Lahore Campus