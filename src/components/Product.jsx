import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import Wrapper from "../assets/wrapper/componentwrapper/Product";
import { formatPrice } from "../Utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className='link'>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};
export default Product;
