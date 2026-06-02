// src/components/Hero.jsx
function Hero() {
  // Estilos organizados em objetos para o código ficar limpo
  const estilos = {
    secao: {
      textAlign: 'center',
      padding: '80px 20px',
      backgroundColor: '#FFF5F5', // Um fundo rosa bem clarinho, romântico
      borderRadius: '12px',
      margin: '20px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
    },
    emoji: {
      fontSize: '3.5rem',
      display: 'block',
      marginBottom: '10px'
    },
    titulo: {
      fontFamily: '"Playfair Display", Georgia, serif',
      color: '#4A3E3D',
      fontSize: '2.8rem',
      margin: '10px 0'
    },
    subtitulo: {
      fontFamily: 'sans-serif',
      fontSize: '1.2rem',
      color: '#8A7A78',
      fontStyle: 'italic',
      maxWidth: '600px',
      margin: '0 auto 25px auto',
      lineHeight: '1.6'
    },
    data: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: '#D4A373', // Tom dourado/pastel para a data
      letterSpacing: '2px'
    }
  };

  return (
    <section style={estilos.secao}>
      <span style={estilos.emoji}>✨ 💍 ✨</span>
      
      {/* Sinta-se à vontade para trocar o nome dos noivos! */}
      <h1 style={estilos.titulo}>Bruno & Marineuza</h1>
      
      <p style={estilos.subtitulo}>
        "O amor não consiste em olhar um para o outro, mas em olhar juntos na mesma direção."
      </p>
      
      <div style={estilos.data}>
        🌹 06 DE SETEMBRO DE 2026 🌹
      </div>
    </section>
  );
}

export default Hero;