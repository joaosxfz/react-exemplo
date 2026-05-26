import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/rickAndMorty';
import Card from '../../components/Card';

function Home() {
    //LOADING - existe quando requisita  algo para algo externo
    const [carregando, setCarregando] = useState(true);
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        async function carregar() {
            const dados = await getCharacters()
            setPersonagens(dados)
            setCarregando(false)
        }

        // variavel = [ ] espaço da mem
        // array = [  |  |  ]
        // = 0 | 1 | 2

        carregar()
    }, [])

    if (carregando) {
        return (
            <> CARREGANDO ... </>
        )

    }

    return (
        <>
            <h1>Home</h1>
            <div className='home page'>
                <h2 className='titulo-lista'>Personagens - Rick and Morty</h2>

                <div className='lista-personagens'>
                    {personagens.map((personagem) => (
                    <Card personagem={personagem} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home