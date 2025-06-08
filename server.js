//Running dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");

//Starting ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
app.use("/images", express.static(path.join(__dirname, "views/images")));
app.use(express.urlencoded({ extended: true }));
const session = require("express-session");

app.use(
  session({
    secret: "b7f2e6a1-4c3d-4e8b-9a2e-8f7c1d2a5b6e", // troque por uma chave segura
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // true apenas se usar HTTPS
  })
);

//Connecting with database and getting routes
db.connect()
  .then(() => {
    console.log("[server] 🌐 Connected with PostgreSQL database!");

    //Starting Back-End
    app.use(express.json());

    //Starting Front-End
    app.use(express.static("views"));

    //View routes
    const frontendRoutes = require("./routes/frontRoutes");
    app.use("/", frontendRoutes);

    //Defining an API route pattern
    const apiRoute = "/api/v1";

    //User Table Routes
    const userRoutes = require("./routes/userRoutes");
    app.use(`${apiRoute}/users`, userRoutes);

    //Task Table Routes
    const taskRoutes = require("./routes/taskRoutes");
    app.use(`${apiRoute}/tasks`, taskRoutes);

    // Middleware para lidar com erros de rota não encontrada
    app.use((req, res, next) => {
      res.status(404).send("Página não encontrada");
    });

    // Middleware para lidar com erros internos do servidor
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("Erro no servidor");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
