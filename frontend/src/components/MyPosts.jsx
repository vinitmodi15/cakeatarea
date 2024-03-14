import React from 'react'
import "./posts.css"
import Navbar from './Navbar'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper';
import Footer from './Footer';



export default function MyPosts() {
  return (

    <>
      <div class="homebody">
      <div className='navhome'>
        <Navbar />
      </div>


      {/* TOp Pic With The Cafe's Name */}
      <header>
        <br />
        <h1 class="p1">CakeAtArea</h1>
        <br />
        <h3 class="p2">Your Go-to Spot for Delicious Eats</h3>

      </header>
      <h1 class="heading">Our Specialities</h1>
      <div id="categoryContainer">

        <div class="cupcake category">


          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrkhOM5JY28Cjc6cOGWvhqCAkCkmA3sTBKGw&usqp=CAU" alt="gm"  /> */}
          <div className="leftCategory">
            <h1 class="cupcake">"Cupcakes"</h1>

          </div>
          <div className="rightCategory"></div>
        </div>

        <div class="cake category">
          {/* <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""  /> */}
          <div className="leftCategory">
            <h1>"Cakes"</h1>

          </div>
          <div className="rightCategory"></div>
        </div>

        <div class="cookie category">

          {/* <img src="https://images.unsplash.com/photo-1560910615-9eaa2e704e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
          <div className="leftCategory">
            <h1>"Cookies"</h1>

          </div>
          <div className="rightCategory"></div>
        </div>

        <div class="icecream category">
          {/* <img src="https://images.unsplash.com/photo-1599038064230-17a52bd8f2f5?ixlib=rb-4.0.3&x  */}
          <div className="leftCategory">
            <h1>"Ice-Cream"</h1>

          </div>
          <div className="rightCategory"></div>
        </div>
      </div>
      <h1 class="Aur-Kuch">AUR KUCH?</h1>

      <div class="swiper1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src="https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1593199970393-10f0f82e2e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG11ZmZpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://plus.unsplash.com/premium_photo-1675435646465-a6fcb77b21a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1605190557072-1fe6a230ee65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1618411640018-972400a01458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9udXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1567171466295-4afa63d45416?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHB1ZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlJTIwY3JlYW0lMjBjb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1583165278997-0250ea5d72e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.unsplash.com/photo-1597403491447-3ab08f8e44dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGljZSUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
        </Swiper>
      </div>
      <Footer/>
      </div>
      
    
      
    </>
  )
}
