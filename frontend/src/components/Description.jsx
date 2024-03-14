import React, { useEffect, useState } from 'react';
import axios from "axios"
import "./Description.css";
import { useParams } from 'react-router-dom';


export default function Description() {

  const [products, setproducts] = useState(null)
  const {category} = useParams();
  console.log(category);


  useEffect(() => {
    const getProducts = async () => {
      let response = await axios.get(`http://localhost:4000/productdes/${category}`);
      console.log(response.data.products);
      setproducts(response.data.products);
    }

    getProducts();

  }, [category]);

  
  return (
    <div className='cardMain'>
      {
        products && products.map((item) => {

          return (
            <div className='descriptionCard'>
              <div className='cardContent'>
                <h2>{item.name}</h2>
                <h3>Price {item.price}</h3>
              </div>
              <img src={item.image} alt="" />

            </div>
          )
        })

      }
    </div>
  )
}