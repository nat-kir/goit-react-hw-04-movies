import React from 'react';
import routes from '../../routes';
import { NavLink } from 'react-router-dom';
import '../../styles/base.scss';

const Navigation = () => {
  return (
    <nav className="Nav">
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        HOME
      </NavLink>
      <NavLink
        exact
        to={routes.movies}
        className="NavLink"
        activeClassName="NavLink--active"
      >
        MOVIES
      </NavLink>
    </nav>
  );
};

export default Navigation;
