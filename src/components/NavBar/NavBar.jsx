import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

const NavBar = ({ dark, setDark }) => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        devlmateusfaria
      </NavLink>
      <ul className={styles.links_list}>
        <li className={styles.darkmode_li}>
          <button
            className={styles.darkmode_btn + (dark ? ' ' + styles.active : '')}
            onClick={() => setDark(v => !v)}
            aria-label="Alternar modo escuro"
            tabIndex={0}
            type="button"
          >
            <Icon name={dark ? 'moon' : 'sun'} size="large" />
          </button>
          <NavLink to="/"> <Icon name='home'/> Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects"> <Icon name='lightbulb outline'/> Projetos</NavLink>          
        </li>
        <li>
          <NavLink to="/about"> <Icon name='question circle outline'/> Sobre</NavLink>          
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;