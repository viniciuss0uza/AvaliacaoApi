import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

export default function ApiTheCat() {
    const [ conteudo, setConteudo ] = useState(<>Carregando...</>)

    async function getCharacters() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }
    
    const response = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD", 
        reqOptions
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
                {consulta.name}
                <img src={consulta.url} alt="Gato" />
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