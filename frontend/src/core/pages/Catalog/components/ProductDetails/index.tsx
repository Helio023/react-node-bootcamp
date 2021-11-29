import { useParams } from 'react-router-dom';
import './styles.scss';


const ProductDetails = () => {
const {productid} = useParams()

  return <h1>Product details {productid}</h1>;
};

export default ProductDetails;
