import './index.css'
import { useState } from 'react'
import { Card } from './Card'

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  const [nome, setNome] = useState('')
  const [cor, setCor] = useState('')

  const [cores, setCores] = useState([{ nome: 'azul' }])

  function adicionaCor(e) {
    e.preventDefault()
    const novaCor = {
      nome: nome
    }
    setCores([...cores, novaCor])
    setNome('')
  }

  return (
    <div className="App">
      <h1>Checkpoint 01 - Front-end 3 - Daniel Nascimento</h1>
      <form onSubmit={adicionaCor} className="form-add-cor">
        <h2>ADICIONAR NOVA COR</h2>
        <div className="inputs">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              onChange={event => setNome(event.target.value)}
              type="text"
              value={nome}
            />
          </div>

          <div>
            <label htmlFor="cor">Cor</label>
            <input id="cor" type="color" />
          </div>
        </div>
        <button>ADICIONAR</button>
      </form>

      <section>
        <h2>CORES FAVORITAS</h2>
        {cores.map((cor, index) => {
          return <Card key={index} nomeCor={cor} />
        })}
      </section>
    </div>
  )
}

export default App
