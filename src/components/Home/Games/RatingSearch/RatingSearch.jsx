import React, {useState} from 'react';
import css from "./RatingSearch.module.css"
import {ReactComponent as RegularSVG} from "../../../../assets/svg/games/rating_game.svg";

const RatingSearch = (props) => {
    let findGame = props.active ? css.find_game : css.disable
    return (
        <div className={css.content}>
            <div className={css.description_game}>
                <div className={css.svg_area}>
                    <RegularSVG/>
                </div>
                <div className={css.text}>
                    РЕЙТИНГОВАЯ ИГРА 1 НА 1
                </div>
                <button>
                    TAP
                </button>
            </div>
            <div className={findGame}>
                <div className={css.deposit}>

                </div>
                <div className={css.filters}>

                </div>
            </div>
        </div>
    )
}

export default RatingSearch
