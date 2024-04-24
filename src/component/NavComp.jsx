import React, { useContext, useState } from 'react';
import './style/Navcomp.css';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import axios from 'axios'

const NavComp = () => {
    const { setoken, setbookingdata, baseurl, useremail, setmsg,setdate}=useContext(myContext)
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/login')
        setoken('')
        setbookingdata('')
        setdate('')
    }
    
    const handledetails = async () => {
        await axios.get(`${baseurl}/booking/bookeddetails/${useremail}`)
            .then((res) => {
                setbookingdata(res.data.data)
                setmsg(res.data.msg)
            })
            .catch((err) => setmsg(err.response.data.msg))
        if (!useremail) {
            navigate('/login')
        }
    }
    return (
        <div>
            <nav className='home nav navbar navbar-expand-lg'>
                <h1 class="logotext"><span>Sky</span>Flights <i class="fa-solid fa-plane"></i></h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <span class="navbar-nav me-auto mb-2 mb-lg-0 menus">
                            <Link to='/home'>Home</Link>
                            <Link to='/mybooking' onClick={handledetails}>My Booking</Link>
                            <Link to='/about'>About</Link>
                            <Link to='/contact'>Contact Us</Link>
                    </span>
                    <span className='out'>
                        <button onClick={handleclick}>LogOut</button>
                    </span>
                </div>
                
            </nav>
        </div>
    );
};

export default NavComp;