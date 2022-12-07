import React, {useState} from 'react';
import css from "./Games.module.css"
import {motion, useMotionValue, useTransform} from "framer-motion";

const Games = () => {
    let [viewRating, setViewRating] = useState(false)
    let [viewGames, setViewGames] = useState(false)
    let openRating = () => {
        if (viewGames) {
            setViewGames(!viewGames)
        }
        setViewRating(!viewRating);
    };
    let openGames = () => {
        if (viewRating) {
            setViewRating(!viewRating)
        }
        setViewGames(!viewGames);
    };
    let path = window.location.pathname
    let styleRating = `${css.rating} ${(path === "/home/durak") ? css.rating_disable : viewRating ? css.rating_active : null}`
    let styleGames = `${css.games} ${viewGames ? css.games_active : null}`

    // const y = useMotionValue(1)
    // const resize = useTransform(y, [0, 10], [50, 200])

    return (
        <div className={css.content}>
            <motion.div
                className={styleRating} onClick={openRating}>
            </motion.div>

            <motion.div className={styleGames} onClick={openGames}>
            </motion.div>
        </div>
    )
}

export default Games