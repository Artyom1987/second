import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogPush = (props) => {
    let idProps = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink to={idProps} className={classes.active} activeClassName={classes.activeted}> {props.name}
            </NavLink>
        </div>
    );
};

const  Message = (props) =>{
   return ( <div className={classes.message}>{props.message}</div>
    );
};
const Dialogs = (porps) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>

                    <DialogPush name="Edik" id='1'/>
                    <DialogPush name="Vadik" id='2'/>
                    <DialogPush name="Geka" id='3'/>
                    <DialogPush name="Tolya" id='4'/>
                    <DialogPush name="Ruslan" id='5'/>
                    <DialogPush name="Artur" id='6'/>
                </div>
                <div className={classes.messages}>
                   <Message message="Hello" />
                   <Message message='hey' />
                   <Message message='YO' />
                   <Message message='YO' />
                </div>
            </div>


        </div>

    )
};

export default Dialogs;