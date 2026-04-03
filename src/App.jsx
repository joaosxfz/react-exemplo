import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <>
      <Header />
      <List 
       title
       subtitleSecondList="Minha Lista de Compras"
       />
       <List title="Agua"/>
      <Footer />

      
    </>
  )
}

export default App
