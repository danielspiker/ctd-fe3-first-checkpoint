import './index.css'
import { useState } from 'react'
import { Card } from './Card'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  const [nome, setNome] = useState('')
  const [hex, setHex] = useState('')
  const [erro, setErro] = useState(false)

  const [cores, setCores] = useState([])

  function adicionaCor(e) {
    e.preventDefault()
    if (nome.length < 3 || nome[0] == ' ') {
      setErro(true)
      return
    }
    setErro(false)
    const novaCor = {
      nome,
      hex
    }
    setCores([...cores, novaCor])
    setNome('')
  }

  return (
    <div className="App">
      <form onSubmit={adicionaCor} className={erro ? 'erro' : 'form-add-cor'}>
        <h2 className="form-title">ADICIONAR NOVA COR</h2>
        <div className="inputs">
          <div className="input-nome">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              onChange={event => setNome(event.target.value)}
              type="text"
              value={nome}
            />
          </div>

          <div className="input-cor">
            <label htmlFor="cor">Cor</label>
            <input
              id="cor"
              type="color"
              value={hex}
              onChange={event => setHex(event.target.value)}
            />
          </div>
        </div>
        <div className="posicao-botao">
          <button className="botao">ADICIONAR</button>
        </div>
      </form>
      {erro ? (
        <small>Por favor, verifique os dados inseridos no formulário</small>
      ) : null}

      <section className="container-cores">
        <h2>CORES FAVORITAS</h2>
        <div className="cards">
          {cores.map((cor, index) => {
            return <Card key={index} nomeCor={cor} />
          })}
        </div>
      </section>
    </div>
  )
}

export default App
