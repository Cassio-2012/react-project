import React from 'react'
import Card from '../components/card.js'
import Formgroup from '../components/form-group'

class Login extends React.Component {

    state = {

        email : '',
        senha : ''
        
    }


    logar = () => {
        console.log('Email: ' , this.state.email)
        console.log('Senha' , this.state.senha)
    }

    render() {
        return (
        <div className="container">
            <div className="row">

                <div className="col-md-6" style={{position : 'relative', left: '300px'}}>
                        <div className="bs-docs-section"> 

                            <Card title="Login">

                                <div className="row">

                                    <div className="col-lg-12">
                                        
                                        <div className="bs-component">

                                            <fieldset>

                                            <Formgroup htmlFor="imputEmail" label="Email : *">

                                                <input type="email" value={this.state.email}
                                                 onChange={e => this.setState({email: e.target.value})} className="form-control" htmlFor="imputEmail"
                                                 aria-describedby="emailHelp" placeholder="Digite o Email"/>

                                             </Formgroup>

                                             <Formgroup label="Senha : *" htmlFor="imputPassword">

                                               <input type="password" value={this.state.senha}
                                               onChange={e => this.setState({senha: e.target.value})} className="form-control" htmlFor="imputPassword"
                                                placeholder="Password"/>

                                            </Formgroup> 
                                            <button onClick={this.logar} className="btn btn-success">Entrar</button>
                                            <button className="btn btn-danger">Cadastrar</button>
                                            </fieldset>

                                        </div>

                                    </div>

                                </div>

                            </Card>

                        </div>
                </div>

            </div>

        </div>
        )
    };
        



}

export default Login
