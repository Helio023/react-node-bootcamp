import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Users from './components/Users/Users';
import './styles.scss';

const Admin = () => (
  <div className='admin'>
    <Navbar />
    <div className='admin-content'>
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </div>
  </div>
);

export default Admin;
