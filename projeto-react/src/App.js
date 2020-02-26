import React from 'react';

import Login from './views/login'
import Cadastro from './views/cadastro'

import 'bootswatch/dist/pulse/bootstrap.css'
import './views/custom.css'

class App extends React.Component {


  render(){
    return (

      <div className="App">
 
          <Cadastro />
      </div>

    );
  }
}

export default App;
