import './index.css'
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div className="card">
      <h2>{props.nomeCor.nome}</h2>
    </div>
  )
}
