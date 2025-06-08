const userModel = require("../models/userModel");

const userService = {
  async isEmailRegistered(email) {
    const user = await userModel.findByEmail(email);
    return !!user;
  },

  async registerUser({ name, surname, email, password, confirmPassword }) {
    if (password !== confirmPassword) {
      throw new Error("As senhas não coincidem!");
    }
    const exists = await this.isEmailRegistered(email);
    if (exists) {
      throw new Error("E-mail já cadastrado!");
    }
    // Aqui você pode adicionar hash de senha se desejar
    return await userModel.createUser({ name, surname, email, password });
  },
};

module.exports = userService;
