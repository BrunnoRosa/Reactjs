// import './style.css'

// export default function Footer() {
//   return (
//     <footer>
//       <strong>Empresa de Gamers</strong>
//       <p>Copyright &copy; {new Date().getFullYear()} - todos os direitos reservados</p> 
//     </footer>
//   )
// }

import './style.css'

export default function Footer() {
  return (
    <footer className="pokemon-footer">
      <div className="footer-content">
        <strong className="footer-brand">Empresa de <span>Gamers</span></strong>
        <p className="footer-copy">
          Copyright &copy; {new Date().getFullYear()} - Todos os direitos reservados
        </p> 
      </div>
      {/* Detalhe estético que simula a abertura de uma pokébola em alta velocidade */}
      <div className="footer-speed-bar"></div>
    </footer>
  )
}