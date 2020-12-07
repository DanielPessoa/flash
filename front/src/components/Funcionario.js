import React from "react"
import { gql, useQuery } from "@apollo/client"
import { Table } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom"


export const GET_FUNCIONARIOS = gql`
  {
    funcionarios{
        id
        idEmpresa
        nome
        nomeEmpresa
        sobrenome
        email
    }
  }
  `

const FuncionarioLista = () => {
    const { loading, error, data } = useQuery(GET_FUNCIONARIOS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    
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
          <h1>Funcionarios</h1>
        <p>
            <Link to="/">
                <button>Empresas</button>
            </Link>
        </p>
        <Table dataSource={data.funcionarios} columns={colums} />;
      </div>
    )
  
  }
  
export default FuncionarioLista