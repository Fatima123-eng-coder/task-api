const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory database
let tasks = [
    {
        id: 1,
        title: "Study Backend",
        done: false
    },
    {
        id: 2,
        title: "Exercise",
        done: true
    }
];


// -------------------------
// HOME ROUTE
// -------------------------
app.get("/", (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: [
            "GET /health",
            "GET /tasks",
            "GET /tasks/:id",
            "POST /tasks",
            "PUT /tasks/:id",
            "DELETE /tasks/:id"
        ]
    });
});


// -------------------------
// HEALTH ROUTE
// -------------------------
app.get("/health", (req, res) => {

    res.json({
        status: "OK"
    });

});


// -------------------------
// GET ALL TASKS
// -------------------------
app.get("/tasks", (req, res) => {

    res.status(200).json(tasks);

});


// -------------------------
// GET TASK BY ID
// -------------------------
app.get("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {

        return res.status(404).json({
            message: "Task not found"
        });

    }

    res.json(task);

});


// -------------------------
// CREATE TASK
// -------------------------
app.post("/tasks", (req, res) => {

    const { title } = req.body;
if (!title || title.trim() === "") {
    return res.status(400).json({
        message: "Title is required"
    });

}


    const newTask = {

        id: tasks.length + 1,

        title,

        done: false

    };

    tasks.push(newTask);

    res.status(201).json(newTask);

});


// -------------------------
// UPDATE TASK
// -------------------------
app.put("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {

        return res.status(404).json({

            message: "Task not found"

        });

    }

    const { title, done } = req.body;

    if (title !== undefined) {

        task.title = title;

    }

    if (done !== undefined) {

        task.done = done;

    }
    if (title !== undefined && title.trim() === "") {
    return res.status(400).json({
        message: "Title cannot be empty"
    });
}

    res.json(task);

});


// -------------------------
// DELETE TASK
// -------------------------
app.delete("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {

        return res.status(404).json({

            message: "Task not found"

        });

    }

    tasks = tasks.filter(t => t.id !== id);

res.status(204).send();

});


app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// -------------------------
// START SERVER
// -------------------------
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});