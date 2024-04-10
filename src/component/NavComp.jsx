import React, { useContext } from 'react';
import './style/Navcomp.css';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../App';
import axios from 'axios'

const NavComp = () => {
    const { setoken,setbookingdata, setmsg,baseurl,useremail }=useContext(myContext)
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/login')
        setoken('')
    }
    
    const handledetails = async () => {
        await axios.get(`${baseurl}/booking/bookeddetails/${useremail}`)
            .then((res) => setbookingdata(res.data.data))
            .catch((err) => setmsg(err.response.data.msg))
        if (!useremail) {
            navigate('/login')
        }
    }
    return (
        <div>
            <nav className='home nav'>
                <h1 class="logotext"><span>Sky</span>Flights <i class="fa-solid fa-plane"></i></h1>
                <input class="inputnav" type="checkbox" id="abc" />
                <label for="abc" class="hiddenlable">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <span class="submenunav">
                    <Link to='/home'>Home</Link>
                    <Link to='/mybooking' onClick={handledetails}>My Booking</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact Us</Link>

                </span>
                <span class="submenulogout ">
                    <button onClick={handleclick}>LogOut</button>
                </span>
            </nav>
        </div>
    );
};

export default NavComp;