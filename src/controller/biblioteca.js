const books = require("../bd");

const listLibrary = (req, res) => {
  const { id } = req.params;
  const findbook = books.find((book) => book.id == id);

  if (isNaN(id)) {
    res.json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }

  if (!findbook) {
    res.json({
      mensagem: "Não existe livro para o ID informado.",
    });
  }

  if (findbook) {
    return res.status(200).send(findbook);
  }

  return res.status(200).send(books);
};

module.exports = {
  listLibrary,
};
