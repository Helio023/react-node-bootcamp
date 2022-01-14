import './core/assets/styles/custom.scss';
import './App.scss';
import Navbar from './core/components/Navbar';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter
} from 'react-router-dom';
import Home from './core/pages/Home';
import Catalog from './core/pages/Catalog';
import Admin from './core/pages/Admin';
import ProductDetails from './core/pages/Catalog/components/ProductDetails';
import Auth from './core/pages/Auth/Auth';
import history from './core/utils/history';

const App = () => {
  return (
    <HistoryRouter history={history}>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Catalog />} />
        <Route path='products/:productid' element={<ProductDetails />} />
        <Route path='admin/*' element={<Admin />} />
        <Route path='admin/auth/*' element={<Auth />} />
      </Routes>
    </HistoryRouter>
  );
};

export default App;
