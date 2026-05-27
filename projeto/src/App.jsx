import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import InfoCurso from './components/InfoCurso'
import Mensagem from './components/Mensagem'
import AdicionarUsuario from './pages/AdionarUsuario'
import Clientes from './pages/Clientes'

function App() {

  return (
    <>
      <h1>Meu Projeto</h1>
      <h5>Aprendendo JavaScript</h5>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, aliquam aliquid. Ad minus veritatis omnis ut aut iure voluptatibus, harum dolor nihil a praesentium tenetur magni minima, laborum sapiente sunt.
      </p>

      <Header />
      {/*<InfoCurso />*/}
      {/*<Mensagem />*/}
      <main>
        <Clientes/>
        <AdicionarUsuario />
      </main>
      <Footer />
    </>
  )
}

export default App
