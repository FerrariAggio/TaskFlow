const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.listarUser);
router.get("/:id", userController.obterUser);
router.post("/", userController.criarUser);
router.put("/:id", userController.atualizarUser);
router.delete("/:id", userController.deletarUser);

module.exports = router;
