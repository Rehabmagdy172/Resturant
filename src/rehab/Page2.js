
import React, { Fragment } from "react";
import Pasteimg from '../images/Pastaimg.jpg'
import Pizaaimg from '../images/Pizaaimg.jpg'

import './Page2.css'

const Page2 =()=>{
    return(
        <Fragment>


<section class="Sec1">

        <div class=" cont container-fluid px-5">
            <div class="row ">
                {/* <!-- ----------title-------------- --> */}
                <h2 class="h-2">Lorem ipsum dolor</h2>
                {/* <!-- ---------- content of left side-------------- --> */}
                <div class="col-12 col1-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="p-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod quaerat quasi eos dolore blanditiis at, nobis magni dicta mollitia natus doloribus cum, sed fuga repudiandae? Atque ad adipisci totam?
                    </div>
                </div>
                {/* <!-- ---------- content of right side-------------- --> */}
                <div class="col-12 col1-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div class="p-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod quaerat quasi eos dolore blanditiis at, nobis magni dicta mollitia natus doloribus cum, sed fuga repudiandae? Atque ad adipisci totam?
                    </div>
                </div>
                {/* <!-- ---------- button -------------- --> */}
                <div class="col-12">
                    <div class="d-grid gap-2 col-1 mx-auto">
                        <button class="btn btn-light btn-outline-danger btn-lg" type="button">More info</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- -------  end of the first section (text)--------- --> */}
    </section>

    <section class="Discount">
<div class="container px-5 ">
            <div class="row align-items-center ">
                <div class="col-lg-6 order-lg-1">
                    <div class="p-1 ">
                        <img class="img-fluid rounded-circle" src={Pizaaimg} alt="image for pizaa"/>
                    </div>
                </div>

                {/* <!-- -------------second col which contain description---------- --> */}
                <div class="col-lg-6 order-lg-2 ">
                    <div class="p-1 ">
                        <h2>Discount up to
                            <br/>50% All Excurisions!
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                         {/* ------------button------------ */}
                        <button class="btn btn-outline-dark btn-lg"><a href='/X'> READ MORE</a></button>
                    </div>
                </div>
            </div>
        </div>
            </section>



            <section class="Promo">
        <div class="container px-5 ">
            <div class="row align-items-center ">
                {/* <!-- -------------first col which contain image---------- --> */}
                <div class="col-lg-6 order-lg-2">
                    <div class="p-1 ">
                        <img class="img-fluid rounded-circle" src={Pasteimg} alt="image for paste"/>
                    </div>
                </div>

                {/* <!-- -------------second col which contain description---------- --> */}
                <div class="col-lg-6 order-lg-1 ">
                    <div class="p-1 ">
                        <h2>January's Promo:
                            <br/>Buy 1 Get 1 Free!
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                         {/* ------------button------------ */}
                       <button class="btn btn-outline-dark btn-lg"> <a href='/Show'>READ MORE</a></button>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
    










</Fragment>
    )
}
export default Page2;