import React from 'react';
import css from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import {ReactComponent as HomeSvg} from './../../Assets/icon_home.svg';
import {ReactComponent as ProfileSvg} from './../../Assets/icon_profile.svg';

const NavBar = () => {
    let flag = ({isActive}) => isActive ? `${css.nav_menu} ${css.active}` : css.nav_menu;
    return (
        <nav className={css.nav}>
            <div className={css.nav_area}>
                <div className={css.nav_rectangle}>
                    <div className={css.nav_menu}>
                        <NavLink to={`/home`} className={flag}>
                            <HomeSvg/>
                            <div>Главная</div>
                        </NavLink>
                        <NavLink to={`/profile`} className={flag}>
                            <ProfileSvg/>
                            <div>Профиль</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;