import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import List from './components/List'
import './index.css'
import About from './pages/About'
import Header from './components/Header/'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
