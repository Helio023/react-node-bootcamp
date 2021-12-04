import {  Link } from 'react-router-dom';
import {ReactComponent as ArrowIcon} from '../../../../assets/images/chevron_right.svg'
import './styles.scss';


const ProductDetails = () => {
  
  return (

    <div className="product-details-container">
      <div className="product-details">
        <Link to="/products" className="product-goback">
          <ArrowIcon className="icon-goback"/>
          <h1 className="text-goback">Voltar</h1>
        </Link>
      </div>
    </div>
  )
};

export default ProductDetails;
