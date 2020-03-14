import React from 'react';
import classes from './Profileinfo.module.css';


const Profileinfo = () => {
    return <div>
        <div>
            <img className={classes.Logo}
                 src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
                 alt="asas"/>
        </div>
        <div>
            <img className={classes.fotoclient} src="https://img.moyo.ua/img/products/2346/64_600.png" alt="cot"/>
            <p>description</p>
        </div>


    </div>


};
export default Profileinfo;

