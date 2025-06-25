import React, { useEffect, useState } from 'react';

const RicknMorty = () => {

    const api = "https://rickandmortyapi.com/api/character"
    const [characterCount, setCharacterCount] = useState(0)
    const [characters , setCharacter]=useState([])

    useEffect(() => {

        const fetchCharacters = async () => {
            try {
                const response = await fetch(api)
                const data = await response.json()
                console.log(data)

                setCharacterCount(data.info.count)
                setCharacter(data.results)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchCharacters()        
},[]);

console.log(characters)

return (
    
    <div >
    Total Characters {characterCount}
    
     <section  style={ {
        display : 'flex',
        flexWrap : 'wrap'
     }}>
        {
             characters.map(character => 
         <div key={character.id} style={{
            margin: "20px 0"
         }}>
         <img src={character.image} alt={character.name} />
         <h2>{character.name}</h2>
         <h3>{character.gender} <span style={{
            backgroundColor : character.status === 'Alive' ? 'green' : 'red',
            padding : "5px",
            borderRadius: "10px",
         }}>{character.status}</span> {character.species}</h3>
         </div>
         
        )
        }
       
     </section>

    </div>
        


)
}
  
export default RicknMorty;