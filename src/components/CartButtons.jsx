import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/componentwrapper/CartButtons";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { useProductContext } from "../context/Product_Context";
import { useCartContext } from "../context/Cart_Context";
import { useUserContext } from "../context/User_context";

const CartButtons = () => {
  const { closeSidebar } = useProductContext();

  const { total_items } = useCartContext();

  const { loginWithRedirect, logout, myUser } = useUserContext();

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};
export default CartButtons;
