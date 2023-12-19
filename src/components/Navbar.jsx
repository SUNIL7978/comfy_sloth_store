import { Link } from "react-router-dom";
import NavContainer from "../assets/wrapper/componentwrapper/Navbar";
import Logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "../Utils/constants";
import { CartButtons } from "../components";
import { useProductContext } from "../context/Product_Context";
import { useUserContext } from "../context/User_context";

const Navbar = () => {
  const { openSidebar } = useProductContext();

  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={Logo} alt='comfy sloth' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>Checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};
export default Navbar;
