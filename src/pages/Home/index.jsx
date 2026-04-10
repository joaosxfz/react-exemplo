import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <>
        <h2>Bem vindo ao puteiro</h2>
        <Link to="/about" >
        <button> navega ai pai</button>
        </Link>
        </>
    )
}

export default Home