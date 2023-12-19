import { Link } from "react-router-dom";
import { formatPrice } from "../Utils/helpers";
import Wrapper from "../assets/wrapper/componentwrapper/CartTotals";
import { useCartContext } from "../context/Cart_Context";
import { useUserContext } from "../context/User_context";

const CartTotals = () => {
  const { total_Amount, shipping_fee } = useCartContext();

  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            SubTotals : <span>{formatPrice(total_Amount)}</span>
          </h5>
          <p>
            Shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Totals : <span>{formatPrice(total_Amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            Procced to Checkout
          </Link>
        ) : (
          <button type='button' className='btn' onClick={loginWithRedirect}>
            Login to continue
          </button>
        )}
      </div>
    </Wrapper>
  );
};
export default CartTotals;
