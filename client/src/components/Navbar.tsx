import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      gap: '1rem', 
      padding: '1rem', 
      background: '#f0f0f0',
      marginBottom: '1rem'
    }}>
      <Link to="/">Inicio</Link>
      <Link to="/about">Acerca de</Link>
      <Link to="/contact">Contacto</Link>
    </nav>
  )
}