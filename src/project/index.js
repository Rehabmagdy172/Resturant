
import React from "react";
import './style.css';

function Projects() { 


return(
<div>

<section class="SUBSCRIBE">
        <h2 >Title Here</h2>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil odio, enim ipsa numquam placeat.
            Velit neque laboriosam dolores soluta numquam nihil voluptatibus ratione dolor, exercitationem non totam,
            doloribus maxime.</p>
        <div class="input">
            <input type="email" placeholder="Your Email"/>
            <button className="botn1">SUBSCRIBE</button>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="content_footer">
                <div class="profil">
                    <div class="logo_area">
                        <h3 class="logo_name">Title Here</h3>
                    </div>
                    <div class="desc_area">
                        <p>Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there
                            live
                            the blind texts.</p>
                    </div>
                     <div class="social_media">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>

                     </div> 
                </div>
                <div class="service_area">
                    <ul class="service_header">
                        <li class="service_name">About</li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Brand Guidelines</a></li>
                        <li><a href="#">Terms&Condition</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    <ul class="service_header">
                        <li class="service_name">Services</li>
                        <li><a href="#">How to Order</a></li>
                        <li><a href="#">Our Product</a></li>
                        <li><a href="#">Order Status</a></li>
                        <li><a href="#">Promo</a></li>
                        <li><a href="#">Payment Method</a></li>
                    </ul>
                    <ul class="service_header">
                        <li class="service_name">Other</li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Join Us</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

</div> 
)
}


export default Projects;