

import { BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Register from './Register/Register';
import Feed from './feed/Feed';
import Adopt from './components/Adopt/Adopt';

import { useEffect, useState } from 'react';
import { UIdContext } from './Routes/AppContext';
import axios from 'axios';
import Dressage from './dressage/Dressage';
import Centredressage from './centredressage/Centredressage';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';

function App() {
  const [uid,setUid] = useState(null);
  const dispatch = useDispatch();
  useEffect( ()=>{
    const fetchToken = async()=>{
    await axios({
      method:"get",
      url:`${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials:true
    }).then((res)=> {
      console.log(res);
      setUid(res.data)})
    .catch((err)=>console.log("No token"))
  };
  fetchToken();
  if(uid) dispatch(getUser(uid));
  },[uid])

  return (
   <UIdContext.Provider value={uid}>
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/feed' element={<Feed/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/about' element={<Adopt/>}></Route>
      <Route path='/dressage' element={<Centredressage/>}></Route>

    </Routes>
    </BrowserRouter>
    </UIdContext.Provider>
  )
}

export default App;
