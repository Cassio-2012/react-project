import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'

class Cadastro extends React.Component {

    state = {
        nome : '',
        email : '',
        senha : '',
        senha_repeat : ''
    }

    cadastro = () => {
        console.log(this.state)
    }

    render() {
        return(
            <div className="container">
            <Card title="Cadastro">
                <div className="row">
                    <div className="col-lg-12">
                       <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" id="inputNome"
                                name="nome" className="form-control"
                                onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="text" id="inputEmail"
                                name="email" className="form-control"
                                onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" id="inputSenha"
                                name="senha" className="form-control"
                                onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Repita a senha: *" htmlFor="senhaRepeat">
                                <input type="password" id="senhaRepeat"
                                name="senharp" className="form-control"
                                onChange={e => this.setState({senha_repeat: e.target.value})}/>
                            </FormGroup>
                            <button type="button" onClick={this.cadastro} className="btn btn-success">Enviar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                   </div>
                   </div>
                </div>
            </Card>
        </div>
        )
    }

}

export default Cadastro