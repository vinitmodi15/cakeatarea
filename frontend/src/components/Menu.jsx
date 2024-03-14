import React from 'react'
import Navbar from './Navbar'
import "./menu.css"
import Footer from './Footer'

export default function Menu() {
  return (
    <>
    <div class="menubody">
      <div className='navhome'>
        <Navbar />
      </div>

      <div className='menumain'>
        <div className='head'>
          <h1 className='menu'>Our Menu</h1>
        </div>
      </div>


      <p className='bakery'>Bakery</p>

      <div class="category1">
        <div class="cake2">
          <img src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} class="img1" />
          <h2>Cake</h2>
          <p>Rs. 350 (500gm)</p>
        </div>
        <div class="muffin">
          <img src="https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVmZmlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Muffins</h2>
          <p>Rs. 70 (per piece)</p>
        </div>
        <div class="cookie2">
          <img src="https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2tpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Cookies</h2>
          <p>Rs. 150 (500gm)</p>
        </div>
      </div>

      <div class="category2">
        <div class="bread">
          <img src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Bread</h2>
          <p>Rs. 50 (per packet)</p>
        </div>
        <div class="brownie">
          <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Brownies</h2>
          <p>Rs. 100 (250gm)</p>
        </div>
        <div class="rusk">
          <img src="https://images.unsplash.com/photo-1684081856180-d1ec0662cd0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Rusk</h2>
          <p>Rs. 80 (1Kg)</p>
        </div>
      </div>

      <div class="category3">
        <div class="cream-roll">
          <img src="data:image/jpeg;base64,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" alt="" height={230} width={230} />
          <h2>Cream Roll</h2>
          <p>Rs. 20 (per piece)</p>
        </div>
        <div class="pie">
          <img src="https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Pie</h2>
          <p>Rs. 50 (100gm)</p>
        </div>
        <div class="donuts">
          <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9udXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Donuts</h2>
          <p>Rs. 150 (500gm)</p>
        </div>
      </div>

      <div class="category4">
        <div class="cheesecake">
          <img src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Cheesecake</h2>
          <p>Rs. 200 (500gm)</p>
        </div>
        <div class="pudding">
          <img src="https://images.unsplash.com/photo-1543574687-5209713c0e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHB1ZGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Pudding</h2>
          <p>Rs. 70 (100gm)</p>
        </div>
        <div class="biscuits">
          <img src="https://images.unsplash.com/photo-1606312619139-03f9d5d27e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlzY3VpdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" height={230} width={230} />
          <h2>Biscuits</h2>
          <p>Rs. 80 (1Kg)</p>
        </div>
      </div>

      <p class="dessert">Desserts</p>
      <div class="category5">
        <div class="cone">
          <img src="https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=612x612&w=0&k=20&c=BXObHKE0gbA2autsMZGFeEmK2xGKYdJBbM1_ig0Boyk=" alt="" height={230} width={230} />
          <h2>Icecream Cone</h2>
          <p>Rs. 200 (500gm)</p>
        </div>
        <div class="kulfi">
          <img src="https://media.istockphoto.com/id/657073780/photo/rajwari-or-rajwadi-sweet-kesar-badam-pista-kulfi-or-ice-cream-candy.jpg?s=612x612&w=0&k=20&c=cXhI8hVEhYc5inbPXt-YWbUYjlJlGC2TdRd_Xkn56Ig=" alt="" height={230} width={230} />
          <h2>Kulfi</h2>
          <p>Rs. 70 (100gm)</p>
        </div>
        <div class="chocolates">
          <img src="https://media.istockphoto.com/id/121282958/photo/chocolate.jpg?s=612x612&w=0&k=20&c=1xeIgyXLCGmFkIvW0rUvglDvi_3BBu-OsUtYRRl0OQU=" alt="" height={230} width={230} />
          <h2>Chocolates</h2>
          <p>Rs. 80 (1Kg)</p>
        </div>
      </div>


      <div class="category6">
        <div class="mousse">
          <img src="https://media.istockphoto.com/id/1196153047/photo/homemade-dark-chocolate-mousse.jpg?s=612x612&w=0&k=20&c=Xod6qlF8NM2A_FN3pPN27yfzoLbJOFVXpIgdjsDKEJE=" alt="" height={230} width={230} />
          <h2>Chocolate Mousse</h2>
          <p>Rs. 200 (500gm)</p>
        </div>
        <div class="espresso">
          <img src="https://media.istockphoto.com/id/528282520/photo/delicious-morning-fresh-coffee.jpg?s=612x612&w=0&k=20&c=5YnPhP_GdCTjUkIh5PGlhVjXezhbDIwYrPZEUKNnvtA=" alt="" height={230} width={230} />
          <h2>Espresso</h2>
          <p>Rs. 70 (100gm)</p>
        </div>
        <div class="ice-tea">
          <img src="https://media.istockphoto.com/id/1204404992/photo/lemon-ice-tea.jpg?s=612x612&w=0&k=20&c=h-kF_PzJCl4fyvZEcjZ1kqn74rsQwxeALl1pkWzvPp4=" alt="" height={230} width={230} />
          <h2>Ice-Tea</h2>
          <p>Rs. 80 (1Kg)</p>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  )
}
