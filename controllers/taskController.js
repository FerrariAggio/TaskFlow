const TaskModel = require("../models/taskModel");

const TaskController = {
  async listarTask(req, res) {
    try {
      const task = await TaskModel.getAllTask();
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao listar tarefas" });
    }
  },

  async obterTask(req, res) {
    try {
      const { id } = req.params;
      const task = await TaskModel.getTaskById(id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrado" });
      }
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter a tarefa" });
    }
  },

  async criarTask(req, res) {
    try {
      const novaTask = await TaskModel.createTask(req.body);
      return res.status(201).json(novaTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar a tarefa" });
    }
  },

  async atualizarTask(req, res) {
    try {
      const novaTask = await TaskModel.updateTask(req.body);
      return res.status(201).json(novaTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar a tarefa" });
    }
  },

  async deletarTask(req, res) {
    try {
      const { id } = req.params;
      const task = await TaskModel.deleteTaskById(id);
      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrado" });
      }
      return res.status(200).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar a tarefa" });
    }
  },
};

module.exports = TaskController;
