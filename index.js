const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Database

connection
.authenticate()
.then(() => {
  console.log("Banco de dados Autenticado com sucesso")
})
.catch((msgErro) => {
    console.log(msgErro)
});

//Estou dizendo pra o Express utilizar o EJS como engine
app.set("view engine", "ejs");
app.use(express.static("public"));
// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rotas 
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  res.send(`${titulo} ${descricao}`);
});
const port = 8080
app.listen(port, () => {
  console.log(`APP RODANDO http://localhost:${port}`);
});
