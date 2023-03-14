import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
        <div className='about'>
            <h1>ABOUT</h1>
            <i class="fa-solid fa-star fa-2x"></i>
            <div className='content'>
                <div className='leftcontent'>
                    <h2>Freelancer is a free bootstrap theme created by
                         Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h2>
                </div>
                <div className='rightcontent'>
                    <h2>
                    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                    </h2>
                </div>
            </div>
            <div className='button'>
                <button>Free Download!</button>
            </div>
        </div>
    </>
  )
}

export default About