  
import React, {useState}from 'react';
import './styles.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';


export default ({title, items}) =>{

    const [scrollX, setScrollX]= useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);//Pega o tamanho da tela divide por 2 para quando clicar gerar o movimento para esquerda.
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 130
        if(window.innerWidth - listW > x)//tamanho da tela - tamanho da lista para chegar no fim da direita
        {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

   
    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize:50}} />
            </div>

            <div className="movieRow-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize:50}} />
            </div>
                       
            <div className="movieRow--listarea">
                <div className="movieRow--list"style={{
                     marginLeft :scrollX,
                     width: items.results.length * 150 // Quantidade de filmes na lista ->Calculo para tamanho da lista
                   
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">    
                            <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}