function Login(){
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
        <button>Go to Home page</button>
            </div>
            <div className="box2">
                <h1>Task Managaement</h1>
                <img src="/media/todo-pic.jpg" width="400px"/>
            </div>
        </div>
        
    </div>
    )
}

export default Login
    
    