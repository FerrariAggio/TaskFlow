const db = require("../config/db");

class User {
  static async getAllUser() {
    const result = await db.query("SELECT * FROM appuser");
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query("SELECT * FROM appuser WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async createUser(data) {
    const result = await db.query(
      "INSERT INTO appuser VALUES (default, $1, $2, $3, $4) RETURNING *",
      [data.name, data.surname, data.email, data.password]
    );
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const result = await db.query(
      "UPDATE appuser SET name = $1, surname = $2, email = $3, password = $4 WHERE id = $3 RETURNING *",
      [data.name, data.email, id]
    );
    return result.rows[0];
  }

  static async deleteUserById(id) {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = User;
