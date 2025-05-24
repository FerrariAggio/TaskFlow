const UserModel = require("../models/userModel");

const UserController = {
  async listarUser(req, res) {
    try {
      const user = await UserModel.getAllUser();
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao listar usuários" });
    }
  },

  async obterUser(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter o usuário" });
    }
  },

  async criarUser(req, res) {
    try {
      const novoUser = await UserModel.createUser(req.body);
      return res.status(201).json(novoUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar o usuário" });
    }
  },

  async atualizarUser(req, res) {
    try {
      const novoUser = await UserModel.updateUser(req.body);
      return res.status(201).json(novoUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar o usuário" });
    }
  },

  async deletarUser(req, res) {
    try {
      const { id } = req.params;
      const user = await TaskModel.deleteUserById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar o usuário" });
    }
  },
};

module.exports = UserController;
