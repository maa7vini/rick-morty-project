import './Summer.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Summer(){

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
              console.log(res.data.results[2])
              setCharacter(res.data.results[2])
            })
            .catch(err => {
              console.log('Ops, algo deu errado')
            })
      }, [])

    return (
        <div className='summerDiv'>
            <div className='divTop'>
                <img src={character.image}></img> 
            </div>

            <div className='divBottom'>
                <div className='divBottomTxt'>
                        <h2>Nome:</h2> 
                        <p>{character.name}</p> 
                    </div>

                    <div className='divBottomTxt'>
                        <h2>Specie:</h2> 
                        <p>{character.species}</p> 
                    </div>

                    <div className='divBottomTxt'>
                        <h2>Status:</h2> 
                        <p>{character.status}</p> 
                    </div>
                </div>
        </div>
    )
}

export default Summer