import { Link } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => (
  <section className='catalog-container'>
    <h2 className='catalog-title'>Todos produtos</h2>

    <div className='catalog-products'>
      <Link to="/products/1"><ProductCard /></Link>
      <Link to="/products/2"><ProductCard /></Link>
      <Link to="/products/3"><ProductCard /></Link>
      <Link to="/products/4"><ProductCard /></Link>
      <Link to="/products/5"><ProductCard /></Link>
      <Link to="/products/6"><ProductCard /></Link>
      <Link to="/products/7"><ProductCard /></Link>
      <Link to="/products/8"><ProductCard /></Link>
      
    </div>
  </section>
);

export default Catalog;
