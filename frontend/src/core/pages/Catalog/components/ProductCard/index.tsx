import './styles.scss';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(
    price
  );
};


const ProductCard = ({ product }: any) => (
  <div className='product'>
    <div className='product-img'>
      <img src={product.image} alt={product.name} />
    </div>

    <div className='product-description'>
      <h6 className='product-name'>{product.name}</h6>
      <p className='product-price'>
        <sup>R$</sup>
        {formatPrice(product.price)}
      </p>
    </div>
  </div>
);

export default ProductCard;
