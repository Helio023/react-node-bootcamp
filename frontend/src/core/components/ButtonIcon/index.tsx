import './styles.scss';
import { ReactComponent as ArrowIcon } from '../../assets/images/chevron_right.svg';

type BtnProps = {
  btnText: string;
};

const ButtonIcon = ({ btnText }: BtnProps) => (
  <div className='btn-icon'>
    <button type='button' className='btn bg-primary'>
      {btnText}
    </button>
    <span>
      <ArrowIcon className='icon' />
    </span>
  </div>
);

export default ButtonIcon;
