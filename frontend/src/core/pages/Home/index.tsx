import './styles.scss';
import { ReactComponent as MainImage } from '../../assets/images/main-image.svg';
import ButtonIcon from '../../components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
  <section className='hero-container'>
    <div className='row hero-content'>
      <div className='col-6'>
        <h1 className='hero-header'>Conheça o melhor catálogo de produtos</h1>
        <p className='hero-text'>
          Ajudaremos você a encontrar os melhores produtos do mercado.
        </p>
        <Link to='/products'>
          <ButtonIcon btnText='inicie agora a sua busca' />
        </Link>
      </div>

      <div className='col-6'>
        <MainImage className='img-fluid main-image' />
      </div>
    </div>
  </section>
);

export default Home;
