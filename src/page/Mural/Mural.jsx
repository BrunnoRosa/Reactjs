// src/components/Mural.jsx
import { useState } from 'react';

function Mural() {
  // 1. Estado para guardar a lista de recados (já começa com dois de exemplo)
  const [recados, setRecados] = useState([
    { id: 1, nome: "Madrinha Mãe/Tia Andreia", texto: "Vocês são lindos demais! Que essa nova fase seja cheia de luz e companheirismo." },
    { id: 2, nome: "Padrinho Tio/Cumpadre Carlos", texto: "Contando os dias para essa festa maravilhosa! Muitas felicidades ao casal!" }
  ]);

  // 2. Estados para controlar o que o usuário está digitando nos campos do formulário
  const [nomeDigitado, setNomeDigitado] = useState('');
  const [textoDigitado, setTextoDigitado] = useState('');

  // 3. Função que roda quando o usuário clica no botão "Enviar"
  const lidarComEnvio = (evento) => {
    evento.preventDefault(); // Evita que a página recarregue

    // Validação simples: não deixa enviar se um dos campos estiver vazio
    if (nomeDigitado.trim() === '' || textoDigitado.trim() === '') {
      alert("Por favor, preencha o seu nome e a sua homenagem! 📝");
      return;
    }

    // Cria o objeto do novo recado
    const novoRecado = {
      id: Date.now(), // Gera um ID único baseado no tempo atual
      nome: nomeDigitado,
      texto: textoDigitado
    };

    // Atualiza o estado da lista: coloca o novo recado no TOPO e mantém os antigos (...recados)
    setRecados([novoRecado, ...recados]);

    // Limpa os campos do formulário para o próximo recado
    setNomeDigitado('');
    setTextoDigitado('');
  };

  // --- ESTILOS ---
  const estilos = {
    container: { padding: '40px 20px', maxWidth: '600px', margin: '0 auto' },
    titulo: { textAlign: 'center', fontFamily: '"Playfair Display", Georgia, serif', color: '#4A3E3D', marginBottom: '25px' },
    formulario: { display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '30px' },
    input: { padding: '12px', borderRadius: '6px', border: '1px solid #DDD', fontSize: '1rem', fontFamily: 'sans-serif' },
    textarea: { padding: '12px', borderRadius: '6px', border: '1px solid #DDD', fontSize: '1rem', fontFamily: 'sans-serif', minHeight: '100px', resize: 'vertical' },
    botao: { padding: '12px', backgroundColor: '#D4A373', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.2s' },
    cardRecado: { backgroundColor: '#FFFDFB', borderLeft: '4px solid #D4A373', padding: '15px', borderRadius: '4px', marginBottom: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' },
    nomeAutor: { color: '#4A3E3D', fontWeight: 'bold', display: 'block', marginBottom: '5px' },
    textoAutor: { color: '#555', fontStyle: 'italic', margin: 0, lineHeight: '1.4' }
  };

  return (
    <div style={estilos.container}>
      <h2 style={estilos.titulo}>Deixe sua Homenagem ✨</h2>

      {/* Formulário de Envio */}
      <form onSubmit={lidarComEnvio} style={estilos.formulario}>
        <input 
          type="text" 
          placeholder="Seu Nome ou Parentesco" 
          style={estilos.input}
          value={nomeDigitado}
          onChange={(e) => setNomeDigitado(e.target.value)} // Atualiza o estado enquanto digita
        />
        <textarea 
          placeholder="Escreva uma mensagem carinhosa para os noivos..." 
          style={estilos.textarea}
          value={textoDigitado}
          onChange={(e) => setTextoDigitado(e.target.value)} // Atualiza o estado enquanto digita
        />
        <button type="submit" style={estilos.botao}>Enviar Mensagem 🌹</button>
      </form>

      {/* Lista onde os recados aparecem */}
      <div>
        {recados.map((recado) => (
          <div key={recado.id} style={estilos.cardRecado}>
            <span style={estilos.nomeAutor}>✍️ {recado.nome}</span>
            <p style={estilos.textoAutor}>"{recado.texto}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mural;