import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleSenha = this.handleSenha.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    handleSenha(event) {
        this.setState({
            senha: event.target.value
        })
    }

    submitForm (event) {
        event.preventDefault();
        console.log(this.state);
        alert(JSON.stringify(this.state));
    }

    render () {
        return (
            <form onSubmit={this.submitForm}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.handleEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="senha" value={this.state.senha} onChange={this.handleSenha} />
                </div>
                <div className="mb-3">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        );
    }
}

export default LoginPage;
