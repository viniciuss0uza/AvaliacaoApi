import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'


export default function ApiTheCat() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

    async function getCharacters() {
        // return fetch
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }
    

    const response = await fetch(
        <div className="card">
            <img className='imgem' src="https://api.thecatapi.com/v1/images/0XYvRd7oD"alt="Gato" />
            reqOptions
        </div>
    )

    if(!response.ok){
        throw new Error("Http Error")
    }

    const apiResponse = await response.json()

    return apiResponse
    }

    async function buildCards() {
        const consulta = await getCharacters()
        
        return (
            <>
                { consulta.name }
                <img src={consulta.url} alt="" />
            </>
        )
    }

    useEffect(() => {
        async function getConteudo() {
            setConteudo(await buildCards())
        }

        getConteudo()
    }, [])

    return (
        
        <div className='card'>
            { conteudo }
        </div>
    )   
}