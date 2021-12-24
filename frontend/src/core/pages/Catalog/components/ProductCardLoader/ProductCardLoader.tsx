import ContentLoader from 'react-content-loader';

const ProductCardloader = () => {
  const loaderItems = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      {loaderItems.map((item) => {
        return (
          <ContentLoader
            key={item}
            speed={2}
            width={258}
            height={320}
            viewBox='0 0 258 320'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='-105' y='322' rx='2' ry='2' width='396' height='15' />
            <rect x='3' y='366' rx='2' ry='2' width='140' height='31' />
            <rect x='6' y='66' rx='2' ry='2' width='250' height='148' />
            <rect x='5' y='230' rx='0' ry='0' width='148' height='8' />
            <rect x='4' y='259' rx='0' ry='0' width='131' height='31' />
            <rect x='88' y='286' rx='0' ry='0' width='12' height='0' />
          </ContentLoader>
        );
      })}
    </>
  );
};

export default ProductCardloader;
