import React from "react";
import "./App.css"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <div className={"content"}>
                    <Routes>
                        <Route path={"/home/*"} element={<Home/>}/>
                        <Route path={"/profile/*"} element={<Profile/>}/>
                        <Route path={""} element={
                            <Navigate to={"/home"} replace/>
                        }/>
                    </Routes>
                </div>
                <NavBar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
