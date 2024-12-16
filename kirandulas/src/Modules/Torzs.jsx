import React from 'react'
import './Torzs.css'
import Welcome from './Welcome.jsx'
import Kinalo from './Kinalo.jsx'

function Torzs() {
    const apis = [
        {
            kep: "https://dummyimage.com/650x400/",
            text: "Fedezze fel a Balaton-felvidék lenyűgöző tájait egy felejthetetlen kirándulás során! A dombokkal, szőlőültetvényekkel és festői falvakkal tűzdelt vidéken túrázva élvezheti a friss levegőt és a csodálatos panorámát.",
            cim: "Balaton Felvidék"
        },
        {
            kep: "https://dummyimage.com/650x400/",
            text: "Fedezze fel a Balaton-felvidék lenyűgöző tájait egy felejthetetlen kirándulás során! A dombokkal, szőlőültetvényekkel és festői falvakkal tűzdelt vidéken túrázva élvezheti a friss levegőt és a csodálatos panorámát.",
            cim: "Őszi Mátra"
        },
        {
            kep: "https://dummyimage.com/650x400/",
            text: "Fedezze fel a Balaton-felvidék lenyűgöző tájait egy felejthetetlen kirándulás során! A dombokkal, szőlőültetvényekkel és festői falvakkal tűzdelt vidéken túrázva élvezheti a friss levegőt és a csodálatos panorámát.",
            cim: "Balaton Felvidék"
        },
        {
            kep: "https://dummyimage.com/650x400/",
            text: "Fedezze fel a Balaton-felvidék lenyűgöző tájait egy felejthetetlen kirándulás során! A dombokkal, szőlőültetvényekkel és festői falvakkal tűzdelt vidéken túrázva élvezheti a friss levegőt és a csodálatos panorámát.",
            cim: "Balaton Felvidék"
        },
    ]
    return (
        <div id='torzs'>
            <Welcome />
            {/* <div className='kinalo-container'>
                {apis.map((index, key) => {
                    return (
                        <Kinalo key={key} kep={index.kep} cim={index.cim} text={index.text} />
                    )
                })}
            </div> */}
            {apis.map((index, key) => {
                return (
                    <Kinalo key={key} kep={index.kep} cim={index.cim} text={index.text} />
                )
            })}
        </div>
    )
}

export default Torzs