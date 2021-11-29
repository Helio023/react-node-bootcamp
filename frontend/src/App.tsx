import './core/assets/styles/custom.scss';
import './App.scss';
import Navbar from './core/components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './core/pages/Home';
import Catalog from './core/pages/Catalog';
import Admin from './core/pages/Admin';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
