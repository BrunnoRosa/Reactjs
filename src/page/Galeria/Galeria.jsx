// src/components/Galeria.jsx
function Galeria() {
  const estilos = {
    container: {
      padding: '40px 20px',
      maxWidth: '900px',
      margin: '0 auto',
    },
    tituloSecao: {
      textAlign: 'center',
      fontFamily: '"Playfair Display", Georgia, serif',
      color: '#4A3E3D',
      marginBottom: '30px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '10px',
    },
    itemFoto: {
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      transition: 'transform 0.3s ease',
    },
    imagem: {
      width: '100%',
      height: '250px',
      objectFit: 'cover', // Faz a imagem preencher o espaço sem distorcer
      display: 'block',
    }
  };

  // URLs de imagens profissionais de casamento para o seu teste
  const fotos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500", // Alianças/Decoração
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=500", // Casal noivo
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=500", // Dança do casal
  ];

  return (
    <div style={estilos.container}>
      <h2 style={estilos.tituloSecao}>Nossas Memórias 📸</h2>
      
      <div style={estilos.grid}>
        {fotos.map((url, index) => (
          <div key={index} style={estilos.itemFoto}>
            <img 
              src={url} 
              alt={`Momento do casal ${index + 1}`} 
              style={estilos.imagem} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;