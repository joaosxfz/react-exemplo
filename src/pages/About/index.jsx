import { Link } from 'react-router-dom'
import './style.css'

function About() {
    return (
        <>
            <section>
                <p>OUTRA PÁGINA GULOSA</p>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </section>
        </>
    )
}

export default About