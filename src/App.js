import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <BrowserRouter>
        <Routes>

          <Route exact path="/" ></Route>
          <Login/>

          <Route path="/home"> 
          <Home/>
          </Route>

          <Route path="/signUp">
            <SignUp/>
          </Route>

        </Routes>
        </BrowserRouter>
      </div>
    </Router>
  );
}

export default App;

