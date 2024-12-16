import React from 'react'
import './Hero.css'
import Img from './assets/phone2.jpg'

function Hero() {
    return (
        <div className='main-container'>
            <div className="left-side">
                <div className='left-side-container'>
                    <h3>Sevice We offer</h3>
                    <h1>Awesome Features</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae nesciunt iste voluptas similique! Ipsum maxime commodi soluta provident impedit, odit sunt praesentium quis doloribus perspiciatis nostrum rem aliquam molestiae.</p>
                    <button className='hero-button'>Seo Team</button>
                </div>

            </div>
            <div className="right-side">
                <img src={Img} alt="" className='phone' />
            </div>
        </div>
    )
}

export default Hero