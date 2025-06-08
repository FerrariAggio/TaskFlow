const UserModel = require("../models/userModel");
const UserService = require("../services/userServices");

const UserController = {
  //Fuction to create new user using userModel
  async register(req, res) {
    try {
      await UserService.registerUser(req.body);
      return res.redirect("/");
    } catch (error) {
      return res.render("register", {
        error: error.message,
        ...req.body,
      });
    }
  },

  async checkEmail(req, res) {
    const { email } = req.query;
    const exists = await UserService.isEmailRegistered(email);
    res.json({ exists });
  },

  //Fuction to update an existing user using userModel
  async updateUser(req, res) {
    try {
      const updatedUser = await UserModel.updateUser(req.params.id, req.body);
      return res.status(201).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao editar o usuário!" });
    }
  },

  // Função para processar login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.verifyCredentials(email, password);
      if (!user) {
        return res.render("login", {
          error: "E-mail ou senha inválidos.",
          email: email,
        });
      }
      req.session.user = {
        id: user.id, // ou user.id_app_user, conforme seu banco
        name: user.name,
        email: user.email,
      };
      return res.redirect("/home"); // Redirecione para a página principal após login
    } catch (error) {
      console.error(error);
      return res.render("login", {
        error: "Erro ao tentar fazer login.",
        email: req.body.email,
      });
    }
  },
};

module.exports = UserController;
