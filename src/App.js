import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import SignUp from './components/signUp';
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <div className="container">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/home" element={<Home/>}/> 
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;