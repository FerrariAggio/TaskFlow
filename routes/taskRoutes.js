// routes/index.js
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskController");

// Rotas para o CRUD de tarefas
router.post("/task", TaskController.criarTarefa);
router.get("/task", TaskController.listarTarefas);
router.put("/task/:id", TaskController.editarTarefa);
router.delete("/task/:id", TaskController.excluirTarefa);

module.exports = router;
