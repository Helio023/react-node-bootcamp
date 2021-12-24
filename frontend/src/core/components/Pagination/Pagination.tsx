import { ReactComponent as ArrowIcon } from '../../assets/images/chevron_right.svg';
import { generateList } from '../../utils/generateList';
import './styles.scss';

type Props = {
  totalPages: number;
  activePage: number;
  onChange: (item: number) => void;
};

const Pagination = ({ totalPages, activePage, onChange }: Props) => {
  const items = generateList(totalPages);

  return (
    <div className='pagination-conatiner'>
      <ArrowIcon className='previous' />
      {items.map((item) => (
        <div
          key={item}
          className={`pagination-item ${item === activePage ? 'active' : ''}`}
          onClick={() => onChange(item)}
        >
          {item + 1}
        </div>
      ))}

      <ArrowIcon className='next' />
    </div>
  );
};

export default Pagination;
