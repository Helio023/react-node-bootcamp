import { useNavigate } from 'react-router-dom';
import './styles.scss'

const List = () => {
  const navigate = useNavigate();
  const handleCreateProduct = () => {
    navigate('create');
  };
  return (
    <div className='admin-products-list'>
      <button
        type='button'
        className='btn btn-primary btn-lg'
        onClick={handleCreateProduct}
      >
        Adicionar
      </button>
      <h1>Lista de produtos aqui!</h1>
    </div>
  );
};

export default List;
