import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Route exec path="/Dialogs" component={Dialogs}/>
                    <Route exec path="/Profile" component={Profile}/>
                    <Route exec path="/News" component={News}/>
                    <Route exec path="/Music" component={Music}/>
                    <Route exec path="/Settings" component={Settings}/>


                </div>

            </div>
        </BrowserRouter>
    );

};
export default App;