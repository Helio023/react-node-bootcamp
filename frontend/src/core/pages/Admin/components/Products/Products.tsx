import List  from './List/List ';
import { Routes, Route } from 'react-router-dom';
import Form from './Form/Form';

const Products = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/create' element={<Form />} />
        <Route path='/:productId' element={<h1>Editar produto</h1>} />
      </Routes>
    </div>
  );
};

export default Products;
