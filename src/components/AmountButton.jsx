import { FaMinus, FaPlus } from "react-icons/fa";
import Wrapper from "../assets/wrapper/componentwrapper/AmountButton";

const AmountButton = ({ amount, increase, decrease }) => {
  return (
    <Wrapper>
      <button type='button' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};
export default AmountButton;
