import React from 'react';
import css from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    let flag = ({isActive}) => isActive ? css.active : css.nav_menu;
    return (
        <nav className={css.nav}>
            <div className={css.nav_area}>
                <div className={css.nav_rectangle}>
                    <div className={css.nav_menu}>
                        <NavLink to={"/home"}  className={flag}>Главная</NavLink>
                        <NavLink to={"/profile"} className={flag}>Профиль</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar