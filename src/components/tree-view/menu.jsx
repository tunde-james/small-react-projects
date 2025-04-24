/* eslint-disable react/prop-types */
import MenuList from './menu-list';


const Menu = ({ menus = [] }) => {
  return (
    <div className="menu-container">
      <MenuList lists={menus} />
    </div>
  );
};


export default Menu;
