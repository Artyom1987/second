import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                < Header/>
                <Nav/>
                <div className={"app-wrapper-content"}>
                    <Route exec path="/Dialogs" render={() => < Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exec path="/Profile" render={() => < Profile state={props.state.postPage}/>}/>
                    <Route exec path="/News" component={News}/>
                    <Route exec path="/Music" component={Music}/>
                    <Route exec path="/Settings" component={Settings}/>
                </div>

            </div>
        </BrowserRouter>
    );

};
export default App;