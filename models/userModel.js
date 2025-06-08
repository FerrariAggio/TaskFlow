const db = require("../config/db");

class User {
  //Fuction to get users list from database
  static async getAllUser() {
    const result = await db.query("SELECT * FROM appuser");
    return result.rows;
  }

  //Fuction to get user by it's id from database
  static async getUserByLogin(id) {
    const result = await db.query("SELECT * FROM appuser WHERE id = $1", [id]);
    return result.rows[0];
  }

  //Fuction to create new user in database
  static async createUser(data) {
    const result = await db.query(
      "INSERT INTO appuser (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.name, data.surname, data.email, data.password]
    );
    return result.rows[0];
  }

  //Fuction to update an existing user in database
  static async updateUser(id, data) {
    const result = await db.query(
      "UPDATE app_user SET name_app_user = $1, surname_app_user = $2, email_app_user = $3, password_app_user = $4, admin_app_user = $5 WHERE id_app_user = $6 RETURNING *",
      [
        data.name_app_user,
        data.surname_app_user,
        data.email_app_user,
        data.password_app_user,
        data.admin_app_user,
        id,
      ]
    );
    return result.rows[0];
  }

  //Fuction to remove user by it's id from database
  static async deleteUserById(id) {
    const result = await db.query(
      "DELETE FROM app_user WHERE id_app_user = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }

  // Função para verificar credenciais de login
  static async verifyCredentials(input_email, input_password) {
    const result = await db.query("SELECT * FROM appuser WHERE email = $1", [
      input_email,
    ]);
    return result.rows[0]; // Retorna o usuário se as credenciais estiverem corretas
  }

  static async findByEmail(email) {
    const result = await db.query("SELECT * FROM appuser WHERE email = $1", [
      email,
    ]);
    return result.rows[0]; // Retorna o usuário se as credenciais estiverem corretas
  }
}

module.exports = User;
