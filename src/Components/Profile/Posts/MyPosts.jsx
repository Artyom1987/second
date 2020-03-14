import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/NewPost";



const MyPosts = (props) => {
return (
    <div className={classes.foot}>
       <textarea>write new post</textarea>
        <button>add post</button>
        <div>post
        </div>
        <Post like=" 333" />
        <Post like =' 555' />


    </div>
  );
};
export default MyPosts;