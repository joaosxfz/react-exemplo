import { useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css';

function SignUp() {
    const [nome, setNome] = useState("nome")
    const [email, setEmail] = useState("email@gmail")
    const [senha, setSenha] = useState("senha")
    //variaveis, funções

    function handleSubmit(event) {
        event.preventDefault();
        console.log(nome, email, senha)
    }

    return (
        <>
            <Link to="/">
                <button> navega ai pai</button>
            </Link>
            <h2>Criar Conta</h2>
            <section>

                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                    />
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
            </section>
        </>
    )
}

export default SignUp