import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import Photos from './Photos'
import Portfolio from './Portfolio'
import cabin from './assets/cabin.png'
import cake from './assets/cake.png'
import circus from './assets/circus.png'
import game from './assets/game.png'
import safe from './assets/safe.png'
import submarine from './assets/submarine.png'
import About from './About'



const App = () => {
  return (
    <>
       <Navbar/>
       <Herosection />
       <Portfolio/>
       <Photos src={cabin} srcc={cake} srccc={circus}/>
       <Photos src={game} srcc={safe} srccc={submarine}/>
       <About />
       
       
      
    </>
  )
}

export default App