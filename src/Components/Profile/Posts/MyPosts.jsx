import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/NewPost";





const MyPosts = (props) => {
    const postDataSet = props.postData.map(el => <Post message={el.message} likecount={el.likecount}/>);

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
                {postDataSet}
            </div>


        </div>
    );
};
export default MyPosts;