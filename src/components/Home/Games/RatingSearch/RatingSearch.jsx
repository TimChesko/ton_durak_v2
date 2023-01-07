import React from 'react';
import css from "./RatingSearch.module.css"
import {ReactComponent as RegularSVG} from "../../../../assets/svg/games/rating_game.svg";

const RatingSearch = (props) => {
    let second_line = props.active ? css.second_line : `${css.second_line} ${css.hide}`
    let arrow_status = props.active ? css.active : null
    return (
        <div className={css.content}>
            <div className={css.first_line}>
                <div>
                    <RegularSVG/>
                </div>
                <div>
                    РЕЙТИНГОВАЯ ИГРА
                </div>
                <div className={`${css.arrow} ${arrow_status}`}>
                    <span/>
                    <span/>
                </div>
            </div>
            <div className={second_line}>
                <button>
                    Кнопка поиск
                </button>
            </div>
        </div>
    )
}

export default RatingSearch
