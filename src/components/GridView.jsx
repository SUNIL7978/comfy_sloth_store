import Wrapper from "../assets/wrapper/componentwrapper/GridView";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </Wrapper>
  );
};
export default GridView;
