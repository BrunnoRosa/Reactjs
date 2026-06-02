import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Mural from './page/Mural/Mural';
import MainContent from './page/MainContent';
import Hero from './page/Home/Hero';
import Timeline from './page/TimeLine/Timeline';
import Galeria from './page/Galeria/Galeria';
import Header from './components/Header';


function App() {
  const estiloContainer = {
    fontFamily: 'sans-serif',
    backgroundColor: '#FAF7F5',
    minHeight: '100vh',
    paddingTop: '80px', // Espaço para o Header fixo não cobrir o conteúdo
  };
  

  return (    
    <div className='app-container'>
      <Header/>
    <main>
    <Hero />
    <Timeline />
    <Galeria />
    <MainContent/>
    <Mural />
    </main>

    <Footer />

    
    </div>
  );
}

export default App
