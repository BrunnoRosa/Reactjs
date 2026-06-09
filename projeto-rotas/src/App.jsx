import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobrenos from './pages/SobreNos'
import Servicos from './pages/Servicos'
import Produtos from './pages/Produtos'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Routes>
      
        <Route path='/' element={<Home />}/>
        <Route path='/sobre-nos' element={<Sobrenos/>}/>
        <Route path='/servicos' element={<Servicos/>}/>
        <Route path='/produtos' element={<Produtos/>}/>

      </Routes>      

    </main>
    <Footer/>
    </>
  )
}

export default App
