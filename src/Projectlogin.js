import React from 'react';
import './style.css';
import mylogo from './loggg.png';
//import {Link} from "react-router-dom";
import './App.css';
import image  from './bg.png';

export default class Projectlogin extends React.Component {
    render() {
    
        const mystyle={
            backgroundImage:`url('${image}')`,
            height:'120vh',
            marginTop:'-20px',
            backgroundSize:'cover',
            backgroundRepeat: 'no-repeat',
        };
    return(
        <div style={mystyle}>
<img src={mylogo} alt="logo" className="omg1"/>

        <form className='d'>
        <h1 style={{textAlign:"center",marginLeft:'-500px',paddingTop:'60px',fontSize:'50px'}}>LOGIN</h1>
        <h2 style={{textAlign:"center",paddingLeft:'300px',marginTop:'-50px',color:'#00B2FF'}}>Create Account</h2>
            <input className="h" type="text" placeholder="E-mail Id" style={{marginLeft:'170px',textAlign:"center"}}/><br></br><br></br>
            <input className="h" type="password" placeholder="Password" style={{marginLeft:'170px',textAlign:"center"}}/><br></br><br></br><br></br><br></br><br></br>
<button className='co' style={{background:"blue",color:"white",marginLeft:'60%'}}>Log In</button>             
      </form>
        </div>
    )
  }
}
