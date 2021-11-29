import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className='row bg-primary main-nav'>
    <div className='col-2'>
      <Link to='/' className='nav-logo'>
        <h4>DS Catalog</h4>
      </Link>
    </div>

    <div className='col-6 offset-2'>
      <ul className='main-menu'>
        <li>
          <NavLink
            to='/'
            className={(navdata) =>
              navdata.isActive ? 'menu-link active' : 'menu-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/catalog'
            className={(navdata) =>
              navdata.isActive ? 'menu-link active' : 'menu-link'
            }
          >
            Catálogo
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/admin'
            className={(navdata) =>
              navdata.isActive ? 'menu-link active' : 'menu-link'
            }
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
