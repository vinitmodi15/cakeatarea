import React from 'react'
import "./Api.css"
const cakery = () => {

  return (
    <>
      <div class="header">
        <h1>Order Now</h1>
      </div>

      <br />
      <hr />
      <div className="btn">
        <button >Pickup, ASAP(in 15 min.) </button>
      </div>
      <br />
      <br />
      <br />
      <div class="category">
        <div className="category_heading">
          <h2>ALL DAY EVERYDAY</h2>
          <h3>BAKERY</h3>
        </div>

        <div className="categoryTop">
          <div className="box ">
            <h4>CAKES</h4>
            <h5>Rs. 350</h5>

          </div>
          <div className="box">
            <h4>MUFFINS</h4>
            <h5>Rs. 70(qty.-1)</h5>

          </div>
        </div>

        <div className="categoryMiddle1">
          <div className="box">
            <h4>COOKIES</h4>
            <h5>Rs. 150(500gm)</h5>

          </div>

          <div className="box">
            <h4>BREAD</h4>
            <h5>Rs. 50</h5>

          </div>
        </div>

        <div className="categoryMiddle2">
          <div className="box">
            <h4>BROWNIES</h4>
            <h5>Rs. 100(250 gm)</h5>

          </div>
          <div className="box">
            <h4>RUSK</h4>
            <h5>Rs. 80(1 kg.)</h5>

          </div>
        </div>



        <div className="categoryMiddle3">
          <div className="box">
            <h4>CREAME ROLL</h4>
            <h5>Rs. 20</h5>

          </div>

          <div className="box">
            <h4>PIE</h4>
            <h5>Rs. 50</h5>

          </div>
        </div>

        <div className="categoryMiddle4">
          <div className="box">
            <h4>DONUTS</h4>
            <h5>Rs.150(500 gm)</h5>

          </div>

          <div className="box">
            <h4>CHEESE CAKE</h4>
            <h5>Rs.200(500 gm)</h5>

          </div>
        </div>

        <div className="categoryBottom">
          <div className="box">
            <h4>PUDDING</h4>
            <h5>Rs.70(100 gm)</h5>

          </div>

          <div className="box">
            <h4>BISCUITS</h4>
            <h5>Rs. 100(500 gm)</h5>
          </div>
        </div>
        <div className="desserts">
          <h3>DESSERTS</h3>
        </div>

        <div className="row1">
          <div className="box">
            <h4>CHOCOLATES</h4>
            <h5>Rs.150</h5>
          </div>

          <div className="box">
            <h4>ICECREAME CONE</h4>
            <h5>Rs. 40</h5>
          </div>
        </div>

        <div className="row2">
          <div className="box">
            <h4>KULFI</h4>
            <h5>Rs.60</h5>
          </div>

          <div className="box">
            <h4>ICE TEA</h4>
            <h5>Rs.150 (200 gm)</h5>
          </div>
        </div>

        <div className="row3">
          <div className="box">
            <h4>ESPRESSO</h4>
            <h5>Rs.150</h5>

          </div>

        </div>
      </div>

      



    </>
  )
}


export default cakery;