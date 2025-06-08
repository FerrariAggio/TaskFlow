// routes/index.js
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

// Rotas para páginas
router.get("/", TaskController.renderTaskList);
router.get("/new", TaskController.renderCreateForm);
router.get("/:id/edit", TaskController.renderEditForm);

// Rotas para ações
router.post("/create", TaskController.createTask);
router.post("/:id/edit", TaskController.updateTask);
router.post("/:id/delete", TaskController.deleteTask);

module.exports = router;
