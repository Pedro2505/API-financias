import { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function App() {
  const [precoAtual, setPrecoAtual] = useState(null)
  const [dadosGrafico, setDadosGrafico] = useState([])
  const [erro, setErro] = useState('')

  const buscarDados = async () => {
    try {
      setErro('') 
      const resposta = await axios.get('http://127.0.0.1:8000/ativos/mxrf11')
      
      const dadosOrdenados = resposta.data.reverse()

      const dadosFormatados = dadosOrdenados.map(item => ({
        data: item.Date.substring(0, 10),
        preco: item.Close
      }))

      setDadosGrafico(dadosFormatados)
      setPrecoAtual(dadosFormatados[dadosFormatados.length - 1].preco)

    } catch (err) {
      setErro("Erro ao buscar os dados! Verifique se a sua API em Python está rodando no terminal.")
      console.error(err)
    }
  }

  return (
    <div className="container mt-5">
      {/* Cabeçalho */}
      <div className="row text-center mb-4">
        <div className="col">
          <h1 className="text-primary">Dashboard Financeiro</h1>
          <p className="text-muted">React (Front-end) consumindo FastAPI (Back-end)</p>
        </div>
      </div>

      {/* Botão de Busca e Card de Resumo */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 text-center">
          <button className="btn btn-success mb-3 w-100" onClick={buscarDados}>
            Buscar Últimos Dados (MXRF11)
          </button>
          
          {/* Caixa de erro vermelha se a API estiver desligada */}
          {erro && <div className="alert alert-danger">{erro}</div>}

          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Último Fechamento</h5>
              <h2 className="text-success">
                {precoAtual ? `R$ ${precoAtual.toFixed(2)}` : 'R$ --,--'}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico Interativo */}
      {dadosGrafico.length > 0 && (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm">
              <div className="card-body" style={{ height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dadosGrafico}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="data" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip formatter={(value) => `R$ ${value.toFixed(2)}`} />
                    <Line type="monotone" dataKey="preco" stroke="#198754" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App