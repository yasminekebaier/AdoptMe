import React from 'react'
import './Post.css'
import {MdOutlineMoreVert } from "react-icons/md";
import { Users } from '../Data';

const Post = ({post}) => {
    console.log(post)
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
   
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((U)=> U.id ===post.userId)[0].profilePicture}
                    alt=''/>
                    <span className='postUsername'>
                    {Users.filter((U)=> U.id ===post.userId)[0].username}
                    </span>
                    <span className='postDate'>{post.date}</span>
                    </div>
                    <div className="postTopRight">
                    <MdOutlineMoreVert/>

                    </div>
            


            </div>
            <div className="postCenter">
                <span className='postText'>{post.desc}</span>
                <img className='postImg' src={post.photo} alt=''/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    
                    <img className='likeIcon' src='images/heart.png' alt=''/>
                    <span className='postLikeCounter'> {post.like}</span>
                </div>
                <div className='postBottomRight'>
                    <span className="postCommentText">{post.comment}</span>
                    <button className='btn3'>Demmander l'adoption</button>
                </div>

                
            </div>
        </div>

    </div>
  )
}

export default Post