import "./App.css";
import Header from "../Header";
import  "../Login/App.css";
import React from 'react';
import {useNavigate} from "react-router-dom";



export default ()=> {
  //Chamada da função para navigate, usaremos para chamado do Button
  let navigate = useNavigate(); 

  return(      
    <div className="container">
       <Header />

<div className="divider">      
      <form className="form" >      
        <h1>Acesso ao Jeraflix</h1>
          <div className="uiform">

            <div className="field"> 
            <label>Login </label>           
              <input type="text" name="username" placeholder="Username" />
            </div>
            <label>E-mail </label> 
            <div className="field">             
              <input type="text" name="email" placeholder="Email"  />
            </div>
            <label>Senha </label> 
            <div className="field">             
              <input type="password" name="password" placeholder="password"  />
            </div>

            <button className="button" // Link do botão para Pagina Principal dos Filmes
         onClick={() =>navigate('/components/Principal')}>
              Login</button>
          </div>
          
        </form>
        </div>
    </div>
    
  );
}
