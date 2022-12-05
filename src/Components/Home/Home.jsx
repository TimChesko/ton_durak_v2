import React from 'react';
import css from "./Home.module.css"
import Balance from "./Balance/Balance";
import Inventory from "./Inventory/Inventory";
import Games from "./Games/Games";
import {Navigate, Route, Routes} from "react-router-dom";

const Home = () => {
    return (
        <div className={css.content}>
            <Balance/>
            <Inventory/>
            <Routes>
                <Route path={"/ton"} element={<Games valuePlay={"ton"}/>}/>
                <Route path={"/durak"} element={<Games valuePlay={"durak"}/>}/>
                <Route path={"/"} element={
                    <Navigate to={"/home/ton"} replace/>
                }/>
            </Routes>
        </div>
    )
}

export default Home