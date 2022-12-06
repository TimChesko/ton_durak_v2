import React, {useState} from 'react';
import css from "./Games.module.css"

const Games = (props) => {
    let play = props.valuePlay
    let [state, setState] = useState({visible: false})
    let handleClick = () => handleClick.bind(setState({ visible: !state.visible }));

    return (
        <div className={css.content}>
            <div className={css.rating} onClick={handleClick}>
                {state.visible ? "Спрятать" : "Показать"}
            </div>
            <div className={css.default}>

            </div>
        </div>
    )
}

export default Games