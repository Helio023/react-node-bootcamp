import { type } from 'os';
import './styles.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const BaseForm = ({ title, children }: Props) => {
  return (
    <div className='admin-base-form'>
      <h1 className='admin-base-title'>{title}</h1>

      {children}

      <div className='base-form-actions'>
        <button type='button' className='btn btn-outline-danger btn-cancel'>
          Cancelar
        </button>
        <button type='button' className='btn btn-primary btn-save'>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default BaseForm;
