import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';
import NavComp from './NavComp';
import { useNavigate } from 'react-router-dom';
import './style/Navcomp.css';
import axios from 'axios';
import './style/Mybooking.css'

const MyBookingComp = () => {
    const { msg, booking, baseurl, setflightdeta } = useContext(myContext)
    // console.log(booking)
    const navigate = useNavigate()
    const handleclick = async (id) => {
        try {
            const res = await axios.get(`${baseurl}/flight/getflight/${id}`);
            console.log(res.data.data);
            setflightdeta(res.data.data);
            navigate('/flightdeta')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='mybook' >
            <NavComp />
            <div className='row mx-auto'>
                <div className='col-md-8 mx-auto'>
                    {msg}
                    {booking.map((details, index) => (
                        <div key={index} className='card  p-3 deail'>
                            <div className='row '>
                                <h3 className='heading'><span>Booking On : {details.bookingDate}</span></h3>
                                <div className='col-md-6 part'>
                                    <h5>Customer Name : {details.customerName}</h5>
                                    <h5>Number of Tickets : {details.numberOfTicket}</h5>
                                    <h5>Journey Date : {details.date}</h5>
                                </div>
                                <div className='col-md-6 part'>
                                    <h5>Customer Email : {details.customerEmail}</h5>
                                    <h5>Total Price : {details.totalprice}</h5>
                                    <h5>Status : {details.bookingStatus}</h5>
                                    <button className='flightdetails' onClick={() => { handleclick(details.flightid) }}>Flight Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MyBookingComp;