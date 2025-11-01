import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Rotas
app.get("/", (req, res) => {
  res.sendFile(path.resolve("views/login.html"));
});

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;

  // Simulação de login
  if (usuario === process.env.USER && senha === process.env.PASS) {
    res.sendFile(path.resolve("views/dashboard.html"));
  } else {
    res.send("<h2>Login inválido. <a href='/'>Tente novamente</a></h2>");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
