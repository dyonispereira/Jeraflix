import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import  './styles.css';
import FeaturedMovie from "../FeaturedMovie";
import Header from "../Header";
import MovieRow from "../MovieRow";


//function App() {

export default ()=> {
 
 

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);// Se verdadeiro Header ficará preto, caso false não aparecerá 

  useEffect(() =>{

    const loadAll = async () =>{
      //Pegando toda a lista dos filmes

      let list  = await  Tmdb.getHomeList();
      setMovieList(list);
      //Pegando a Lista

      let originals = list.filter(i=> i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);


    }
    loadAll();


  },[]);

  useEffect(() =>{

    const scrollListener = () => {
      if(window.scrollY > 10){// Se scroll vertical
        setBlackHeader(true);

      } else {
        setBlackHeader(false);
      }

    }
    window.addEventListener('scroll', scrollListener);//Quando a tela tiver qquer movimento de scroll
 },[]);


  return (
    
  <div className="page">




    <Header black={blackHeader}/>


{featuredData && 
        <FeaturedMovie item ={featuredData}/>
    }

   
    
    <section className="lists">
      {movieList.map((item, key) =>(
        <div>
         <MovieRow key={key} title={item.title} items={item.items}/>

        </div>

      ))}      
    </section>




    
<footer>

  Desenvolvido para Desafio JERA <br/>
  Dados pegos do site themoviedb.org <br/>
  Direitos de imagem e semelhança Netflix <br/>




</footer>


    </div>


  );  
}



/*export default App;
{movieList.length <= 0 &&
      <div className="loading">
      <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading"></img>
    </div>
  }*/




