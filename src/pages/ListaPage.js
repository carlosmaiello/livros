import React from 'react';
import Livro from '../components/Livros';
import { getLivros, login } from '../dados';
import InfoLivroPage from "./InfoLivroPage";


class ListaPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            livros: [],
            livroSelecionado: null,
            token: null
        }
    }

    componentDidMount() {
        login("carlosmaiello@gmail.com", "123").then(res => {
            this.setState({
                token: res.token
            });

            getLivros(res.token).then(livros => {
                this.setState({
                    livros
                })
            });
        })
    }

    listaLivros () {
        return this.state.livros.map(livro => (
            <li className="col-3">
                <Livro dados={livro} click={() => this.setState({
                    livroSelecionado: livro
                })} />
            </li>
        ));
    }

    render() {
        if (!this.state.token) return "Aguarde ...";

        return (
            <div className="ListaPage">
                {this.state.livroSelecionado != null &&
                    (
                    <InfoLivroPage livro={this.state.livroSelecionado} fechar={() => this.setState({
                        livroSelecionado: null
                    })} />
                    )
                }
                <h1>Lista de Livros</h1>
                <ul className="list-unstyled row">{this.listaLivros()}</ul>
            </div>
        )
    }



}

export default ListaPage;