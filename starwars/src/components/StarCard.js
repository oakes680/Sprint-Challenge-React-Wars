import React from 'react'
import {
    Card,  CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Container} from './Styles'

const StarCard = (props) => {
    return (

        <div>
            
            <Card className='mt-4'>
            <Container >
                <CardBody >
                    <CardTitle className='h2'>{props.name}</CardTitle>
                    <CardTitle>Height: {props.height}</CardTitle>
                    <CardSubtitle>Mass: {props.mass}</CardSubtitle>
                    <CardSubtitle>Birth Year: {props.birthYear}</CardSubtitle>
                </CardBody>
                </Container>
            </Card>
            
        </div>
    )
};

export default StarCard



// height={item.height} mass={item.mass} birthYear={birth_year}
