import React from 'react'
import './Kinalo.css'

function Kinalo(props) {
    return (
        <div className='kin_elem'>
            <img src={props.kep} alt="" />
            <h3>{props.cim}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Kinalo