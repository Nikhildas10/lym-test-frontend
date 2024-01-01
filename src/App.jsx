
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Headers from './components/Headers'
import Signup from './pages/Signup'
import Service from './pages/Service'

function App() {
const location=useLocation()
  return (
    <>
    {location.pathname!="/" && 
    <Headers></Headers>
    }
    <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/' element={<Signup></Signup>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
    </Routes>
    </>
  )
}

export default App
