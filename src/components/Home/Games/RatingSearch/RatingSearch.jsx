import React from 'react';
import css from "./RatingSearch.module.css"
import {ReactComponent as RegularSVG} from "../../../../assets/svg/games/rating_game.svg";

const RatingSearch = (props) => {
    let find_game = props.active ? css.nav_content : css.nav_disable
    let arrow_status = props.active ? css.active : null
    return (
        <div className={css.content}>
            <div className={css.first_line}>
                <div className={css.svg_area}>
                    <RegularSVG/>
                </div>
                <div className={css.text}>
                    РЕЙТИНГОВАЯ ИГРА
                </div>
                <div className={`${css.arrow} ${arrow_status}`}>
                    <span/>
                    <span/>
                </div>
            </div>
            <div className={css.second_line}>
                <button>
                    Кнопка поиск
                </button>
            </div>
        </div>
    )
}

export default RatingSearch
