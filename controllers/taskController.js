const TaskModel = require("../models/taskModel");
const TaskService = require("../services/taskServices");

const TaskController = {
  // Renderiza a lista de tarefas
  async renderTaskList(req, res) {
    const userId = req.session.user?.id;
    if (!userId) {
      return res.render("login");
    }
    try {
      const taskList = await TaskModel.getAllTasks(userId);
      res.status(200).json(taskList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async renderCreateForm(req, res) {
    try {
      const [statusList, priorityList, categoryList] = await Promise.all([
        TaskModel.getAllStatus(),
        TaskModel.getAllPriorities(),
        TaskModel.getAllCategories(),
      ]);
      return res.render("task-form", {
        task: null,
        statusList,
        priorityList,
        categoryList,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Erro ao carregar formulário de tarefa");
    }
  },

  async renderEditForm(req, res) {
    try {
      const task = await TaskModel.getTaskById(req.params.id);
      if (!task) return res.status(404).send("Tarefa não encontrada");
      const [statusList, priorityList, categoryList] = await Promise.all([
        TaskModel.getAllStatus(),
        TaskModel.getAllPriorities(),
        TaskModel.getAllCategories(),
      ]);
      return res.render("edit-task", {
        task,
        statusList,
        priorityList,
        categoryList,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Erro ao carregar tarefa");
    }
  },

  // Atualiza uma tarefa existente
  async updateTask(req, res) {
    try {
      await TaskModel.updateTask(req.params.id, req.body);
      return res.render("task-list");
    } catch (error) {
      console.error(error);
      // Recarrega o formulário com erro e dados preenchidos
      const task = { ...req.body, id: req.params.id };
      const [statusList, priorityList, categoryList] = await Promise.all([
        TaskModel.getAllStatus(),
        TaskModel.getAllPriorities(),
        TaskModel.getAllCategories(),
      ]);
      return res.render("edit-task", {
        task,
        statusList,
        priorityList,
        categoryList,
        error: "Erro ao atualizar tarefa",
      });
    }
  },

  // Cria uma nova tarefa
  async createTask(req, res) {
    try {
      const {
        title,
        description,
        status_id,
        priority_id,
        category_id,
        conclusion_date,
      } = req.body;
      const user_id = req.session.user?.id;
      const data = {
        title,
        description,
        status_id,
        priority_id,
        category_id,
        conclusion_date,
        user_id,
      };

      // Validação usando o service
      if (!TaskService.validateTaskData(data)) {
        // Busca as listas novamente para o form
        const [statusList, priorityList, categoryList] = await Promise.all([
          TaskModel.getAllStatus(),
          TaskModel.getAllPriorities(),
          TaskModel.getAllCategories(),
        ]);
        return res.render("task-form", {
          error: "Todos os campos são obrigatórios",
          task: null,
          statusList,
          priorityList,
          categoryList,
        });
      }

      await TaskModel.createTask(data);
      return res.redirect("/home");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Erro ao criar tarefa");
    }
  },

  // Deleta uma tarefa
  async deleteTask(req, res) {
    try {
      await TaskModel.deleteTaskById(req.params.id);
      return res.render("task-list");
    } catch (error) {
      console.error(error);
      return res.status(500).send("Erro ao deletar tarefa");
    }
  },
};

module.exports = TaskController;
