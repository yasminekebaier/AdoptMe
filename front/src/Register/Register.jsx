import React, { useState } from 'react'
import './register.css'
import axios from "axios";
import Navbar from '../navbar/Navbar'

const Register = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo , setPseudo] = useState('');
  const [email,setEmail] =useState('');
  const [password,setPassword] =useState('');
  const [controlPassword,setcontrolPassword] =useState('');
  const handleRegister =async (e) =>{
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    
    if(password  !== controlPassword ){
      if (password !== controlPassword)
      passwordConfirmError.innerHTML =
        "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}Api/users/register`,
        data: {
          pseudo,
          email,
          password
        },
  
  }).then((res) => {
    console.log(res);
    if (res.data.errors) {
      pseudoError.innerHTML = res.data.errors.pseudo;
      emailError.innerHTML = res.data.errors.email;
      passwordError.innerHTML = res.data.errors.password;
    }else{
      setFormSubmit(true);
    }

    }).catch((err) => console.log(err));
  }
};
  return (
 
        <>
         <Navbar/>
    <div className='register'>
      <img src='/images/imgsign.png' alt='' />
      <section className='slideform'>
    <div className='container'>
      <h2>Register </h2>
      <p>Enter your e-mail and password below to log in to your account </p>
      <form action='' onSubmit={handleRegister}>
      <div className="loginBox"> 
      <input placeholder="Username" className="loginInput" name='pseudo'
      onChange={(e)=> setPseudo(e.target.value)}value={pseudo}/><br/>
            <input type='email' placeholder="Email" className="loginInput" name='email'
            onChange={(e)=> setEmail(e.target.value)}value={email}/><br/>
            <input type='password' placeholder="Password" className="loginInput" name='password' 
             onChange={(e)=> setPassword(e.target.value)}value={password}/><br/>
            <input type='password' placeholder="Password Again" className="loginInput" 
            onChange={(e)=> setcontrolPassword(e.target.value)}value={controlPassword}/><br/>
            <button className="loginButton">Sign Up</button><br/>
            <button className="loginRegisterButton">
              Log into Account
            </button><br/>
            <>
    {formSubmit ? (
  <h4 className='success'>Enregistrement réussi, veuillez-vous connecter</h4>
) : null}
</>
           </div> 

              
      </form>
    </div>
  </section>
      
      
      
        
    </div>
        </>
      
   
    
  )
}

export default Register