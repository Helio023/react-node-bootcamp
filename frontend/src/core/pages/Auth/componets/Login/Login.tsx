import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from '../Button/AuthButton';
import AuthCard from '../Card/AuthCard';
import { useForm } from 'react-hook-form';
import './styles.scss';
import axios from 'axios';
import { spawn } from 'child_process';

type FormData = {
  email: string;
  password: string;
};

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    axios
      .post(`${BASE_URL}/login`, data)
      .then((res) => {
        setHasError(false);
        navigate('/admin/products');
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
          <div className='login-form-group mb-4'>
            <input
              type='email'
              className={`input-base form-control ${
                errors.email ? 'input-error' : ''
              }`}
              placeholder='Email'
              {...register('email', {
                required: '* Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
            />
            {errors.email && (
              <span className='login-input-error'>{errors.email.message}</span>
            )}
          </div>
          <div className='login-form-group'>
            <input
              type='password'
              className={`input-base form-control ${
                errors.password ? 'input-error' : ''
              }`}
              placeholder='Senha'
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password && (
              <span className='login-input-error'>
                * Campo inválido: A senha deve ter um minimo de 8 caracteres
              </span>
            )}
          </div>
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
