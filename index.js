const express = require("express");
const app = express();

//Estou dizendo pra o Express utilizar o EJS como engine
app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
  res.render('index.ejs', {
    nome,
    lang,
    empresa: "teste"
  })
});

app.listen(8080, () => {
  console.log("APP RODANDO");
});
