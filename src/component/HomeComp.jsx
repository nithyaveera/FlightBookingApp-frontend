import React, { useContext, useState } from 'react';
import NavComp from './NavComp';
import './style/home.css';
import './style/Abou.css'
import FlightSearchForm from './FlightSearchForm';
import Benefit from './Benefit';
import { myContext } from '../App';


const HomeComp = () => {
    const{baseurl,setFlights,token}=useContext(myContext)
    return (
        <div >
            <NavComp className='home-container' />
            <div>
                <div className='searchpart'>
                    <div className='row  container mx-auto pt-4'>
                        <div className='col-md-8  descrip'>
                            <h1>The Sky is Waiting for You! </h1>
                            <h5>With SkyFlights, you can easily book any ticket you need to travel safely thanks to our detailed system of searching and booking airline tickets.</h5>
                        </div>
                        <div className='col-md-4'>
                            <FlightSearchForm baseurl={baseurl} setFlights={setFlights} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <Benefit />
                </div>
                <div className='aboutpage'>
                    <section id="about">
                        <div className="aboutspan1">
                            <h3>Our History</h3>
                            <h1>A Few Words About Us</h1>
                            <div className='row container'>
                                <div className='col-md-4 '>
                                    <img src="https://img.freepik.com/free-photo/view-3d-airplane_23-2151022225.jpg?w=740" alt="" className='image' />
                                </div>
                                <div className='col-md-8'>
                                    <p> Skyflights is the world’s first inspirational travel search service that focuses on what’s really important: your Interests and your Budget!
                                        How practical is an amazing weekend break for skiing if what you really look forward is relaxing on a sandy beach? How good a great destination can be, if it’s too expensive to get there? Cheapflights offers an innovative and useful online experience, so you can find your perfect destination in just a couple of clicks!</p>
                                </div>
                            </div>
                        </div>

                    </section>


                </div>
                <div className='footermaindiv'>
                    <h1>CONTACT US</h1>
                    <div class="footerdiv1">
                        <div class="ourcompanydiv">
                            <h3>OUR COMPANY</h3>
                            <p> <i class="fa-solid fa-plane"></i>SkyFlights</p>
                            <p> <i class="fa-regular fa-face-smile"></i>Happy Nuts</p>
                            <p> <i class="fa-solid fa-ship"></i>My Transport</p>
                            <p> <i class="fa-solid fa-truck-fast"></i>Fast Email</p>
                            <span class="footericons">
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>

                            </span>
                        </div>
                        <div>
                            <span class="emailfex ">
                                <h3> <i class="fa-regular fa-envelope"></i>Email</h3>
                                <a href=""> <i class="fa-solid fa-arrow-right"></i>skyflights342@gmail.com</a>
                                <a href="" ><i class="fa-solid fa-arrow-right"></i>fastfights3@gmail.com</a>
                            </span>
                            <span class="emailfex emailfex2">
                                <h3><i class="fa-solid fa-phone-volume"></i>
                                    Phone
                                </h3>
                                <a href=""> <i class="fa-solid fa-arrow-right"></i> 91+6357461776</a>
                                <a href=""> <i class="fa-solid fa-arrow-right"></i>91+6357461778</a>
                                <a href=""> <i class="fa-solid fa-arrow-right"></i>91+6357461779</a>
                            </span>

                        </div>
                        <div className='emailfex'>
                            <h3><i class="fa-solid fa-location"></i>Address</h3>
                            <p>2130 Fulton Street, <br />San Diego, CA 94117-1080 USA</p>

                            <h3><i class="fas fa-calendar-check"></i>Opening Hours</h3>
                            <p>
                                Mon–Fri 8:00am–6:00pm<br />
                                Sat 10:00am–4:00pm<br />
                                Sun Closed</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeComp;