import React,{Component} from "react";
import './section.css'
import pic1 from './img/greenpasta.jpg'
import pic2 from './img/whitepasta.jpg'
import pic3 from './img/redpasta.jpg'
function Section (){

    return(
       <div >
        
     <div className="home">
            
             <h1 className="headsec1">italian food</h1>
 
             <p className="paragsec1">pasta section</p>
             <div className="button1">
                <button className="buttonces1" ><b>read more</b></button>
             </div>
             <div className="divsec1">An  Artisinal Italian & Fresh Pasta Restaurant.
                 10 Different Dough Recipes. Handmade Daily With Seasonal Menu Changes.
                 Check Our Menu For Our Latest Dishes.</div>
         </div>
        
                     <div className="topsec2">
                         <h2 className="headsec2">Italian pasta</h2>
                         <p className="paragsec2">We have many types of pasta, we will offer you three of the best and most demanded types.You will have many varieties,
                             just choose what you like!</p>
                     </div>
                     <div className="section2" >
   
     <div className="sec2" >
        <img   src={pic1} className="imgsec2" />
           <h3 className="headpra3"> green sauce pasta </h3>
           <p className="parag3sec2">This vibrant spinach and basil green sauce for
           pasta is a delicious way to get your greens in.
           Make it tonight for an easy weeknight dinner win</p>
           </div>  
  
     <div className="sec2">
          <img src={pic2} className="imgsec2"/>
           <h3 className="headpra3"> white sauce pasta</h3>
           <p className="parag3sec2">This Creamy Garlic Penne
            Pasta is a white sauce pasta that is great on it's own, 
           but could be even heartier if you add chicken or another favorite meat.</p>
           </div>
  
       <div className="sec2">
          <img src={pic3} className="imgsec2" />
           <h3 className="headpra3">red sauce pasta</h3>
           <p className="parag3sec2">This is red sauce. The slow-cooked, 
           rib-sticking Italian-American stew designed to fill you up with equal parts flavor and pride and delicious</p>
       </div>
  
        
  <div className="clr"></div>
  </div> 
<div className="bot2"> 
   <button className="but2"><a href='/Show'><b>show more</b></a></button>
   </div>
  </div>
 )
  }
 
 export default Section ;