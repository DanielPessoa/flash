import React, { Component } from "react"
import { gql, useQuery } from "@apollo/client"
import { Table  } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"



class FuncionarioLista extends Component{ 

  state = {
    funcionario: []
  }

  ChamaQuery(){
    
    const GET_FUNCIONARIOS = gql`
    {
      empresas {
        funcionarios{
          nome nomeEmpresa sobrenome  cpf email
        }
      }
    }`
    
    return GET_FUNCIONARIOS
  }

  componentDidMount(){
    
    const query = this.ChamaQuery();
    
    const indexEmpresa = window.location.search.substring(1).
    console.log(indexEmpresa)  
    
    
    const { loading, error, data } = useQuery(query)
      
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    
    data.map(func => {
      if(func.indexOf() == indexEmpresa){
        this.setState( { funcionario: func });
      }
    })  
    
    
    }

render(){

  const {funcionario} = this.state;

  const colums = [
    {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome'
    },
    {
        title: 'Sobrenome',
        dataIndex: 'sobrenome',
        key: 'sobrenome'
    },
    {
        title: 'Empresa',
        dataIndex: 'nomeEmpresa',
        key: 'nomeEmpresa'
    },
    {
        title: 'cpf',
        dataIndex: 'cpf',
        key: 'cpf'
    },
    {
        title: 'e-mail',
        dataIndex: 'email',
        key: 'email'
    }
]
  
return ( 
  <div>
    <h1>Funcionarios por Empresas</h1>
    <p>
      <Link to="/">
          <button>Empresas</button>
      </Link>
      </p>
    <Table dataSource={funcionario} columns={colums} />;
  </div>
)

}
}
export default FuncionarioLista             
   
    
      
 



  
   


