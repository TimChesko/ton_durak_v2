import {motion} from 'framer-motion/dist/framer-motion'
import React, {useState} from "react";
import css from "./Balance.module.css"
import {ReactComponent as TonSvg} from "./../../../Assets/icon_ton_coin.svg"
import {ReactComponent as DurakSvg} from "./../../../Assets/icon_durak_coin.svg"

const Balance = () => {
    let flag = ({isActive}) => isActive ? css.line : undefined;
    const [position, setPosition] = useState(0);
    const toggleSwitch = (e) => {
        switch(e.currentTarget.innerText){
            case "Durak":
                setPosition(1)
                break;
            default:
                setPosition(0)
                break;
        }
    };

    return (
        <div className={css.area}>
            <div onClick={toggleSwitch} className={css.current_games}>
                <TonSvg/>
                <a>TON</a>
            </div>
            <div onClick={toggleSwitch} className={css.current_games}>
                <DurakSvg/>
                <a>Durak</a>
            </div>
            <motion.div data-position={position} className={`${css.line} ${flag}`} layout transition={spring}/>
        </div>
    );
};

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

export default Balance