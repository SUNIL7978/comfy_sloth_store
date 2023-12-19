import { Link } from "react-router-dom";
import { formatPrice } from "../Utils/helpers";
import Wrapper from "../assets/wrapper/componentwrapper/Listview";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, description, price, name } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h5>{name}</h5>
              <p className='price'>{formatPrice(price)}</p>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='btn'>
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
export default ListView;
