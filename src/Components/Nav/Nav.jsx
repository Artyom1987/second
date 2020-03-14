/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={classes.content}>
        <div className={classes.navpadding}>
            <NavLink className={classes.nav} to="/Profile" activeClassName={classes.activelink}> Profile</NavLink>
        </div>

        <div className={classes.navpadding}>
            <NavLink className={classes.nav} to="/Dialogs" activeClassName={classes.activelink}> Message</NavLink>
        </div>
        <div className={classes.navpadding}>
            <NavLink className={classes.nav} to="/News" activeClassName={classes.activelink}> News</NavLink>
        </div>
        <div className={classes.navpadding}>
            <NavLink className={classes.nav} to="/Music" activeClassName={classes.activelink}> Music</NavLink>
        </div>
        <div className={classes.navpadding}>
            <NavLink className={classes.nav} to="/Settings" activeClassName={classes.activelink}> Settings</NavLink>
        </div>
    </nav>


};
export default Nav;

