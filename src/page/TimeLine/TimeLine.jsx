// src/components/Timeline.jsx
function Timeline() {
  const estilos = {
    container: {
      padding: '40px 20px',
      maxWidth: '700px',
      margin: '0 auto',
    },
    tituloSecao: {
      textAlign: 'center',
      fontFamily: '"Playfair Display", Georgia, serif',
      color: '#4A3E3D',
      marginBottom: '40px',
    },
    evento: {
      borderLeft: '3px solid #D4A373', // A linha vertical dourada
      paddingLeft: '20px',
      position: 'relative',
      marginBottom: '30px',
    },
    ponto: {
      content: '""',
      position: 'absolute',
      left: '-9px',
      top: '5px',
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      backgroundColor: '#D4A373',
    },
    dataEvento: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: '#D4A373',
      marginBottom: '5px',
    },
    tituloEvento: {
      fontSize: '1.3rem',
      color: '#4A3E3D',
      margin: '0 0 10px 0',
    },
    textoEvento: {
      color: '#666',
      lineHeight: '1.5',
    }
  };

  return (
    <div style={estilos.container}>
      <h2 style={estilos.tituloSecao}>Nossa História ❤️</h2>

      {/* Momento 1 */}
      <div style={estilos.evento}>
        <div style={estilos.ponto}></div>
        <div style={estilos.dataEvento}>09 DE AGOSTO DE 2014</div>
        <h3 style={estilos.tituloEvento}>O Primeiro Olhar</h3>
        <p style={estilos.textoEvento}>
          Quem diria que eu apareceria na sua casa sem nem avisar e isso mudaria nossas vidas para sempre? Aquele primeiro olhar, depois aquela primeira dança despretensiosa foi o início de tudo.
        </p>
      </div>

      {/* Momento 2 */}
      <div style={estilos.evento}>
        <div style={estilos.ponto}></div>
        <div style={estilos.dataEvento}>06 DE SETEMBRO DE 2014</div>
        <h3 style={estilos.tituloEvento}>O Pedido de Namoro</h3>
        <p style={estilos.textoEvento}>
          Sob o céu estrelado da praia, decidimos que queríamos caminhar lado a lado. O "sim" mais fácil das nossas vidas até então (risos).
        </p>
      </div>

      {/* Momento 3 */}
      <div style={estilos.evento}>
        <div style={estilos.ponto}></div>
        <div style={estilos.dataEvento}>25 DE JANEIRO DE 2015</div>
        <h3 style={estilos.tituloEvento}>O Casamento</h3>
        <p style={estilos.textoEvento}>
          Em plena férias, juntos em minha casa, o pedido de casamento aconteceu(risos) "Quer morar comigo!?". Mais um capítulo inesquecível escrito com muito amor.
        </p>
      </div>
    </div>
  );
}

export default Timeline;