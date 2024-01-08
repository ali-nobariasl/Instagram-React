import logo from './logo.svg';
import React,{useState,useEffect } from 'react';
import './App.css';
import Post  from './Post';


const BASE_URL = 'http://localhost:8000/';

function App() {

  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch(BASE_URL+'post/get_all')
    .then(response =>{
      const json = response.json()
      console.log(json);
      if(response.ok){
        return json
      }
      throw response
    })
    .then(data => {
      setPost(data)
    })
    .catch(err => {
      console.log(err);
      alert(err)
    })
  },[])

  return (
    <div className="App">
      <div className='app_posts'>
        {
          posts.map(post =>(
            <Post post= {post } />
          ))
        }
      </div>
    </div>
  );
}

export default App;
