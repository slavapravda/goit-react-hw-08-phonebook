import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from '../Navbar/NavbarAuth/NavbarAuth';

import { NavLink } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

import s from './Navbar.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Navbar = () => {
  const isUserLogin = useAuth();
  return (
    <div>
      <nav className={s.navbar}>
        <NavLink className={getClassName} to="/">
          &#9742;
        </NavLink>
        {isUserLogin && <NavbarMenu />}
       {isUserLogin ?<UserMenu/> : <NavbarAuth />}
      </nav>
    </div>
  );
};

export default Navbar;
