import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogPush = (props) => {
    let idProps = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink to={idProps} className={classes.active} activeClassName={classes.activeted}>
                {props.name}
            </NavLink>
        </div>
    );
};



export default DialogPush;