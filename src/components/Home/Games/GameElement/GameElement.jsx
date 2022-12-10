import React from "react"
import css from "./GameElement.module.css"

const GameElement = (props) => {
    let infoGame = props.infoGames
    let check = () => console.log("hi")
    return (
        <li className={css.content} key={infoGame.id_game} onClick={check}>
            <div>
                {infoGame.url_photo}
            </div>
            <div>
                {infoGame.nickname}
            </div>
            <div>
                {infoGame.id_game}
            </div>
            <div>
                {infoGame.players}
            </div>
            <div>
                {infoGame.amount}
            </div>
        </li>
    )
}

export default GameElement