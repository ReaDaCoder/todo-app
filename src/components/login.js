import { useNavigate, Link} from 'react-router-dom';
function Login(){

    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform login logic here
      navigate('/home');
    };

    return(
        <div>
        <h1>Log in to your Account</h1>
        <div className="login-box">
            <div className="box1">
            <form>
            <input type="text" placeholder="Email"/><br/>
            <input type="text" placeholder="Password"/> <br/>
            <button>Log in</button>
        </form>
        <button onClick={handleLogin}>Go to Home page</button>
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
    
    