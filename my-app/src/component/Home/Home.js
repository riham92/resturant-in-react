import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer"
import './Home.css'
import imagepride from './../../assets/1.jpg'
import ingredints from './../../assets/2.png'
import testnomial1 from './../../assets/t1.jpg'
import testnomial2 from './../../assets/t2.jpg'


import Data from '../../Data.js'
import {Carousel} from 'react-bootstrap'
const Home =  ()=>{

    const blogitem = Data.map(item=>{
        return (
            <div className="col-md-4">
                <div className="box">
                <img src= {item.img} />
               <h5> {item.title}</h5>
             <span>   {item.time}</span>
               <h6> {item.price}</h6>

                </div>
                <button><a href="#"/>Order Now</button>

            </div>
        )
    })
    return(
        <Fragment>
        <Header />
        <section className="numbers">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h2>194+</h2>
                    <h7>SAVING</h7>
                </div>
                <div className="col-md-3">
                    <h2>155+</h2>
                    <h7>PHOTOS</h7>
                </div>
                <div className="col-md-3">
                    <h2>555+</h2>
                    <h7>GLOBALS</h7>
                </div>
                <div className="col-md-3">
                    <h2>194+</h2>
                    <h7>SAVING</h7>
                </div>
            </div>
        </div>
        </section>
        <section className="pride">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#"/>Learn More</button>
                    </div>
                    <div className="col-md-6">
                      <img src={imagepride} title='prideimage'></img>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="ingredints">
            <div className="container">
                <div className="row">
                    
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients..</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts..</p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>

                        </ul>
                        <button><a href="#"/>Learn More</button>

                    </div>
                    <div className="col-md-6">
                      <img src={ingredints} title='prideimage'></img>
                    </div>
                </div>
            </div>
        </section>
        <section className="paralex">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                    <a href="#">watch our story</a>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <h2>Explore Our Foods</h2>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet <br/>leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                    </div>
                </div>
                <div className="row">
                    {blogitem}
                </div>
            </div>
        </section>
        <section className="slider">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Testimonials</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                    <Carousel>
      <Carousel.Item>
        <img src={testnomial1}/>
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <span>Sam Sol - Back End</span>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={testnomial2}/>


        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <span>Rita tore - web designer</span>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={testnomial1}/>


        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <span>Rafi Ro - graphic designer</span>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>                    </div>
                </div>
        
    </div>
    <br/>
        </section>

        <Footer />
        </Fragment>
    )
}

export default Home;