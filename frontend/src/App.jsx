import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import NotFoundPage from './components/NotFoundPage';

function App() {
  const [count, setCount] = useState(0)
  const [showLogi, setShowLogin] = useState(false)
  const [searchBox, setSearchBox]= useState(false)

  return (
    <>
      <Navbar setShowLogin={setShowLogin} showLogi={showLogi} searchBox={searchBox} setSearchBox={setSearchBox}/>
      <LoginForm setShowLogin={setShowLogin} showLogi={showLogi} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
