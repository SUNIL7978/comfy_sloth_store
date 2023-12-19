import { Link } from "react-router-dom";
import Wrapper from "../assets/wrapper/PageWrapper/CartPage";
import { useCartContext } from "../context/Cart_Context";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty.</h2>
          <Link to='/products' className='btn'>
            Back to Shopping
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  );
};
export default CartPage;
