const { books } = require("../bd");
let { idIncrement } = require("../bd");
const listLibrary = (req, res) => {
  const { id } = req.params;
  const findbook = books.find((book) => book.id == id);

  if (!id) {
    return res.status(200).send(books);
  }

  if (isNaN(id) || id < 0) {
    return res.json({
      mensagem: "O valor do parâmetro ID da URL não é válido.",
    });
  }

  if (!findbook) {
    return res.json({
      mensagem: "Não existe livro para o ID informado.",
    });
  }

  if (findbook) {
    return res.status(200).send(findbook);
  }
};

const addBook = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  const livro = {
    id: idIncrement++,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  books.push(livro);

  res.send(livro);
};

module.exports = {
  listLibrary,
  addBook,
};
