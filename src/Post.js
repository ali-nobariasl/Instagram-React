import React, {useState, useEffect} from "react";
import './Post.css'

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