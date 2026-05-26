import './style.css'
import { Link } from 'react-router-dom'

function List({ title, subtitleSecondList = "Minha Lista de Compras" }) {
  return (
    <>
      <h2>Bem vindo ao puteiro</h2>
      <p>Navegação:</p>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about" >
        <button>About</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </>
  )
}

export default List