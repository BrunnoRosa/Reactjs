// src/components/Header/index.jsx
import './style.css'; // Importando o arquivo de estilos

function Header() {
  // A lógica de rolagem suave continua a mesma
  const rolarParaSecao = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header-container">
      <a 
        href="#inicio" 
        onClick={() => rolarParaSecao('inicio')} 
        className="header-logo"
      >
        L & M 💍
      </a>

      <nav className="header-nav">
        <span 
          onClick={() => rolarParaSecao('inicio')} 
          className="header-link"
        >
          Início
        </span>
        <span 
          onClick={() => rolarParaSecao('historia')} 
          className="header-link"
        >
          História
        </span>
        <span 
          onClick={() => rolarParaSecao('galeria')} 
          className="header-link"
        >
          Memórias
        </span>
        <span 
          onClick={() => rolarParaSecao('mural')} 
          className="header-link"
        >
          Mural
        </span>
      </nav>
    </header>
  );
}

export default Header;