import Wrapper from "../assets/wrapper/componentwrapper/CartContent";
import { useCartContext } from "../context/Cart_Context";
import { CartColumns, CartItem, CartTotals } from "../components";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          Go To Shopping
        </Link>
        <button
          type='button'
          className='clear-btn link-btn'
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
export default CartContent;
