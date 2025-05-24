// routes/index.js
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

// Rotas para o CRUD de tarefas
router.post("/task", TaskController.criarTask);
router.get("/task", TaskController.listarTask);
router.get("/task/:id", TaskController.obterTask);
router.put("/task/:id", TaskController.atualizarTask);
router.delete("/task/:id", TaskController.deletarTask);

module.exports = router;
