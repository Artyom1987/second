import React from 'react';
import classes from './NewPost.module.css';



const Post = (props) => {
    return(
        <div className={classes.post_rev}>
            <div>
            <img  src="https://i.pinimg.com/originals/18/7c/81/187c81c65c012faef5a98c9655e07c64.jpg" alt="photo_user"/>
            <div>post1 </div>

            <div>like {props.like}</div>

            </div>

            <button>Add post</button>
        </div>
    )
    
};
export default Post;
