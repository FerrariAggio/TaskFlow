const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => res.render("login")); // Rota para a página de login
router.get("/register", (req, res) => res.render("register")); // Rota para a página de registro
router.get("/home", (req, res) => res.render("task-list")); // Rota para a página de home

// Adicione outras rotas conforme necessário

module.exports = router;
