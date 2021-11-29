import './styles.scss';
import productImage from '../../../../assets/images/pc.png';

const ProductCard = () => (
  <div className='product'>
    <div className='product-img'>
        <img src={productImage} alt="computer" />
    </div>

    <div className="product-description">
        <h6 className="product-name">Computador desktop intel core I7</h6>
        <p className="product-price"><sup>MZN</sup>59.852.00</p>
    </div>
  </div>
);

export default ProductCard;
