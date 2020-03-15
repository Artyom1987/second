import React from "react";
import classes from "./Dialogs.module.css"
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

const  Message = (props) =>{
   return ( <div className={classes.message}>{props.message}</div>
    );
};
let dialogData = [
    { id:'1',name:'Edik'},
    { id:'2',name:'Vadik'},
    { id:'3',name:'Jeka'},
    { id:'4',name:'Tolya'},
    { id:'5',name:'Kostya'},
    { id:'6',name:'Sasha'},
    ];

let messageData =[
    { id:'1' ,message:'Hello'},
    { id:'2' ,message:'hey'},
    { id:'3' ,message:'YO'},
    { id:'4' ,message:'YO'},



];
let dialogElements = dialogData.map( el =>  <DialogPush name={el.name} id={el.id}/>

);
const Dialogs = (porps) => {
    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogElements}

                    <DialogPush name={dialogData[0].name} id={dialogData[0].id}/>
                    <DialogPush name={dialogData[1].name} id={dialogData[1].id}/>
                    <DialogPush name={dialogData[2].name} id={dialogData[2].id}/>
                    <DialogPush name={dialogData[3].name} id={dialogData[3].id}/>
                    <DialogPush name={dialogData[4].name} id={dialogData[4].id}/>
                    <DialogPush name={dialogData[5].name} id={dialogData[5].id}/>
                </div>
                <div className={classes.messages}>
                   <Message message={messageData[0].message} id={messageData[0].id} />
                   <Message message={messageData[1].message} id={messageData[1].id} />
                   <Message message={messageData[2].message} id={messageData[2].id} />
                   <Message message={messageData[3].message} id={messageData[3].id} />
                </div>
            </div>


        </div>

    )
};

export default Dialogs;