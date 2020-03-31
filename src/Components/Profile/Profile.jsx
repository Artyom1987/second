import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";



const Profile = (props) => {


    return <div>
        <Profileinfo/>
        <MyPosts postData={props.postData} />

    </div>


};
export default Profile;

