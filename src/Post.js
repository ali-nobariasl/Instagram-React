import React, {useEffect, useState} from "react";
import './Post.css' 
import userEvent from "@testing-library/user-event";

const BASE_URL = 'http://localhost:8000/';

function Post({post}){


    const [ imageUrl, setImageUrl ] =useState('')

    useEffect(() => {
        if(post.image_url_type == 'absolute'){
            setImageUrl(post.image_url)
        }else{
            setImageUrl(BASE_URL + post.image_url)
        }
    },[])


    return (
        <div className="post"> 
            <img className="post_image" src={imageUrl} > </img>
        </div>
    )
}


export default Post