import ContentLoader from "react-content-loader"

const ProductDetailsLoader = () => (
  <ContentLoader 
    speed={2}
    width={800}
    height={460}
    viewBox="0 0 800 460"
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
   
  >
    <rect x="0" y="60" rx="2" ry="2" width="224" height="148" /> 
    <rect x="3" y="224" rx="0" ry="0" width="89" height="9" /> 
    <rect x="3" y="248" rx="0" ry="0" width="104" height="30" /> 
    <rect x="267" y="55" rx="0" ry="0" width="306" height="219" /> 
    <rect x="293" y="76" rx="0" ry="0" width="159" height="24" />
  </ContentLoader>
)

export default ProductDetailsLoader