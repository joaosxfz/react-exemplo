import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/rickAndMorty';

function Home() {
    //LOADING - existe quando requisita  algo para algo externo
    const [carregando, setCarregando] = useState(true);
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        function carregar() {
            const dados = getCharacters()
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
                    <div className='char-card'>
                        <img src={personagens[0].image} alt="" />
                        <h2></h2>

                        <div className='char-info'>
                            <span>Espécie: </span>
                            <span>Gênero: </span>
                            <span>Status: </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home