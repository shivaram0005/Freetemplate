import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='container'>
            <div className='firstchild'>
                <ul>
                    <li><a href="">STARTBOOTSTRAP</a></li>
                </ul>
            </div>
            <div className='secondchild'>
                <ul>
                    <li><a href="">PORTFOLIO</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>

            </div>

        </div>
    </>
  )
}

export default Navbar