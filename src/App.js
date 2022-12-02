import React from "react";
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./Components/Navigation/NavBar";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
        <div className={'app-wrapper'}>
            <div className={"content"}>
                <Routes>
                    <Route path={"/home"} element={<Home/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>
            </div>
            <NavBar/>
        </div>
    </BrowserRouter>
  );
}

export default App;
