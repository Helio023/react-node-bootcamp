import { useState } from 'react';
import BaseForm from '../../BaseForm/BaseForm';

import './styles.scss';

const Form = () => {
  const [name, setName] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    
  }

  return (
    <div className='form'>
      <BaseForm title='Cadastrar novo produto'>
        <div className='row'>
          <div className='col-6'>
            <input
              type='text'
              className='form-control'
              placeholder='Escreve o nome'
              onChange={handleOnChange}
            />
          </div>
          <div className='col-6'></div>
        </div>
      </BaseForm>
    </div>
  );
};

export default Form;
