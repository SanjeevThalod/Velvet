import './App.css'
import img from "./assets/velvet.png"

function App() {
  return (
    <div className='body' style={{ backgroundImage: `url(${img})` }}>
      <p className='logo'>
        <p className='alta'>VELVET</p>
        <p className='exp'>EXPERIENCE</p>
      </p>
      <div className='text'>
        Launching soon
      </div>
      <p className='footer'>Your next Ride, Wrapped in Luxury</p>
    </div>
  )
}

export default App
