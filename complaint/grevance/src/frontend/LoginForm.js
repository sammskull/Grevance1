
import '../App.css';
import React, { useState } from 'react';
import axios from "axios";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 


  async function handleSubmit(e){
    e.preventDefault();

    try{

        await axios.post("http://localhost:5000/",{
            username,password
        })
        .then(res=>{
            if(res.data==="exist"){
              setError('');
              handleLogin(username);
                //logic
            }
            else if(res.data==="notexist"){
                //logic to handle if user does not exist 
                
                
            }
        })
        .catch(e=>{
            setError('Please fill in both username and password.');
            console.log(e);
        })

    }
    catch(e){
        console.log(e);

    }

}



  return (
    <div className="login-form">

      <h2>GRIEVANCE LOGIN</h2>
      {error && <p className="error">{error}</p>}
      <form action = "POST" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" type="submit">Login</button>
      </form>
    </div>
  );
  
};

export default LoginForm;


