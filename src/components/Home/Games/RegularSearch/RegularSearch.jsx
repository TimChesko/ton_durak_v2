import React from 'react';
import css from "./RegularSearch.module.css"
import GameElement from "../GameElement/GameElement";
import {ReactComponent as RegularSVG} from '../../../../assets/svg/games/regular_game.svg';

let state = [
    {
        url_photo: "photo",
        nickname: "Tima",
        id_game: "377AB34",
        players: 4,
        players_now: 3,
        amount: 100
    }, {
        url_photo: "photo",
        nickname: "Den",
        id_game: "2342345",
        players: 4,
        players_now: 2,
        amount: 50
    }, {
        url_photo: "photo",
        nickname: "IlYA",
        id_game: "23455234",
        players: 4,
        players_now: 1,
        amount: 30
    }
]


const RegularSearch = (props) => {
    let styleNav = props.active ? css.nav_content : css.nav_disable
    let gamesElements =
        state.map(p => <GameElement infoGames={p}/>)
    return (
        <div className={css.content}>
            <div>
                Game
            </div>
            <nav className={styleNav}>
                <ul>
                    {gamesElements}
                </ul>
            </nav>
        </div>
    )
}

export default RegularSearch;
