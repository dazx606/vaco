import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.link}>
                <NavLink to="/">
                    <li className={styles.list}>My Blog</li>
                </NavLink>
                
            </ul>
            <Outlet />
        </nav>
    )
}

export default NavBar;
