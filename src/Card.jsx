import './index.css'
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: props.nomeCor.hex }}>
      <h5 className="nome-cor">{props.nomeCor.nome}</h5>
      <h2 className="hex-cor">{props.nomeCor.hex}</h2>
    </div>
  )
}
