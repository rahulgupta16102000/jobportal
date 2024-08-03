// frontend/src/components/LoginForm.js
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { employeeService } from '../_service/empolyee.service';
import './AdminDashboard.css'

const LoginForm = ({ history,onLogin }) => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin =  (e) => {
    e.preventDefault();

    // Implement your login logic here
    const loginData = { username, password };

    // Send login request to the backend
    if(username && password){
     employeeService.login(username, password)
     .then((res)=>{console.log("res",res); onLogin(res);
     navigate('/Jobs')})
     .catch((err)=>console.log(err))
    }
    else{
        alert('please put name and password')
    }
  };

  useEffect(() => {
    let usersInfo  = localStorage.getItem("userInfo") 
    console.log("usersInfo",usersInfo);
    if(usersInfo){
      navigate('/jobs')
    }
  }, [history])
  
  return (
    <div>
    <form onSubmit={handleLogin}>
    <div style={{display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
    alignItems: 'center'
}}>
      <label>
        Username: </label>
        <input className='inputfields' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div  style={{display: 'flex',
    gap: '2rem',
    justifyContent: 'space-between',
    alignItems: 'center'
}}>
      <label>
        Password: </label>
        <input className='inputfields' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
      <button type="submit">Login</button>
      <button type='button' onClick={()=>{navigate("/registration")}}>signUp</button>
      </div>
    </form>
      </div>
  );
};

export default LoginForm;
