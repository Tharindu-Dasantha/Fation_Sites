import React from 'react'

// importing sections
import Home from './Sections/Home/Home'
import Services from './Sections/Services/Services'
import About from './Sections/About/About'
import Products from './Sections/Products/Product'
import Reviews from './Sections/Reviews/Reviews'
import Contact from './Sections/Contact/Contact'

function App() {
  return (
    <>
      <Home />
      <Services />
      <About />
      <Products />
      <Reviews />
      <Contact />
    </>
  )
}

export default App