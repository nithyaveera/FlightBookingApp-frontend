import React, { useContext, useState } from 'react';
import axios from 'axios';
import './style/Flightsearchform.css'
import { useNavigate } from 'react-router-dom';
import { myContext } from '../App';

const FlightSearchForm = () => {
    const {seterrormsg,baseurl,token, setFlights, startCity, setstartCity, destination, setdestination, date, setdate, setFlightmsg }=useContext(myContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const cities = ['Chennai', 'Bangalore', 'Coimbatore', 'Cochin', 'Goa', 'Madurai'];
    if (!token) {
        navigate('/login')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payloads = { startCity, destination }
        try {
            const response = await axios.post(`${baseurl}/flight/searchflight`, payloads, {
                headers: {
                    Authorization: token
                }
            });
            setFlights(response.data.data);
            setFlightmsg(response.data.info)
            seterrormsg(response.data.message)
        } catch (err) {
            seterrormsg(err.response.data.message)
        } finally {
            setLoading(false);
            navigate('/home/result')
            setstartCity('');
            setdestination('');
        }
    };

    return (
        <div>
            <form className='row  p-lg-5 pb-2  search-form' onSubmit={handleSubmit}>
                <h2 className='text-center' style={{ fontFamily: "Rakkas" }}>Let's Start!</h2>
                <div className='col'>
                    <div className='row'>
                        <div className="col-12 pt-2">
                            <label className="form-label"> Destination From</label>
                            <select value={startCity} onChange={(e)=>setstartCity(e.target.value)} className="form-select input" required>
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 pt-4 pb-1">
                            <label className="form-label"> Destination To</label>
                            <select value={destination} onChange={(e) => setdestination(e.target.value)} className="form-select input" required>
                               <option value="">Select City</option>
                                {cities
                                    .filter(city => city !== startCity) 
                                    .map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="col-12 pt-4 pb-1">
                            <label className="form-label"> Journey Date</label>
                            <input type="date" value={date} onChange={(e) => setdate(e.target.value)} placeholder="Journey date" className="form-control input" min={new Date().toISOString().split('T')[0]}  required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 pt-4 sub">
                            <button type="submit" disabled={loading} className='btnn'>
                                {loading ? 'Searching...' : 'Search Flights'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        </div>


    );
};

export default FlightSearchForm;