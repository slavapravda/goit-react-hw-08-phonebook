import s from './NavbarMenu.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const NavbarMenu = () => {
  return (
   <div>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getClassName} to="contacts">
            Contacts &#128466;
          </NavLink>
        </li>
      </ul>
   </div>


  );
};

export default NavbarMenu;
