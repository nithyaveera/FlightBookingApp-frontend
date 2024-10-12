import React from 'react';
import './style/Abou.css';
import './style/Navcomp.css'
import NavComp from './NavComp';

const AboutComp = () => {
    return (
        <div>
            <NavComp />
        <div className='aboutpage'>
            <section id="about">
                <div className="aboutspan1">
                    <h3>Our History</h3>
                    <h1>A Few Words About Us</h1>
                    <div className='row container'>
                        <div className='col-md-4 '>
                            <img src="https://img.freepik.com/free-photo/view-3d-airplane_23-2151022225.jpg?w=740" alt="" className='image'/>


                            </div>
                    <div className='col-md-8'>
                    <p> Skyflights is the world’s first inspirational travel search service that focuses on what’s really important: your Interests and your Budget!
                        How practical is an amazing weekend break for skiing if what you really look forward is relaxing on a sandy beach? How good a great destination can be, if it’s too expensive to get there? Cheapflights offers an innovative and useful online experience, so you can find your perfect destination in just a couple of clicks!</p>
                        </div>
                        </div>
                    </div>

            </section>


            </div>
            </div>
    );
};

export default AboutComp;