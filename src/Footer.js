import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div>
                <h2>LOCATION</h2>
                <h2>2215 John Daniel Drive <br />
                 Clark, MO 65243</h2>
            </div>
            <div className='content_two'>
                <h1>AROUND THE WEB</h1>
                <div className='icons'>
                    <i class="fa-brands fa-facebook fa-2x"></i>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                    <i class="fa-brands fa-twitter fa-2x"></i>
                    <i class="fa-brands fa-edge fa-2x"></i>

                </div>

            </div>
            <div>
                <h2>ABOUT FREELANCER</h2>
                <h3>Freelance is a free to use, MIT licensed <br /> Bootstrap theme created by Start <br /> Bootstrap .</h3>
            </div>
        </div>
    </>
  )
}

export default Footer