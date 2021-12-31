
import { Link, Routes, Route } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <Link to='/admin/products'  className='mr-5'>Todos produtos</Link>
            <Link to='/admin/products/create' className='mr-5' >Criar produto</Link>
            <Link to='/admin/products/10' className='mr-5' >Editar produto</Link>

            <Routes>
                <Route path='/' element={<h1>Listar produtos</h1>}/>
                <Route path='/create' element={<h1>Criar novo produto</h1> }/>
                <Route path='/:productId' element={<h1>Editar produto</h1>}/>
            </Routes>
        </div>
    )
}

export default Products
