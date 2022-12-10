import React, {useState} from 'react';
import css from "./Games.module.css"
import {useLocation} from "react-router-dom";
import RatingSearch from "./RatingSearch/RatingSearch";
import RegularSearch from "./RegularSearch/RegularSearch";

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
    let path = useLocation().pathname
    let styleRating = `${css.rating} ${(path === "/home/durak") ? css.rating_disable : viewRating ? css.rating_active : null}`
    let styleGames = `${css.games} ${viewGames ? css.games_active : null}`

    return (
        <div className={css.content}>
            <div className={styleRating} onClick={openRating}>
                <RatingSearch active={viewRating}/>
            </div>

            <div className={styleGames} onClick={openGames}>
                <RegularSearch active={viewGames}/>
            </div>
        </div>
    )
}

export default Games