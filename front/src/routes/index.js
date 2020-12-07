import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Empresas from "../components/Empresas"
import Funcionario from '../components/Funcionario'
import FuncPorEmpresa from '../components/FuncPorEmpresa'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Empresas} />
      <Route exact path="/funcionarios" component={Funcionario}/>
      <Route path="/empresa/funcionarios/:id" component={FuncPorEmpresa}/>
    </Switch>
  </Router>
)

export default Routes