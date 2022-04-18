
function Livro(props) {
    return (
        <div className="Livro" onClick={props.click}>
            <img src={props.dados.capa} alt={props.dados.nome} className="img-fluid" />
            <h3>{props.dados.nome}</h3>
            <h4>{props.dados.autor}</h4>
            <div className="row">
                <div className="col">{props.dados.genero}</div>
                <div className="col">{props.dados.ano}</div>
            </div>
        </div>
    )
}

export default Livro;