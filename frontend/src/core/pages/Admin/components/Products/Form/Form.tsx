import { useState } from 'react';
import BaseForm from '../../BaseForm/BaseForm';
import axios from 'axios';

import './styles.scss';

type FormState = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const BASE_URL = 'http://localhost:3000/api/v1/catalog';

const Form = () => {
  const [data, setData] = useState<FormState>({
    name: '',
    price: '',
    description: '',
    image: '',
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios(`${BASE_URL}/product`, {
      method: 'POST',
      data,
    });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <BaseForm title='Cadastrar novo produto'>
        <div className='row'>
          <div className='col-6'>
            <input
              type='text'
              name='name'
              value={data.name}
              className='form-control mt-5'
              placeholder='Escreve o nome do produto'
              onChange={handleOnChange}
            />
            <input
              type='text'
              value={data.price}
              name='price'
              placeholder='Preço'
              className='form-control my-4'
              onChange={handleOnChange}
            />
            <input
              type='text'
              name='image'
              placeholder='Escreve a url da sua image'
              className='form-control my-4 '
              onChange={handleOnChange}
            />
          </div>
          <div className='col-6'>
            <textarea
              name='description'
              placeholder='Escreve a descrição'
              className='form-control mt-5'
              onChange={handleOnChange}
              cols={30}
              rows={10}
            />
          </div>
        </div>
      </BaseForm>
    </form>
  );
};

export default Form;
