import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../App';
import NavComp from './NavComp';
import { useNavigate } from 'react-router-dom';
import './style/Navcomp.css';
import axios from 'axios';
import './style/Mybooking.css'

const MyBookingComp = () => {
    const { msg, booking, baseurl, setflightdeta, setbookingdata,setmsg } = useContext(myContext)
    const [err, seterr] = useState('')
    const [data,setdata] = useState('')
    const navigate = useNavigate()
    
    const handleclick = async (id) => {
        try {
            const res = await axios.get(`${baseurl}/flight/getflight/${id}`);
            setflightdeta(res.data.data);
            navigate('/flightdeta')
        } catch (err) {
            seterr(err.response.data.message)
        }
    };
    const handlecancel = async (id) => {
            if (confirm('If you want to Cancel Your Ticket click Ok!')) {
                await await axios.delete(`${baseurl}/booking/deletedeails/${id}`)
                    .then(res => setdata(res.data.message))
                    .catch((err) => setmsg(err.response.data.message))
                const updatedBooking = booking.filter(booking => booking._id !== id);
                setbookingdata(updatedBooking);
                if (updatedBooking.length === 0) {
                    setmsg("Not Yet Booked")
                }
            }
    }
    return (
        <div className='mybook' >
            <NavComp />
            {err}
            <div className='row mx-auto'>
                <div className='col-md-7 mx-auto'>
                    {booking.length === 0 ? (
                        <h1 style={{ height: '87vh', display: "flex", justifyContent: "center", alignItems: "center", color:"red"}}>{msg}</h1>
                    ) : (
                        booking.map((details) => (
                            <div key={details.flightid} className='card p-3 deail'>
                                <div className='row'>
                                    <h3 className='heading'><span>Booking On <i class="fa-solid fa-calendar-day" style={{ fontSize: "x-large" }}></i> :  {details.bookingDate} </span></h3>
                                    <div className='col-md-6 part'>
                                        <h5>Customer Name : {details.customerName}</h5>
                                        <h5>Number of Tickets : {details.numberOfTicket}</h5>
                                        <h5>Journey Date : {details.date}</h5>
                                    </div>
                                    <div className='col-md-6 part'>
                                        <h5>Customer Email : {details.customerEmail}</h5>
                                        <h5>Total Price : {details.totalprice}</h5>
                                        <h5>Status : {details.bookingStatus}</h5>
                                        <button className='flightdetails' onClick={() => handleclick(details.flightid)}>Flight Details <i class="fa-solid fa-plane-up"></i></button>
                                        <button className='flightdetails' onClick={() => handlecancel(details._id)}>Ticket Cancel <i class="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            
        </div>
    );
};

export default MyBookingComp;