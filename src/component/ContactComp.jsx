import React from 'react';
import './style/Contact.css'
import NavComp from './NavComp';

const ContactComp = () => {
    return (
        <div className='row footermaindiv'>
            <NavComp />
            
            <h1>CONTACT US</h1>
            <div class="footerdiv1 p-4">
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
                    <p>2130 Fulton Street, <br/>San Diego, CA 94117-1080 USA</p>
                
                    <h3><i class="fas fa-calendar-check"></i>Opening Hours</h3>
                    <p>
                        Mon–Fri 8:00am–6:00pm<br/>
                        Sat 10:00am–4:00pm<br/>
                        Sun Closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactComp;