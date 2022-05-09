import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


const Navbar=()=>{
    return <div style={{backgroundColor:'brown'}} className="text-center">

        <h1>React Meals</h1>
        
        <BrowserRouter >
            
                <Link to ={"/Home"} style={{margin:'10px',color:'white',textDecoration:'none'}}>Home</Link>
                <Link to={"/Order"} style={{margin:'10px',color:'white',textDecoration:'none'}}>Order</Link>
                <Link to={"/Contact Us"} style={{margin:'10px',color:'white',textDecoration:'none'}}>Contact Us</Link>
         
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
}

export default Navbar;

