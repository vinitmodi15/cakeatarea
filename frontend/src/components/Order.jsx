import "./order.css"
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const order = () => {

  return (
    <>
      <div className="kuchbhi">
        <div className='ordermain'>

          <div class="navhome">
            <Navbar />
          </div>

          <div class="order">
            <div class="header">
              <h1>Order Now</h1>
            </div>

          </div>

          <div className="btn">
            <button >Pickup, ASAP(in 15 min.) </button>
          </div>
          <br />
          <br />
          <br />

          {/* --------------------------------------  Category Section Start --------------------------------------------- */}
          <div className=''>
            <div class="category">
              <div className="category_heading">
                <h2>ALL DAY EVERYDAY</h2>
                <h3>BAKERY</h3>
              </div>
            </div>
              <div className='categoryMainDiv'>
            <Link to="/order/bakery/Cakes">
                <div className='categoryBox'>
                  <h2>Cake</h2>
                  <h3>Rs. 350</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Muffins">
                <div className='categoryBox'>
                  <h2>Muffin</h2>
                  <h3>Rs. 70</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Cookies">
                <div className='categoryBox'>
                  <h2>Cookies</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Bread">
                <div className='categoryBox'>
                  <h2>Bread</h2>
                  <h3>Rs. 50</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Brownie">
                <div className='categoryBox'>
                  <h2>Brownies</h2>
                  <h3>Rs. 100</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Rusk">
                <div className='categoryBox'>
                  <h2>Rusk</h2>
                  <h3>Rs. 80</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Cream Roll">
                <div className='categoryBox'>
                  <h2>Cream Roll</h2>
                  <h3>Rs. 20</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Pie">
                <div className='categoryBox'>
                  <h2>Pie</h2>
                  <h3>Rs.50</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Donuts">
                <div className='categoryBox'>
                  <h2>Donuts</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Cheesecake">
                <div className='categoryBox'>
                  <h2>Cheese Cake</h2>
                  <h3>Rs. 200</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Pudding">
                <div className='categoryBox'>
                  <h2>Pudding</h2>
                  <h3>Rs. 70</h3>
                </div>
                </Link>
                <Link to="/order/bakery/Cookies">
                <div className='categoryBox'>
                  <h2>Biscuits</h2>
                  <h3>Rs. 100</h3>
                </div>
                </Link>
              </div>
         

            <h1>Dessert</h1>
              <div className='categoryMainDiv'>
            <Link to="/order/dessert/Chocolates">
                <div className='categoryBox'>
                  <h2>Chocolates</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
                <Link to="/order/dessert/Ice Cream Cone">
                <div className='categoryBox'>
                  <h2>Ice-Cream Cone</h2>
                  <h3>Rs. 40</h3>
                </div>
                </Link>
                <Link to="/order/dessert/Kulfi">
                <div className='categoryBox'>
                  <h2>Kulfi</h2>
                  <h3>Rs. 60</h3>
                </div>
                </Link>
                <Link to="/order/dessert/Ice-Tea">
                <div className='categoryBox'>
                  <h2>Ice-Tea</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
                <Link to="/order/dessert/Espresso">
                <div className='categoryBox'>
                  <h2>Espresso</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
                <Link to="/order/dessert/Mousse">
                <div className='categoryBox'>
                  <h2>Chocolate Mousse</h2>
                  <h3>Rs. 150</h3>
                </div>
                </Link>
              </div>

            
          </div>

        </div>
        <Footer/>
      </div>
    </>
  )
}


export default order;