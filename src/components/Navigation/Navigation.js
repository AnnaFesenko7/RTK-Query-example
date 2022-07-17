import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    color: 'orange',
  };

  return (
    <nav className={style.nav}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/"
      >
        Pokemons
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/todos"
      >
        Todos
      </NavLink>
    </nav>
  );
};
export default Navigation;
