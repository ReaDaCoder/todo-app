import React, { useState } from "react"
import { useNavigate, Link} from 'react-router-dom';


function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if(validation()){
    
          fetch(`http://localhost:3000/users?email=${email}`).then((res)=>{
            if (!res.ok) {
              throw new Error('Failed to fetch');
          }
          return res.json();
    
          }).then((resp)=>{
            console.log(resp);
    
            if (resp.length === 0){
              alert('Please enter valid user');
            }else {
              let found = false; 
              for (let i = 0; i < resp.length; i++) {
                const user = resp[i];
            
                if (user.password === password) {
                  navigate('/home');
                  found = true;
                  break; 
                }
              }
            
              if (!found) {
                alert('Please enter valid credentials');
              }
            }
            
          }).catch((err)=>{
            alert('Login failed due to : '+err.message);
          });
    
        }
    };

    const validation=()=>{
        let result =true;
        if(email === '' || email === null){
          result = false;
          alert("Please enter your email");
        }
        if(password === '' || password === null){
          result = false;
          alert("Please enter your name");
        }
        return result;
        }

    return(
        <div>
        <h1>Log in to your Account</h1>
        <div className="login-box">
            <div className="box1">
            <form onSubmit={handleLogin}>
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/> <br/>
            <button onClick={handleLogin}>Log in</button>
        </form>
        <button >Go to Home page</button>
        <br/>
        <Link to="signUp">Don't have an account : Sign Up</Link>
            </div>
            <div className="box2">
                <h1>Task Management</h1>
                <img src="/media/todo-pic.jpg" width="400px"/>
            </div>
        </div>
        
    </div>
    )
}

export default Login
    
    