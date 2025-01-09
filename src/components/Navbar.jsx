import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navLinks}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Homepage
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/new"
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        New Article
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? styles.active : undefined)}
                    >
                        Chi Siamo
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;