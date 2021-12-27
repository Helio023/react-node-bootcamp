import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

import axios from 'axios';
import './styles.scss';
import ProductCardloader from './components/ProductCardLoader/ProductCardLoader';
import Pagination from '../../components/Pagination/Pagination';

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const Catalog = () => {
  const [products, setProducts] = useState<any>([]);
  const [pages, setPages] = useState<any>([]);
  const [isloading, setIsloading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const params = {
      page: activePage + 1,
    };

    setIsloading(true);
    axios(`${BASE_URL}/product`, { params })
      .then((res) => {
        setProducts(res.data.products);
        setPages(res.data);
      })
      .finally(() => setIsloading(false));
  }, [activePage]);

  return (
    <section className='catalog-container'>
      <h2 className='catalog-title'>Catálogo de produtos</h2>

      <div className='catalog-products'>
        {isloading ? (
          <ProductCardloader />
        ) : (
          products.map((product: any) => {
            return (
              <Link to={`/products/${product?._id}`}>
                <ProductCard product={product} key={product?._id} />
              </Link>
            );
          })
        )}
      </div>
      {products && (
        <Pagination
          onChange={(page) => setActivePage(page)}
          totalPages={pages.totalPages}
          activePage={activePage}
        />
      )}
    </section>
  );
};

export default Catalog;
