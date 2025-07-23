import './App.css'
import img from "./assets/velvet.png"
import CarLogo from './Components/CarLogo'
import Chauffeurs from './Components/Chaffeurs'
import ClassApart from './Components/ClassApart'
import Hero from './Components/Hero'
import HowToBook from './Components/HowToBook'

function App() {
  return (
    <>
      <Hero />
      <CarLogo />
      <ClassApart/>
      <HowToBook/>
      <Chauffeurs/>
    </>
    // <div className='body' style={{ backgroundImage: `url(${img})` }}>
    //   <p className='logo'>
    //     <p className='alta'>VELVET</p>
    //     <p className='exp'>EXPERIENCE</p>
    //   </p>
    //   <div className='text'>
    //     Launching soon
    //   </div>
    //   <p className='footer'>Your next Ride, Wrapped in Luxury</p>
    // </div>
  )
}

export default App
