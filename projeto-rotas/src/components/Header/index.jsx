// import { Link, NavLink } from 'react-router-dom'
// import './style.css'

// export default function Header() {
//     return (
//         <header>
//         <div>
//         <Link to="/" className='header-logo'> 
//             <h1>Empresa de Gamers</h1>
//         </Link>
//         </div>
//         <nav>
//             <NavLink>
//                 <Link to="/">Home</Link>
//             </NavLink>
//             <NavLink>
//                 <Link to= "/sobre-nos" >Sobre Nós</Link>
//             </NavLink>
            
//             <NavLink>
//                 <Link to= "/produtos" >Produtos</Link>
//             </NavLink>
            
//             <NavLink>
//                 <Link to= "/servicos" >Serviços</Link>
//             </NavLink>
            
//         </nav>
//         </header>
//     )
//     }

import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/" className="header-logo"> 
          <h1>Poké<span>Center</span></h1>
        </Link>
      </div>
      
      <nav className="nav-menu">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          <span className="btn-glitch">Home</span>
        </NavLink>
        
        <NavLink to="/produtos" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          <span className="btn-glitch">Produtos</span>
        </NavLink>

        <NavLink to="/servicos" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          <span className="btn-glitch">Serviços</span>
        </NavLink>

        <NavLink to="/sobre-nos" className={({ isActive }) => isActive ? 'nav-btn active' : 'nav-btn'}>
          <span className="btn-glitch">Sobre Nós</span>
        </NavLink>
      </nav>
    </header>
  )
}
