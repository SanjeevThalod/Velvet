import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from "./Components/Navbar";
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </Router>
  )
}

export default App
