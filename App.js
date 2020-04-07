import React from 'react';
import unicorn2 from './unicorn2.png';
import princess2 from './princess2.png';
import wedding2 from './wedding2.png';


function App() {
  return (
    <div className="App">
    <header class="logo" >Amazing Unicorn Cake Shop!</header>

    <div class="topnav" id="myTopnav">
  <div class="dropdown">
    <button class="dropbtn">Shop info
      
    </button>
      <div class="dropdown-content">
      <a href="#">Meet out amazing team</a>
      <a href="#">How to place your order</a>
      <a href="#">Delivery and collection</a>
    </div>
</div>
  <a href="" class="active">Our amazing story</a>
  <a href="#">Shop your dream cake</a>
  <a href="#">Unicorn cake school</a>
  <a href="#">Unicorn FAQ</a>
  <a href="#">Our coffee shop</a>
  <a href="#">Happy stories</a>

</div>

<div class="row">
    <div class="column side">
    <div class="newlist">
<aside></aside>
</div>
      <h2></h2>
      
    </div>
    <div class="column middle">
    
   
    <h1>Amazing Unicorn Delicious Creations!</h1>
  <h1>Welcome to the Amazing Unicorn cake shop!</h1>
    
    <h2></h2>
    <p>Beautiful cakes and delicious confections created for your special occasion! Wedding cakes, christening cakes, little princess/prince cakes or uniquely designed birthday cakes - here in the Amazing Unicorn shop anything is possible. Various flavors and beautiful designs of our cakes will make your day the very special indeed, or maybe you have an idea of your own, then we're here for you to make your dream come true!</p>
    <p>Browse our gallery or visit us for a cuppa in our pet-friendly coffee shop to find that perfect cake created just for you. Too busy or in a hurry, fret not and shop online. Our experienced consultants will be happy to help you with any queries and make sure your gorgeous cake is baked and delivered on time.</p>

<div class="flex-container">
<div class="img-hover-zoom">
    <a href="">
      
      <img src={unicorn2} class='Unicorn cake'  alt="alternate text" width="270px" height="220px"  title="Click to view cake samples">
        
    
     </img> 
    </a>
   </div>
      


    <div class="img-hover-zoom">
    <a href="">
      
      
      <img src={princess2} class='Princess Cake'  alt="alternate text" width="270px" height="220px"  title="Click to view cake samples">
        
    
     </img> 
    </a>
  
  </div>


    <div class="img-hover-zoom">
    <a href="">
      
      
      <img src={wedding2} className='Wedding Cake'  alt="alternate text" width="270px" height="220px"  title="Click to view cake samples">
        
    
     </img> 
    </a>
    </div>
  </div>
  
    </div>

    </div>
     
</div>

  

   
   
   
  );
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


export default App;
