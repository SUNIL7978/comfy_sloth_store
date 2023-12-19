import { FaTrash } from "react-icons/fa";
import { formatPrice } from "../Utils/helpers";
import Wrapper from "../assets/wrapper/componentwrapper/CartItems";
import { AmountButton } from "../components";
import { useCartContext } from "../context/Cart_Context";

const CartItem = ({ id, image, color, amount, price, name }) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className='price-small'>
            Price : <span>{formatPrice(price)}</span>
          </h5>
        </div>
      </div>
      <h5 className='price'>{formatPrice(price)}</h5>
      <AmountButton amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>{formatPrice(amount * price)}</h5>
      <button
        type='button'
        className='remove-btn'
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};
export default CartItem;
