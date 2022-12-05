import React from 'react';
import css from "./Games.module.css"

const Games = (props) => {
    let play = props.valuePlay
    return (
        <div className={css.content}>
            {play}
        </div>
    )
}

export default Games