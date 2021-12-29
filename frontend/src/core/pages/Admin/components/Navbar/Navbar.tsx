import {NavLink} from 'react-router-dom'
import './styles.scss'

const Navbar = () => {
    return (
    <nav className="admin-navbar">
        <ul className="nav">
            <li className="nav-item">
                <NavLink to='/admin/products' className="nav-link">Meus produtos</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/admin/categories' className="nav-link">Minhas categorias</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/admin/users' className="nav-link">Meus usuários</NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar
