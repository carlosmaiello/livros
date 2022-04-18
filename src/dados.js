export const livrosDados = [
    {
        nome: "Guia do Mochileiro das Galáxias",
        autor: "Douglas Adams",
        genero: "Ficção",
        ano: "1980",
        sinopse: "Sinopse do livro",
        capa: "https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/90/90/21/20119166.jpg"
    },
    {
        nome: "O Senhor dos Anéis: Volume único",
        autor: "J R R Token",
        genero: "Ficção",
        ano: "1980",
        sinopse: "Sinopse do livro",
        capa: "https://images-na.ssl-images-amazon.com/images/I/71ZLavBjpRL.jpg"
    },
    {
        nome: "O nome do vento(A Crônica do Matador do Rei – Livro 1) ",
        autor: "Douglas Adams",
        genero: "Ficção",
        ano: "1980",
        sinopse: "Sinopse do livro",
        capa: "https://images-na.ssl-images-amazon.com/images/I/91Tb8yIdRML.jpg"
    }
];

const API = 'http://10.152.46.24:8000'

export const login = async (email, senha) => {
    const res = await fetch(`${API}/usuarios/login`, {
        method: "post",
        body: JSON.stringify({email, senha}),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(res);

    if (res.status < 400) {
        return await res.json();
    }
    else {
        let erro = await res.json();
        console.log(erro);
        throw new Error(erro.mensagem);
    }
    

}

export const getLivros = async (token) => {
    const res = await fetch(`${API}/livros`, {
        headers: {
            'Authorization': `JWT ${token}`
        }
    });
    return await res.json();
}

