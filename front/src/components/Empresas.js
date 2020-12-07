import React from "react"
import { gql, useQuery } from "@apollo/client"
import { Table, Space  } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { SearchOutlined } from '@ant-design/icons';

export const GET_EMPRESAS = gql`
  {
    empresas {
      id
      nome
      Nome_Fantasia
      CNPJ
      benef_escolhidos
      funcionarios{
        nome nomeEmpresa sobrenome  cpf email
      }
    }
  }
`

const EmpresasLista = () => {
  let i = 0
  const emps = []
  
  const { loading, error, data } = useQuery(GET_EMPRESAS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  
    data.empresas.map(empresa => {
      
      empresa = {...empresa, count: i}
      emps.push(empresa);
      i++
      
    })
    const colums = [
      {
        title: 'Nome',
        dataIndex: 'nome',
        key: 'nome'
      },
      {
        title: 'Sobrenome',
        dataIndex: 'Nome_Fantasia',
        key: 'Nome_Fantasia'
      },
      {
        title: 'CNPJ',
        dataIndex: 'CNPJ',
        key: 'CNPJ'
      },
      {
        title: 'Beneficio Escolhido',
        dataIndex: 'benef_escolhidos',
        key: 'benef_escolhidos'
      },
      {
        title: 'Funcionários',
        dataIndex: 'count',
        key: 'count',
        render: emps => (
        <div className="icons-list">
          <Space size="middle">
              <Link to={"/empresa/funcionarios/"+emps}>
                  <SearchOutlined/>
               </Link> 
          </Space> 
          </div>
        )
      }
    ]


  return ( 

    <div>
      <h1>Empresas</h1>
      <p>
        <Link to="/funcionarios">
            <button>Funcionarios</button>
        </Link>
        </p>
      <Table dataSource={emps} columns={colums} />;
    </div>
  )
}

  
   


export default EmpresasLista