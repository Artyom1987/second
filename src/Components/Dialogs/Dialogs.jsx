import React from "react";
import classes from "./Dialogs.module.css"
import DialogPush from "./DialogPush/DialogsPush";
import Message from "./Message/Message";







const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(el => <DialogPush name={el.name} id={el.id}/>);
    let messageElments = props.state.messages.map(el => <Message message={el.message} id={el.id}/>);
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={classes.messages}>
                    {messageElments}
                </div>
            </div>


        </div>

    )
};

export default Dialogs;