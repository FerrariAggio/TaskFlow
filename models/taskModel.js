const db = require("../config/db");

class TaskModel {
  async getAllTask() {
    const result = await db.query("SELECT * FROM task");
    return result.rows;
  }

  async getTaskById(id) {
    const result = await db.query("SELECT * FROM task WHERE id = $1", [id]);
    return result.rows[0];
  }

  async createTask({ data, user_id }) {
    const result = await db.query(
      "INSERT INTO task VALUES (default, $1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        data.title,
        data.description,
        user_id,
        data.status,
        data.priority,
        data.category,
        data.date,
      ]
    );
    return result.rows[0];
  }

  async updateTask({ data, task_id }) {
    const result = await db.query(
      "UPDATE task SET title = $1, description = $2, status_id = $3, priority_id = $4, category_id = $5, conclusion_date = $7  updated_at = CURRENT_TIMESTAMP WHERE id = $8",
      [
        data.title,
        data.description,
        data.status,
        data.priority,
        data.category,
        data.date,
        task_id,
      ]
    );
    return result.rows;
  }

  async deleteTaskById(id) {
    const result = await db.query("DELETE FROM task WHERE id = $1", [id]);
    return result.rows[0];
  }
}

module.exports = TaskModel;
