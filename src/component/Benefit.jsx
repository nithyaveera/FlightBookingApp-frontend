import React from 'react';

const Benefit = () => {
    return (
        <div className='row  m-1' style={{boxShadow:'1px  1px 9px black' ,padding:'80px'}}>
            <div className='col-md-3'>
                <div className='row'>
                    <h1 className='col-md-3'><i class="fas fa-search " style={{ color: 'white', backgroundColor:'#99c735' ,padding:'10px' }}></i></h1>
                <div className='col-md-9'>
                    <h4>The World's Travel Search Engine</h4>
                    You can use our search engine to find any flight you want and select a desired destination and price.
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='row'>
                <h1 className='col-md-3'><i class="fa-solid fa-plane" style={{ color: 'white', backgroundColor: '#99c735', padding: '10px' }}></i></h1>
                <div className='col-md-9'>
                    <h4>Cheap and Beneficial Air Tickets</h4>
                        We provide affordable tickets to the flights of almost all existing airlines so you don’t need to look for them.
                </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='row'>
                    <h1 className='col-md-3'><i class="fa-solid fa-headset"style={{ color: 'white', backgroundColor: '#99c735', padding: '10px' }}></i></h1>
                <div className='col-md-9'>
                    <h4>Our Support Lines are Open 24/7</h4>
                    Our 24/7 support operators are always ready to help you select a proper flight according to your needs.
                        </div>
                        </div>
            </div>
            <div className='col-md-3'>
                <div className='row'>
                    <h1 className='col-md-3'><i class="fa-regular fa-credit-card" style={{ color: 'white', backgroundColor: '#99c735', padding: '10px' }}></i></h1>
                <div className='col-md-9'>
                    <h4>Convenient Payment Method For You</h4>
                    We provide a variety of payment methods including cheque, cash, and credit cards.
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Benefit;