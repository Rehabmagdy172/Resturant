import React,{Component} from "react";
import './show.css'
import pi1 from './img/pasta.jpg'
import pi2 from './img/pasta2.jpg'
 import pi3 from './img/pasta3.jpg'
 import pi4 from './img/pasta4.jpg'
import pi5 from './img/pasta5.jpg'
 import pi6 from './img/pasts3.jpg'
function Show (){
    
    return(
    <div className="contanier">
        <div className="secshow" >
        <img   src={pi1} className="imgshow" />
           <h3 className="headshow"> green sauce pasta </h3>
           <p className="prashow">This vibrant spinach and basil green sauce for
           pasta is a delicious way to get your greens in.
           Make it tonight for an easy weeknight dinner win</p>
           </div>  
  
     <div className="secshow">
          <img src={pi2} className="imgshow"/>
           <h3 className="headshow"> white sauce pasta</h3>
           <p className="prashow">This Creamy Garlic Penne
            Pasta is a white sauce pasta that is great on it's own, 
           but could be even heartier if you add chicken or another favorite meat.</p>
           </div>
  
       <div className="secshow">
          <img src={pi3} className="imgshow" />
           <h3 className="headshow">red sauce pasta</h3>
           <p className="prashow">This is red sauce. The slow-cooked, 
           rib-sticking Italian-American stew designed to fill you up with equal parts flavor and pride and delicious</p>
       </div>
       <div/>

<div className="contanier">
       <div className="secshow" >
        <img   src={pi4} className="imgshow" />
           <h3 className="headshow"> green sauce pasta </h3>
           <p className="prashow">This vibrant spinach and basil green sauce for
           pasta is a delicious way to get your greens in.
           Make it tonight for an easy weeknight dinner win</p>
           </div>  
  
     <div className="secshow">
          <img src={pi5} className="imgshow"/>
           <h3 className="headshow"> white sauce pasta</h3>
           <p className="prashow">This Creamy Garlic Penne
            Pasta is a white sauce pasta that is great on it's own, 
           but could be even heartier if you add chicken or another favorite meat.</p>
           </div>
  
       <div className="secshow">
          <img src={pi6} className="imgshow" />
           <h3 className="headshow">red sauce pasta</h3>
           <p className="prashow">This is red sauce. The slow-cooked, 
           rib-sticking Italian-American stew designed to fill you up with equal parts flavor and pride and delicious</p>
       </div>
  </div>
  


    </div>
   

     )

 
    }

export default Show ;