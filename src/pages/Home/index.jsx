import { Link } from 'react-router-dom'
import './style.css'

function Home() {
    return (
        <>
            <h2>Bem vindo ao puteiro</h2>
            <section>
                <p>Navegação:</p>
                <Link to="/about" >
                    <button>About</button>
                </Link>
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
            </section>
        </>
    )
}

export default Home