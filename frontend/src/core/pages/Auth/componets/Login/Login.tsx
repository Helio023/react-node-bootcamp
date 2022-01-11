import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from '../Button/AuthButton';
import AuthCard from '../Card/AuthCard';
import { useForm } from 'react-hook-form';
import './styles.scss';
import axios from 'axios';

type FormData = {
  email: string;
  password: string;
};

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    axios
      .post(`${BASE_URL}/login`, data)
      .then((res) => {
        setHasError(false);
        navigate('/admin/products')
      })
      .catch(() => {
        setHasError(true);
      });
  };

  return (
    <div className='login'>
      <AuthCard title='Entrar'>
        {hasError && (
          <div className='login-alert'>Email ou senha inválidos</div>
        )}
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <input
            type='email'
            className='input-base form-control mb-4'
            placeholder='Email'
            {...register('email', { required: true })}
          />
          <input
            type='password'
            className='input-base form-control'
            placeholder='Senha'
            {...register('password', { required: true, minLength: 8 })}
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
