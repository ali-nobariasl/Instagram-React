import React, {useState, useEffect} from "react";
import './Post.css'
import {Avatar, Button} from "@material-ui/core";

const BASE_URL = 'http://localhost:8000/';

function Post({ post, authToken, authTokenType, username }) {

    const [imageUrl, setImageUrl] = useState('')
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
  
    useEffect(() => {
      if (post.img_url_type == 'absolute') {
        setImageUrl(post.img_url)
      } else {
        setImageUrl(BASE_URL + post.img_url)
      }
    }, [])
  
    useEffect(() => {
      setComments(post.comments)
    }, [])


    return (
        <div className="post"> 
            <div className="post_header">
              <Avatar alt="Ali" src=""/>
              <div className="post_headerInfo">
                <h3>{post.user.username}</h3>
                <Button className="post_delete">Delete</Button>
              </div>
            </div>
            
            <img className="post_image" src={imageUrl} /> 
            <h4 className="post_text"> {post.caption} </h4>
            <div className="post_comment">
                {
                    post.comments
                }
            </div>

        </div>


    )
}


export default Post