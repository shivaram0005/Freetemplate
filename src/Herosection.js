import React from 'react'
import './herosection.css'
import logo from './assets/avataaars.jpg'


const Herosection = () => {
  return (
    <>
        <div className='herosection'>
            <img src={logo} alt="" />
            <h1>START BOOTSTRAP</h1>
            <div className='containerr'>
                <i class="fa-solid fa-horizontal-rule "></i>
                <i class="fa-solid fa-star fa-2x"></i>
                <i class="fa-solid fa-horizontal-rule fa-2x"></i>
            </div>
            <h2>Graphic Artist - Web Designer - Illustrator</h2>
        </div>
    </>
  )
}

export default Herosection