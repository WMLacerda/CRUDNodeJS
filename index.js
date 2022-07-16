const express = riquered('express');
const server = express();


server.use(express.json());

const livros = ['Harry Potter', 'Mitologia Nórdica', 'Pequeno Príncipe'];

//CRUD em NodeJS

// Retorna um livro
server.get('/livro/:index', (req, res) => {
    const { index } = req.params

    return res.json(livro[index]);
});
// Retornar todos os livros
server.get('/livros', (req, res) => {
    return res.json(livros)
});
// Criar um novo livro
server.post('/livors', (req, res) => {
    const { name } = req.body
    livros.push(name);
    return res.json(livros);
});

// atualizar um livro
server.put('/livros/index', (req, res) =>{
    const { index } = req.params;
    const { name } = req. body;

    Livros[index] = name;
    return res.json(livros);

});

// Deletar um livro
server.delete('/livros/:index', (req, res) =>{
    const { index } = req.params;

    livros.splice(index, 1);
    return res.json({ message: "O livro foi deletado"});
});






server.listen(3030);