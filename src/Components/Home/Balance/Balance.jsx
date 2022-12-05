import {motion} from 'framer-motion'
import React, {useState} from "react";
import css from "./Balance.module.css"
import {ReactComponent as TonSvg} from "./../../../Assets/icon_ton_coin.svg"
import {ReactComponent as DurakSvg} from "./../../../Assets/icon_durak_coin.svg"
import {NavLink, useLocation} from "react-router-dom";

const Balance = () => {
    let spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    let path = useLocation().pathname
    let [position, setPosition] = useState(path === "/home/durak" ? 1 : 0);
    let toggleSwitch = (e) => (e.currentTarget.innerText === "Durak") ? setPosition(1) : setPosition(0)
    let isActive = ({isActive}) => isActive ? `${css.current_games} ${css.active}` : css.current_games;

    return (
        <div className={css.area}>
            <NavLink to={"/home/ton"} className={isActive} onClick={toggleSwitch}>
                <TonSvg/>
                <div>TON</div>
            </NavLink>
            <NavLink to={"/home/durak"} className={isActive} onClick={toggleSwitch}>
                <DurakSvg/>
                <div>Durak</div>
            </NavLink>
            <motion.div data-position={position} className={`${css.line}`} layout transition={spring}/>
        </div>
    );
};

export default Balance