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
    <div style={estiloContainer}>
      {/* 1. O Header fixo no topo */}
      <Header />

      {/* 2. As seções com ID para a navegação funcionar */}
      <section id="inicio">
        <Hero />
      </section>
      
      <section id="historia">
        <Timeline />
      </section>
      
      <section id="galeria">
        <Galeria />
      </section>
      
      <section id="mural">
        <Mural />
      </section>
      <Footer />
    </div>
  );
}

export default App;