import './App.css'
import CarLogo from './Components/CarLogo.jsx'
import Chauffeurs from './Components/Chaffeurs.jsx'
import ClassApart from './Components/ClassApart.jsx'
import FleetShowcase from './Components/FleetShowcase.jsx'
import Footer from './Components/Footer.jsx'
import Hero from './Components/Hero.jsx'
import HowToBook from './Components/HowToBook.jsx'

function App() {
  return (
    <>
      <Hero />
      <CarLogo />
      <ClassApart/>
      <HowToBook/>
      <Chauffeurs/>
      <FleetShowcase/>
      <Footer/>
    </>
  )
}

export default App
