import React from 'react'
import './photos.css'

const Photos = ({src,srcc,srccc}) => {
  return (
    <>
        
        <div className='images'>
            <img src={src} alt="" className='animate__animated animate__pulse' />
            <img src={srcc} alt=""/>
            <img src={srccc} alt=""/>
        </div>
    </>
  )
}

export default Photos