import MenuItem from './menu-item';
import './styles.css';

// eslint-disable-next-line react/prop-types
const MenuList = ({ lists = [] }) => {
  return (
    <ul className="menu-list-container">
      {lists && lists.length > 0
        ? lists.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : 'No Menu List Present'}
    </ul>
  );
};

export default MenuList;
