import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

import axios from 'axios';
import './styles.scss';

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const Catalog = () => {
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    axios(`${BASE_URL}/product`)
      .then((res) => setProducts(res.data.products))
      .catch((e) => console.log(e));
  }, []);



  return (
    <section className='catalog-container'>
      <h2 className='catalog-title'>Todos produtos</h2>

      <div className='catalog-products'>
        {products.map((product: any) => {
          return (
            <Link to={`/products/${product?._id}`}>
              <ProductCard product={product} key={product?._id}/>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Catalog;
