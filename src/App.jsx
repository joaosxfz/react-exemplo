import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'

// Componentes
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import List from './components/List/index'

// Páginas
import Home from './pages/Home/index'
import About from './pages/About/index'

function App() {
  return (
    <>
      <Header />
      <List title="Minha Lista de Teste" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
