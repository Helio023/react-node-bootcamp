import './styles.scss';
import { ReactComponent as AuthBg } from '../../assets/images/main-image.svg';
import { Route, Routes } from 'react-router-dom';
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';

const Auth = () => {
  return (
    <div className='auth-container'>
      <div className='row'>
        <div className='col-7'>
          <div className='auth-info'>
            <h1 className='auth-title'>Divulgue seus produtos <br /> no DS Catalog</h1>
            <p className='auth-subtitle'>
              Faça parte do nosso catalógo de divulgação <br />e aumente as vendas do
              seu produto
            </p>
            <AuthBg className='auth-img'/>
          </div>
        </div>

        <div className="col-5">
            <div className="auth-content">
                <Routes>
                    <Route path='login' element={<Login />}/>
                    <Route path='register' element={<Register />}/>
                    <Route path='recover' element={<h1>Recuperacao</h1>}/>
                </Routes>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
