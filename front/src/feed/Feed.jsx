import React, { useContext } from 'react'
import './Feed.css'
import Share from "../share/Share";
import Post from '../post/Post';
import {Posts} from '../Data';
import Navbar from '../navbar/Navbar';
import { UIdContext } from '../Routes/AppContext';
import Login from '../login/Login';




const Feed = () => {
  const uid = useContext(UIdContext);
  return (
    <div className='feed'>
      <Navbar/>
      {uid ? (
      <div className="feed">
          <div className="feedWrapper">
          <Share/>
          {Posts.map((p)=>(
          <Post key={p.id} post={p}/>
          ))}
          
          </div> 
        </div>
      ):( <Login/>
      
      
      )}
      
      
     

        

    </div>
  )
}

export default Feed