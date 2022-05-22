import React from "react";
import './styles.css';

    export default({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
              <div className="header--logo">
                  <a href="/">
                  <img src="https://uploaddeimagens.com.br/images/003/867/648/thumb/JeraflixLogo-removebg-preview.png?1652497695" alt="Jeraflix" />
                    </a>
                     </div>
                <div className="header--user">
                <a href="/">
                <img src="https://uploaddeimagens.com.br/images/003/867/654/thumb/logo_usuario.PNG?1652498158" alt="Usuário" />
                    </a>
             
                    </div>

        </header>
    );



}
