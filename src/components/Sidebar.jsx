import SidebarContainer from "../assets/wrapper/componentwrapper/Sidebar";
import logo from "../assets/images/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../Utils/constants";
import { Link } from "react-router-dom";
import { CartButtons } from "../components";
import { useProductContext } from "../context/Product_Context";
import { useUserContext } from "../context/User_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductContext();

  const { myUser } = useUserContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar " : "sidebar"}`}
      >
        <div className='sidebar-header'>
          <img src={logo} alt='Comfy Sloth' />
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to='/checkout' onClick={closeSidebar}>
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};
export default Sidebar;
