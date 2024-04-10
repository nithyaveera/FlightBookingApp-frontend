import React, { useContext } from 'react';
import NavComp from './NavComp';
import { myContext } from '../App';
import './style/FlightSearchResult.css';
import { useNavigate } from 'react-router-dom';

const FlightSearchResult = () => {
    const { flights, flightmsg ,date,setflightid}=useContext(myContext)
    const navigate=useNavigate()
    const handleclick = (id) => {
        navigate('/form')
        setflightid(id)
    }
    return (

        <div>
            <NavComp />
            <div className='container searchresult p-4'>
            <h2 className='text-white'>{flightmsg} on {date}</h2>
                <ul>
                    {flights.map((flight,index) => (
                        <>
                            <div key={index} className=' p-2'>
                                <div className="card mb-3" style={{ maxWidth: '80vw' }} >
                                    <div className="row p-2">
                                        <div className='col-md-2'>
                                            <div className='row'>
                                                <div className='col-md-3 pt-4'> 
                                                    <i class="fa-solid fa-plane ico"></i>
                                                </div>
                                                <div className='col-md-9 name'>
                                                    <h5 >{flight.FlightName}<span>{flight.FlightNumber}</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-2 name col-4'>
                                            <h4 className='text-center'>{flight.TripStartTime}<span>{flight.startCity}</span></h4>
                                        </div>
                                        <div className='col-md-2 duration col-4'>
                                            <h4>{flight.TripDuration}</h4>
                                            <h6 className='text-center'>Non stop</h6>
                                        </div>
                                        <div className='col-md-2 name col-4'>
                                            <h4 className='text-center'>{flight.TripEndTime}<span>{flight.destination}</span></h4>
                                        </div>
                                        <div className='col-md-2 price'>
                                            <h3>₹{flight.pricePerSeat}<span>per adult</span></h3>
                                        </div>
                                        <div className='col-md-2 '>
                                            <button className='btn btn-primary mt-3' onClick={() => { handleclick(flight._id) }}>BOOK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                
                </ul>
                </div>
            </div>
    );
};

export default FlightSearchResult;