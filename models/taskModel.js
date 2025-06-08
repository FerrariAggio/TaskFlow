const db = require("../config/db");

class TaskModel {
  static async getAllTasks(id) {
    const result = await db.query(
      `SELECT t.title AS title, t.id AS id, t.conclusion_date AS conclusionDate, s.name AS status, p.name AS priority, c.name AS category FROM task t JOIN status s ON t.status_id = s.id JOIN priority p ON t.priority_id = p.id JOIN category c ON t.category_id = c.id WHERE t.user_id = $1`,
      [id]
    );
    return result.rows;
  }

  static async getAllStatus() {
    const result = await db.query("SELECT * FROM status");
    return result.rows;
  }
  static async getAllPriorities() {
    const result = await db.query("SELECT * FROM priority");
    return result.rows;
  }
  static async getAllCategories() {
    const result = await db.query("SELECT * FROM category");
    return result.rows;
  }

  static async getTaskById(id) {
    const result = await db.query(
      `
      SELECT 
        t.*, 
        s.name AS status, 
        p.name AS priority, 
        c.name AS category
      FROM task t
      JOIN status s ON t.status_id = s.id
      JOIN priority p ON t.priority_id = p.id
      JOIN category c ON t.category_id = c.id
      WHERE t.id = $1
    `,
      [id]
    );
    return result.rows[0];
  }

  static async createTask(data) {
    const result = await db.query(
      `INSERT INTO task 
        (title, description, user_id, status_id, priority_id, category_id, conclusion_date) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        data.title,
        data.description,
        data.user_id,
        data.status_id,
        data.priority_id,
        data.category_id,
        data.conclusion_date,
      ]
    );
    return result.rows[0];
  }

  static async updateTask(id, data) {
    const result = await db.query(
      `UPDATE task SET 
        title = $1, 
        description = $2, 
        status_id = $3, 
        priority_id = $4, 
        category_id = $5, 
        conclusion_date = $6
      WHERE id = $7 RETURNING *`,
      [
        data.title,
        data.description,
        data.status_id,
        data.priority_id,
        data.category_id,
        data.conclusion_date,
        id,
      ]
    );
    return result.rows[0];
  }

  static async deleteTaskById(id) {
    const result = await db.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }
}

module.exports = TaskModel;
