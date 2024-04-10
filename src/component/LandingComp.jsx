import React from 'react';
import "./style/landingpage.css"
import { useNavigate } from 'react-router-dom';

const LandingComp = () => {
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/login')
    }
    return (
        <div className='f-page'>
            <img src="https://img.freepik.com/free-photo/jumbo-jet-flying-sky_23-2150895691.jpg?t=st=1711704111~exp=1711707711~hmac=6d4d8563c83e679ababafba4ba989f3fd8dfb3389a6177f4f9cfdf4bb4e6884f&w=740" className="smoke-effect" alt="" srcset="" />
            <div className='homecontent'>
                    <div className="container-fluid ">
                        <h1 className='logo'>SkyFlights <i class="fa-solid fa-plane-up"></i></h1>
                    </div>
                <div className='content '>
                    <h5>India's laegest low-cost carrier with 2000+ daily flights to 100+ desinations, is at your service</h5>
                    <button className='start-btn mt-5 navbar-brand' onClick={handleclick}>Get Start!</button>
                </div>
            </div>
        </div>
    );
};

export default LandingComp;