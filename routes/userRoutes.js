const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/login", userController.login); // Rota para verificar credenciais de login
router.post("/register", userController.register);
router.get("/check-email", userController.checkEmail);
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Erro ao encerrar sessão:", err);
      return res.status(500).send("Erro ao encerrar sessão");
    }
    res.clearCookie("connect.sid");
    res.redirect("/"); // ou "/" se preferir
  });
});

module.exports = router;
