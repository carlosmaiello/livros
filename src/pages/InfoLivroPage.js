import Livro from "../components/Livros";

function InfoLivroPage(props) {
    return (
        <div className="InfoLivro">
            <header className="row">
                <h3 className="col">{props.livro.nome}</h3>
                <button className="col-1" onClick={props.fechar}>X</button>
            </header>
            <Livro dados={props.livro} />
        </div>
    )
}

export default InfoLivroPage;