import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/NewPost";

let postData =[
    { id:'1' ,message:'hi is my first post',likecount:'22'},
    { id:'2' ,message:'Hello',likecount:'33'},
    { id:'3' ,message:'bye',likecount:'44'},
    { id:'4' ,message:'YO',likecount:'55'},



]

const MyPosts = (props) => {
return (
    <div className={classes.foot}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea>write new post</textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
        </div>
        <div className={classes.post}>
            <Post message={postData[0].message} likecount={postData[0].likecount} />
            <Post message={postData[1].message} likecount={postData[1].likecount} />
        </div>


    </div>
  );
};
export default MyPosts;