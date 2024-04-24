import React, { useContext, useEffect, useState } from 'react';
import NavComp from './NavComp';
import { myContext } from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style/BookingForm.css';
import './style/Navcomp.css'

const BookingForm = () => {
    const { flightid, date, useremail, baseurl,token,setdate } = useContext(myContext)
    const [price, setprice] = useState('')
    const [name,setname]=useState('')
    const [numberoficket, setnumberoficket] = useState(1)
    const [msg, setmsg] = useState('')
    const [errormsg,seterrormsg] =useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        await axios.get(`${baseurl}/flight/getflight/${flightid}`)
            .then(res => setprice(res.data.data))
            .catch((err) => seterrormsg(err.response.data.message))
        if (!flightid) {
            navigate('/FlightSearchResult')
        }
    }
    
    const totalprice = numberoficket * price.pricePerSeat
    const handleIncrease = () => {
        setnumberoficket((pval)=>pval+1)
    }
    const handleReduce = () => {
        if (numberoficket > 1) {
            setnumberoficket((pval) => pval - 1)
        }   
    }

    const handlesubmit =async(e) => {
        e.preventDefault();
        const payloads = {
            customerName: name,
            customerEmail: useremail,
            date: date,
            flightid: flightid,
            totalprice: totalprice,
            numberOfTicket: numberoficket,
        }
        try {
            const response = await axios.post(`${baseurl}/booking/createbooking`, payloads, {
                headers: {
                    Authorization: token
                }
            });
            setmsg(response.data.message)
            alert(`Booking Confirmed !`)
            navigate('/home')
            setdate('')
        } catch (error) {
            alert('Error')
        }
    }
    return (
        <div>
            <NavComp />
            {msg}
            {errormsg}
            <form className='row  p-md-2 m-md-2' onSubmit={handlesubmit}>
                <div className='col-md-5 mx-auto p-5 booking-box'>
                    <h2 className='text-center' style={{ fontFamily: "Rakkas" }}>Booking Confirmation <i class="fa-solid fa-circle-check"></i></h2>
                    <div className='row p-md-3'>
                        <div className="col-12 pt-2">
                            <label className="form-label">Enter Your Name <i class="fa-solid fa-circle-user"></i></label>
                            <input type="text" className="form-control bg-white" name='name' value={name} onChange={(e)=>setname(e.target.value)} required />
                        </div>
                        <div className="col-12 pt-2">
                            <label className="form-label">Email <i class="fa-solid fa-envelope"></i></label>
                            <input type="text" className="form-control bg-white" name='name' value={useremail} readOnly />
                        </div>
                        </div>
                    <div className="row p-md-3">
                            <div className="col-md-7 pt-4 sub">
                                <div className='row'>
                                    <div className="col-6">
                                    <label className="form-label">Passenger <i class="fa-solid fa-user-group"></i>   : </label>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="input-group shadow row">
                                            <button
                                                className="btn col-4 "
                                                type="button"
                                                onClick={handleReduce}
                                            >
                                                -
                                            </button>
                                            <input
                                                type="text"
                                                className=" text-center bg-white  col-4"
                                                value={numberoficket}
                                                readOnly
                                            />
                                            <button
                                                className="btn col-4"
                                                type="button"
                                                onClick={handleIncrease}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className='col-md-5 pt-4 sub'>
                            <div className='row'>
                                <label className="form-label col-md-9">Price per Adult <span>:</span></label>
                                <h5 className='col-md-3 price'>₹{price.pricePerSeat}</h5>
                            </div>
                            </div>
                    </div>
                    <div className='row bottom mt-md-5 '>
                        <div className="col-6 pt-md-4 text-center">
                            <h4>Total Amt: ₹<span>{totalprice}</span></h4>
                        </div>
                        <div className="col-6 pt-md-4 text-center">
                            <button type="submit" className='btnn'>
                                confirm
                            </button>
                        </div>
                    </div>
                    
                </div>
                    </form>
                </div>
    );
};

export default BookingForm;