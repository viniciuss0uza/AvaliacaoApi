import { useEffect, useState } from 'react'
import './styles.css'
// import Card from '../../components/Card'

// const mock = {
//             "id": "0XYvRd7oD",
//             "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
//             "breeds": [
//               {
//                 "weight": {
//                   "imperial": "7  -  10",
//                   "metric": "3 - 5"
//                 },
//                 "id": "abys",
//                 "name": "Abyssinian",
//                 "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
//                 "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
//                 "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
//                 "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
//                 "origin": "Egypt",
//                 "country_codes": "EG",
//                 "country_code": "EG",
//                 "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
//                 "life_span": "14 - 15",
//                 "indoor": 0,
//                 "lap": 1,
//                 "alt_names": "",
//                 "adaptability": 5,
//                 "affection_level": 5,
//                 "child_friendly": 3,
//                 "dog_friendly": 4,
//                 "energy_level": 5,
//                 "grooming": 1,
//                 "health_issues": 2,
//                 "intelligence": 5,
//                 "shedding_level": 2,
//                 "social_needs": 5,
//                 "stranger_friendly": 5,
//                 "vocalisation": 1,
//                 "experimental": 0,
//                 "hairless": 0,
//                 "natural": 1,
//                 "rare": 0,
//                 "rex": 0,
//                 "suppressed_tail": 0,
//                 "short_legs": 0,
//                 "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
//                 "hypoallergenic": 0,
//                 "reference_image_id": "0XYvRd7oD"
//               }
//             ],
//             "width": 1204,
//             "height": 1445 
// }

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
                <img src={consulta.url} alt="Oi" />
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