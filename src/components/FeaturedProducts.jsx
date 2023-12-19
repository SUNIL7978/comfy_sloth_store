import { useProductContext } from "../context/Product_Context";
import { Loading, Error, Product } from "../components";
import Wrapper from "../assets/wrapper/componentwrapper/FeaturedProducts";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Featured Products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to='/products' className='btn'>
        All Products
      </Link>
    </Wrapper>
  );
};
export default FeaturedProducts;
