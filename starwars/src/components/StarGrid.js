import React, { useState, useEffect} from 'react'
import axios from 'axios'
import StarCard from './StarCard'

export default function StarGrid() {
  const [starChar, setStarChar] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(response => {
            console.log(response.data)
            setStarChar(response.data.results)
        })
        .catch(error => {
            console.log('bruh come on', error)
        })
    },[])


    return (
    <div>
        <p> Hi </p>

        {starChar.map((item, index) => {
            return (
                <StarCard key={index} name={item.name} height={item.height} mass={item.mass} birthYear={item.birth_year} />
            )
        })}

    </div>
    
    )

}