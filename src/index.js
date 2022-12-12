import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
import Project from "./Project";
import Projectlogin from "./Projectlogin";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
//import projectlogin from "./projectlogin";
export default function RouteApp(){
    return (
     <Router>
        <Routes>
            <Route path="/" element={<Project/>}></Route>
            <Route path="/Projectlogin" element={<Projectlogin/>}></Route>
        </Routes>
     </Router>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouteApp />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
