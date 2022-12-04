import React from 'react';
import css from "./Home.module.css"
import Balance from "./Balance/Balance";
import Inventory from "./Inventory/Inventory";
import Games from "./Games/Games";

const Home = () => {
    return (
        <div className={css.content}>
            <Balance/>
            <Inventory/>
            <Games/>
        </div>
    )
}

export default Home