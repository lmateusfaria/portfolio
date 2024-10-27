import React from "react";
import styles from "./NavBar.module.css";
import { Icon } from 'semantic-ui-react'

const SideBar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                devlmateusfaria
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink to="/"> <Icon name='home' /> Home</NavLink>

                </li>

                <li>
                    <NavLink to="/projects"> <Icon name='lightbulb outline' /> Projetos</NavLink>
                </li>

                <li>
                    <NavLink to="/about"> <Icon name='question circle outline' /> Sobre</NavLink>
                </li>

            </ul>
        </nav>
    );
};

export default SideBar;