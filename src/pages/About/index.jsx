import { Link } from 'react-router-dom'
import './style.css'

function About() {
    return (
        <>
        <p>OUTRA PÁGINA GULOSA</p>
        <Link to="/">
        <button> navega ai pai</button>
        </Link>
        </>
    )
}

export default About