import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../../../../assets/images/chevron_right.svg';
import productImg from '../../../../assets/images/pc.png';
import './styles.scss';

const ProductDetails = () => {
  return (
    <div className='product-details-container'>
      <div className='product-details'>
        <Link to='/products' className='product-goback'>
          <ArrowIcon className='icon-goback' />
          <h1 className='text-goback'>Voltar</h1>
        </Link>

        <div className='row'>
          <div className='col-6 product-desc-section'>
            <div className='product-img-desc'>
              <img src={productImg} alt='pc' className='img-fluid' />
              <h2 className='product-name'>Computador desktop intel core I7</h2>
              <p className='product-price'>
                <sup>MZN</sup>59.820.00
              </p>
            </div>
          </div>
          <div className='col-6 product-desc-section'>
            <div className='product-desc'>
              <h2 className="product-desc-head">Descrição do produto</h2>
              <p className="product-desc-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                recusandae iure optio cumque eligendi sed aspernatur vero,
                dolorum corporis, rerum perspiciatis unde, autem ipsa nesciunt
                non ea commodi aliquid ex?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
