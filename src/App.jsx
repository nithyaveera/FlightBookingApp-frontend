import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegiserComp from './component/RegiserComp';
import Login from './component/Login';
import HomeComp from './component/HomeComp';
import LandingComp from './component/LandingComp';
import ForgotComp from './component/ForgotComp';
import FlightSearchResult from './component/FlightSearchResult';
import BookingForm from './component/BookingForm';
import AboutComp from './component/AboutComp';
import ContactComp from './component/ContactComp';
import MyBookingComp from './component/MyBookingComp';
import FlightDetails from './component/FlightDetails';

export const myContext =createContext(true)

const App = () => {
  const [token, setoken] = useState('')
  const [flights, setFlights] = useState([]);
  const [startCity, setstartCity] = useState('');
  const [destination, setdestination] = useState('');
  const [date, setdate] = useState('')
  const [flightmsg, setFlightmsg] = useState('')
  const [flightid, setflightid] = useState('')
  const [flighdeta, setflightdeta] = useState('');
  const [useremail, setuseremail] = useState('')
  const [booking, setbookingdata] = useState([])
  const [msg, setmsg] = useState('')
  const baseurl = "https://flight-back-end-code.onrender.com"
  return (
    <div> 
      <myContext.Provider value={{ flighdeta, setflightdeta,msg,setmsg,booking,setbookingdata,useremail,setuseremail,token, setoken, baseurl, flights, setFlights, startCity, setstartCity, destination, setdestination, date, setdate,flightmsg,setFlightmsg,flightid,setflightid }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingComp />} />
            <Route path='/forgot' element={<ForgotComp />} />
            <Route path='/register' element={<RegiserComp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<HomeComp />} />
            <Route path='/home/result' element={flights.length != 0 ? <FlightSearchResult /> : <HomeComp/>} />
            <Route path='/form' element={useremail ? <BookingForm /> : <Login />} />
            <Route path='/about' element={<AboutComp />} />
            <Route path='/contact' element={<ContactComp />} />
            <Route path='/mybooking' element={<MyBookingComp />} />
            <Route path='/flightdeta' element={<FlightDetails/>}/>
          </Routes>

        </BrowserRouter>
      </myContext.Provider>
      
    </div>
  );
};

export default App;