import React, { useState } from 'react';

const BakeryWebsite = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Croissant', price: 2.5 },
    { id: 2, name: 'Bagel', price: 3 },
    { id: 3, name: 'Muffin', price: 2 },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h1>Welcome to our Bakery!</h1>

      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BakeryWebsite;
















import React from 'react'
import axios from 'axios'
import "./api.css";
import { useEffect } from 'react'
import { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Movieapi() {
    
    const [movieData, setmovieData] = useState([])
    const [count, setCount] = useState(1)
    let url = `https://api.themoviedb.org/3/movie/upcoming?page=${count}&api_key=47f3fe32e3d173754b75553d610d0b81`
    async function getMovies() {
        const { data } = await axios(url)
        console.log(data.results[0].original_title)
        setmovieData(data.results)
    }
        function nextPage() {
            setCount(count+1)
        

    }
    useEffect(() => {
        getMovies();
    }, [count])


 
    const [tvData, settvData] = useState([])
    const [counts, setCounts] = useState(1)
    let tv = `https://api.themoviedb.org/3/tv/popular?page=${counts}&api_key=47f3fe32e3d173754b75553d610d0b81`
    
    async function gettv() {
        const { data } = await axios(tv)
        console.log(data.results[0].original_name)
        settvData(data.results)
    }
        function nextPages() {
            setCounts(counts+1)
        

    }
    useEffect(() => {
        gettv();
    }, [counts])






    return ( 

    <>
    <h1> UPCOMMING MOVIES</h1>
    <button onClick={nextPage}>next</button><br /><br/><br/>
        <div class="row">
           

          
                {
                    movieData.map((dt) => (
                     <div class="mainbox">
                         <div>
                            <img class='wer' src ={`http://image.tmdb.org/t/p/w200${dt.poster_path}`} /></div>
                             <div class="styles">
                             <CircularProgressbar value={dt.vote_average*10} text={`${dt.vote_average*10}%`} />
                           {/* <h3 >{dt.vote_average*10}</h3> */}
                           </div>
                             
                          <div class="box"> 
                            <h3>{dt.original_title}</h3>
                           <h3>{dt.release_date}</h3>
                         
                          </div>
                           </div>
                           
                           
                    ))
                }
           
        </div> 



<h1>TV SHOWS</h1>
 <button onClick={nextPages}>next</button><br />
        <div class="row">
       

          
           {
               tvData.map((dts) => (
                <div class="mainbox">
                    <div>
                       <img class='wer' src ={`http://image.tmdb.org/t/p/w200${dts.poster_path}`} />
                        </div>
                       
                     <div class="box"> 
                       <h3>{dts.original_name}</h3>
                      {/* <h3>{dt.release_date}</h3>
                      <h3 >{dt.vote_average*10}</h3> */}
                     </div>
                      </div>
                      
                      
               ))
           }
      
   </div> 



        </>
    )

    
}