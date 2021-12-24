import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/chevron_right.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import ProductDetailsLoader from '../ProductCardLoader/PoaductDetailsLoader';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    price
  );
};

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const ProductDetails = () => {
  const { productid } = useParams();

  const [product, setProduct] = useState<any>([]);
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    setIsloading(true)
    axios(`${BASE_URL}/product/${productid}`)
      .then((res) => setProduct(res.data.product))
      .finally(() => setIsloading(false));
  }, [productid]);

  return (
    <div className='product-details-container'>
     {isLoading ? <ProductDetailsLoader /> : (
        <div className='product-details'>
        <Link to='/products' className='product-goback'>
          <ArrowIcon className='icon-goback' />
          <h1 className='text-goback'>Voltar</h1>
        </Link>

        <div className='row'>
          <div className='col-6 product-desc-section'>
            <div className='product-img-desc'>
              <img src={product?.image} alt='pc' className='img-fluid' />
              <h2 className='product-name'>{product?.name}</h2>
              <p className='product-price'>
                <sup>R$</sup>
                {formatPrice(product?.price)}
              </p>
            </div>
          </div>
          <div className='col-6 product-desc-section'>
            <div className='product-desc'>
              <h2 className='product-desc-head'>{product?.name}</h2>
              <p className='product-desc-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                recusandae iure optio cumque eligendi sed aspernatur vero,
                dolorum corporis, rerum perspiciatis unde, autem ipsa nesciunt
                non ea commodi aliquid ex?
              </p>
            </div>
          </div>
        </div>
      </div>
     )}
    </div>
  );
};

export default ProductDetails;
