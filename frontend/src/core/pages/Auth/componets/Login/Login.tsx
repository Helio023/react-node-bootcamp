import { Link } from 'react-router-dom';
import AuthButton from '../Button/AuthButton';
import AuthCard from '../Card/AuthCard';
import './styles.scss';

const Login = () => {
  return (
    <div className='login'>
      <AuthCard title='Entrar'>
        <form className='login-form'>
          <input
            type='email'
            className='input-base form-control mb-4'
            placeholder='Email'
          />
          <input
            type='password'
            className='input-base form-control'
            placeholder='Senha'
          />
          <Link to='/admin/auth/recover' className='login-recover-link'>
            Esqueceu a senha?
          </Link>
          <AuthButton text='Entrar' />
          <div className='text-center'>
            <span>Não tem registo?</span>
            <Link
              to='/admin/auth/register'
              style={{
                marginLeft: '10px',
                textTransform: 'uppercase',
                textDecoration: 'underline',
              }}
            >
              Registar
            </Link>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
