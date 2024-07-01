import React from 'react';
import "./style/landingpage.css"
import { useNavigate } from 'react-router-dom';

const LandingComp = () => {
    const navigate = useNavigate()
    const handleSignin = () => {
        navigate('/login')
    }
    const handleSignup = () => {
        navigate('/register')
    }
    return (
        <div className='f-page '>  
            <div className='p-md-5 p-2' >
                <div className='row mt-md-5' >
                    <div className='col-md-6 d-flex flex-column mt-5 '>
                    <h1 className='logo'>SkyFlights <i class="fa-solid fa-plane-up"></i></h1>
                    <div className='content mt-4'>
                        <h3>India's laegest low-cost carrier with 2000+ daily flights to 100+ desinations, is at your service</h3>
                            <div className='signbtns'>
                                <button className='start-btn mt-md-5 p-md-3 p-1 mt-3' onClick={handleSignin}>Sign In</button>
                                <button className='start-btn mt-md-5 p-md-3 p-1 mt-3' onClick={handleSignup}>Sign Up</button>
                            </div>
                            <div class="bubble-container">
                                <div class="bubble"></div>
                                <div class="bubble"></div>
                                <div class="bubble"></div>
                                <div class="bubble"></div>
                                <div class="bubble"></div>
                            </div>
                    </div>
            </div>
                    <div className='col-md-6  mt-5 pt-5 d-flex justify-content-center'>
                        <img src="/flight.png" alt="" srcset="" />
                </div>
                </div>
            </div>
        
        </div>
    );
};

export default LandingComp;