// controllers/TarefaController.js
const pool = require("../config/database");

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const {
    name,
    description,
    user_id,
    status_id,
    priority_id,
    category_id,
    date,
  } = req.body;

  const query =
    "INSERT INTO task VALUES (default, $1, $2, $3, $4, $5, $6) RETURNING *";
  const values = [
    name,
    description,
    user_id,
    status_id,
    priority_id,
    category_id,
    date,
  ];

  try {
    const result = await pool.query(query, values);
    const tarefa = result.rows[0];
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = "SELECT * FROM task";

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { name, description, status_id } = req.body;

  const query = `
    UPDATE task SET name = $1, description = $2, status = $3, updated_at = CURRENT_TIMESTAMP
    WHERE id = $4 RETURNING *`;
  const values = [name, description, status_id, id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM task WHERE id = $1 RETURNING *";
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json({ message: "Tarefa excluída com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
