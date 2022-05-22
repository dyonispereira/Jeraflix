import React from "react";
import {Routes, Route}from "react-router-dom" ;
import Login from './components/Login';
import Principal from "./components/Principal";

function rotas (){
    return(  
        <Routes>
            <Route   index element={<Login />}/>
            <Route  path="/Principal" element={<Principal />}/>
            <Route    element={<teste />}/>
        </Routes>        
    );
}
export default rotas;
