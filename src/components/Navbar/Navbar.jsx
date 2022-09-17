import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

import NavbarAuth from '../Navbar/NavbarAuth/NavbarAuth';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getClassName} to="/">
            &#9742;
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getClassName} to="contacts">
            Contacts &#128466;
          </NavLink>
        </li>
        <li className={s.item}>
          <NavbarAuth />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
