import { NavLink } from 'react-router-dom';
import s from './NavbarAuth.module.css'


const NavbarAuth = () => {
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };
  return (
    <div className={s.authMenu}>
      <NavLink to="/register" className={getClassName}>
        Register &#9998;
      </NavLink>
      <NavLink to="/login" className={getClassName}>
        Login &#10004;
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
