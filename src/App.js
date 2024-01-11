import React, {useState, useEffect} from 'react';
import {Avatar, Button} from "@material-ui/core";
import './App.css';
import Post from './Post';



const BASE_URL = 'http://localhost:8000/'

function App() {

  const [posts, setPost] = useState([]);
  const [OpenSignIn, setOpenSignIn ] = useState(false);
  const [OpenSignUp, setOpenSignUp] = useState(false);

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
      const result = data.sort((a,b) => {
        const t_a = a.timestamp.split(/[-T:]/);
        const t_b = b.timestamp.split(/[-T:]/);
        const d_a = new Date(Date.UTC(t_a[0], t_a[1]-1, t_a[2], t_a[3], t_a[4], t_a[5]));
        const d_b = new Date(Date.UTC(t_b[0], t_b[1]-1, t_b[2], t_b[3], t_b[4], t_b[5]));
        return d_b - d_a
      })
      return result
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
    <div className="app">
      
      <div className="app_header">
        <img className="app_headerImage" src="" alt="instagram" />
      </div>
      <div>
        <Button onClick={() => setOpenSignIn(true)}>Login</Button>
        <Button onClick={() => setOpenSignUp(true)}>Signup</Button>

      </div>

      <div className='app_posts'>
        {
          posts.map(post =>(
            <Post post= {post} />
          ))
        }
      </div>
    </div>

  );
}

export default App;
