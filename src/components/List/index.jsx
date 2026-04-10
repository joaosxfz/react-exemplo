import './style.css'

function List({
  title,
  subtitleSecondList = "Minha Lista de Compras"
}) {
  <section>
    <h2 id='exemplo-h2'>{title}</h2>

    <h3>{subtitleSecondList}</h3>
    <ul id='ul'>
      <li>batata</li>
      <li>sabor</li>
      <li>pão</li>
    </ul>

    <h3>Lista Ordenada</h3>
    <ol>
      <li>Scooby-Doo</li>
      <li>Pica-Pau</li>
      <li>Professor Renan</li>
    </ol>
  </section>
}

export default List