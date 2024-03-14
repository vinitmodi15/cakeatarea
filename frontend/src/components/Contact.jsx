import React from 'react'
import Navbar from './Navbar'
import "./contact.css"
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1 className='contact'>Let's Connect</h1>

      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>LOGIN</span>
                </div>
                <div class="app-contact"></div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="Type your Username" />
                    <div className='clear'></div>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="Type your Password" />
                    <div className='clear'></div>
                  </div>
                  <div class="app-form-group buttons">
                    <button class="app-form-button"  >RESET</button>
                    <button class="app-form-button" >LOGIN</button>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
