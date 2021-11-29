import ProductCard from './components/ProductCard';
import './styles.scss';

const Catalog = () => (
  <section className='catalog-container'>
    <h2 className='catalog-title'>Todos produtos</h2>

    <div className='catalog-products'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </section>
);

export default Catalog;
