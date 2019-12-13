import React from 'react'

const StarCard = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Birth Year: {props.birthYear}</p>

        </div>
    )
};

export default StarCard



// height={item.height} mass={item.mass} birthYear={birth_year}
