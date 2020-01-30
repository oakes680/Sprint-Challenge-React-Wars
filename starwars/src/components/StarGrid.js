import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StarCard from './StarCard'
import { Container, Entry, Button2 } from './Styles'
import { Button} from 'reactstrap';

export default function StarGrid() {
    const [starChar, setStarChar] = useState([])
    const [starApi, setStarApi] = useState(1)

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${starApi}`)
            .then(response => {
                console.log(response.data)
                setStarChar(response.data.results)
                //setStarApi(response.data.next)
            })
            .catch(error => {
                console.log('bruh come on', error)
            })
    }, [starApi])
    
   

   
    return (
        
        <Entry>
            
            <Button2 onClick={() => setStarApi(1)} color="primary">Back to Start</Button2>
            {starChar.map((item, index) => {
                return (
                    <Container>
                        <StarCard key={index} name={item.name} height={item.height} mass={item.mass} birthYear={item.birth_year} />
                    </Container>
                )
            })}
            <Button2 onClick={() => setStarApi(starApi + 1)} color="primary">Next</Button2>
        </Entry>


    )

}