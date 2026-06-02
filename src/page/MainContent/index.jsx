import './style.css'

import { useState } from 'react';

export default function MainContent() {
  // Estado que controla qual "subtela" exibir
  const [secaoAtiva, setSecaoAtiva] = useState('inicio');

  return (
    <div>
      {/* Botões que alternam o estado */}
      <nav>
        <button onClick={() => setSecaoAtiva('inicio')}>Início</button>
        <button onClick={() => setSecaoAtiva('dashboard')}>Dashboard</button>
      </nav>

      {/* Renderização Condicional */}
      <section>
        {secaoAtiva === 'inicio' && <p>Bem-vindo à página principal!</p>}
        {secaoAtiva === 'dashboard' && <p>Aqui ficam os gráficos e dados.</p>}
      </section>
    </div>
  );
}