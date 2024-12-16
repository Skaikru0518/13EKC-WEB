import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='kartya'>
            <p>{props.kep}</p>
            <h3>{props.cim}</h3>
            <p>{props.text}</p>
        </div>

    )
}

export default Card