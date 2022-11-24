import React,{Component}from "react"; 
import'./App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import X from "./my project/pro.js";
import Projects from "./project/index.js";
import Page2 from "./rehab/Page2";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Section from "./arwa/Section.js";
import './arwa/section.css';
import Navbar from './arwa/Navbar.js'
import Show from  './arwa/Show.js'
class pro extends Component{

  render(){

    return(
       
       <BrowserRouter>
       <Navbar/>
      <Routes>
       <Route path="/" element={<Section/>}/>
      <Route path="/menu" element={<Page2/>}/>
      <Route path="/ourstory" element={<X/>}/>
      <Route path="/contactus" element={<Projects/>}/>
      <Route path="/show" element ={<Show/>}/>
      <Route path="/X" element ={<X/>}/>
       </Routes>
    
</BrowserRouter>
    )
}
}export default pro;
