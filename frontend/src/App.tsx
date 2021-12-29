import './core/assets/styles/custom.scss';
import './App.scss';
import Navbar from './core/components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './core/pages/Home';
import Catalog from './core/pages/Catalog';
import Admin from './core/pages/Admin';
import ProductDetails from './core/pages/Catalog/components/ProductDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Catalog />} />
          <Route path='/products/:productid' element={<ProductDetails />} />
          <Route path='/admin*' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
