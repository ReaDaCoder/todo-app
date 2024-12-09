import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

function SignUp(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const postData = () =>{
        axios.post('http://localhost:3000/users', {
          name,
          surname,
          email,
          password,
          confirmPassword
        }).then((res)=>{
          alert('Registered Successfully')
          navigate('/HomePage');
        }).catch((err)=>{
          alert('Failed to register user due to :'+ err.message);
        });
  
      }
      
        const [error, setError] = useState("");

        function RegisterUser(ev) {
            ev.preventDefault();
            let details = {name, surname, email, password, confirmPassword};
            console.log(details);
            postData();
          
          }
  
    return(
        <div className="signup-box">
            <h1>Sign up</h1>
            <form onSubmit={RegisterUser}>
            <input
          type="text"
          name="name"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp