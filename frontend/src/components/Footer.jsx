// import React from 'react'
// import "./footer.css"

// // import {FaInstagram } from 'react-icons/fa';
// // import {FaFacebookF } from 'react-icons/fa';
// // import {FaGooglePlusG } from 'react-icons/fa';
// // import {FaTwitter } from 'react-icons/fa';

// import logo from "./logo.jpg"


// export default function Footer() {
//     return (
//         <>
//         <div className="upperfooter">
//         <div className="matter">
//           <h1>About Us</h1>
//           <p>This is a place where you get a wide choice of rich delicious cakes,pastries,cupcakes,cookies and many more for all occasions. Our aim is to serve the most creative and mouth-watering bakery products,to help celebrate your events in a special way. Pick a design you like and the choose from delectable flavours. You can then sit back and relax & expect a wonderful order to arrive at your desired location ,on your chosen date and time.</p>
//         </div>
//         <div className="img">
//         <img src={logo} alt="" />
//         </div>
//         <div className="matter2">
//         <h1>Our Team</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iusto fugiat est at aliquam nisi nam. Sint eaque, facere ipsa quos neque veritatis officiis, expedita repudiandae nesciunt, impedit non odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum omnis, eveniet commodi veniam, quibusdam nostrum, consequatur deserunt id incidunt amet nulla vero ratione! Totam perferendis ratione esse nulla eius. hello how are</p>
//         </div>
//       </div>
//       <div className="footer">
        
//         <div className="left">
//           <h3>TALK TO US</h3>
//           <h4>9413142106</h4>
//           <h4><a href='teambakery04@gmail.com'>teambakery04@gmail.com</a></h4>
//           <h4>Sardarpura B Road,Jodhpur
//              </h4>
//         </div>
//         <div className='middle'>
//           <h3>PAYMENTS ACCEPTED</h3>
//           <h4>cash</h4>
//           <h4>online payment</h4>
//         </div>
//         <div className="timing">
//           <h3>WORK TIME</h3>
//           <h6>Monday-Friday</h6>
//           <h6>8:00am-8:30pm</h6>
//           <h6>Saturday-Sunday</h6>
//           <h6>10:00am-5:00pm</h6>
//         </div>
//         <div className="social">
//           <h3>CONNECT US</h3>
//           <div className="icon">
//             {/* <FaFacebookF />
//             <FaInstagram />
//             <FaGooglePlusG />
//             <FaTwitter /> */}
//           </div>
          
//         </div>
//         </div>
//         </>
//     )
// }

import React from 'react'
import "./footer.css"

import {FaInstagram } from 'react-icons/fa';
import {FaFacebookF } from 'react-icons/fa';
import {FaGooglePlusG } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import{FaCcVisa} from 'react-icons/fa';
// import{FaCcMastercard} from 'react-icons/fa';
import{FaCcPaypal} from 'react-icons/fa';
import{FaCcAmazonPay} from 'react-icons/fa';
import{FaGooglePay} from 'react-icons/fa';

import logo from "./logo copy.jpg"


export default function Footer() {
    return (
        <>
<div className="upperfooter">
        <div className="matter">
          <h1>About Us</h1>
          <p>This is a place where you get a wide choice of rich delicious cakes,pastries,cupcakes,cookies and many more for all occasions. Our aim is to serve the most creative and mouth-watering bakery products,to help celebrate your events in a special way. Pick a design you like and the choose from delectable flavours. You can then sit back and relax & expect a wonderful order to arrive at your desired location ,on your chosen date and time.</p>
        </div>
        <div className="img">
        <img src={logo} alt="" />
        </div>
        <div className="matter2">
        <h1>Our Team</h1>
         <ul><li>Our Mentor: Rishabh Sir</li> 
            <li>Team Members:</li>
            <li>Anjali Sen: Anjali had given her valuable contribution to website using her web-developing skills in frontend.</li>
           <li> Anuj Mathur: Anuj had given his valuable contribution to website using his</li> 
            <li>Vinit Modi: Vinit had given his valuable contribution by fetching data from backend & by developing database of the website.</li>
            </ul>
       
        </div>
      </div>
      <div className="footer">
        
        <div className="left">
          <h3>TALK TO US</h3>
          <h4>9413142106</h4>
          <h4><a href='teambakery04@gmail.com'>teambakery04@gmail.com</a></h4>
          <h4>Sardarpura B Road,Jodhpur
             </h4>
        </div>
        <div className='middle'>
          <h3>PAYMENTS ACCEPTED</h3>
          <div className="icons">
          <h4><FaCcVisa/></h4>
          {/* <h4><FaCcMastercard/></h4> */}
          <h4><FaCcPaypal/></h4>
          <h4><FaCcAmazonPay/></h4>
          <h4><FaGooglePay/></h4>
          </div>
        </div>
        <div className="timing">
          <h3>WORK TIME</h3>
          <h6>Monday-Friday</h6>
          <h6>8:00am-8:30pm</h6>
          <h6>Saturday-Sunday</h6>
          <h6>10:00am-5:00pm</h6>
        </div>
        <div className="social">
          <h3>CONNECT US</h3>
          <div className="icon">
            <FaFacebookF />
            <FaInstagram />
            <FaGooglePlusG />
            <FaTwitter />
          </div>
          
        </div>
      </div>
    </>
  )
}

