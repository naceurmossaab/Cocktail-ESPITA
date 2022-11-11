import React, { useEffect, useState } from 'react'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
// import components
import Navbar from './components/Navbar'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function App() {
  const [view, setView] = useState('home');

  return (
    <div>
      <Navbar {...{view, setView}} />
      {
        view === 'home' ? <Home /> :
          view === 'about' ? <About /> :
            <SingleCocktail />
      }
    </div>
  )
}

export default App
