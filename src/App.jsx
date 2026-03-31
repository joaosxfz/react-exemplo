import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Exemplo de React</h1>
      </header>


      <section>
        <h2 id='exemplo-h2'>Seção de Listas</h2>

        <h3>Lista não Ordenada</h3>
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

      <footer id='footer'>
        <p>Minha primeira API React - &copy;
          Todos os direitos reservados a Rogêrio</p>

      </footer>
    </>
  )
}

export default App

