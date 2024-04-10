import React, { useContext } from 'react';
import { myContext } from '../App';
import NavComp from './NavComp';
import { useNavigate } from 'react-router-dom';
import './style/flightdetails.css'


const FlightDetails = () => {
    const { flighdeta } = useContext(myContext)
    const navigate = useNavigate()
    const handleclick = () => {
        navigate('/mybooking')
    }
    return (
        <div className='mainboxx'>
            <NavComp />
            <div className='row container-fluid '>
                <div className='col-md-6 mx-auto '>
                    <div className='card p-5 flightbox'>
                        <h3> <i class="fa-solid fa-plane"></i>{flighdeta.FlightName} ({flighdeta.FlightNumber})</h3>
                        <div className='row mt-4'>
                            <div className='col-4 time'>
                                <h3 className='text-center'>{flighdeta.TripStartTime}</h3>
                                <h3 className='text-center'>{flighdeta.startCity}</h3>
                            </div>
                            <div className='duration col-4 time'>
                                <h4 className='text-center'>{flighdeta.TripDuration}</h4>
                                <h6 className='text-center'>Non stop</h6>
                            </div>
                            <div className='col-4 time'>
                                <h3 className='text-center'>{flighdeta.TripEndTime}</h3>
                                <h3 className='text-center'>{flighdeta.destination}</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 ' style={{display:"flex",justifyContent:"center"}}>
                                <button className='btnn' style={{padding:"8px 15px",marginTop:"17px",fontWeight:"bold"}} onClick={handleclick}> Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails;