// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Nav from './Nav';
import Card from './Card';
import Nav from './Nav';
import myData from './data.js';
import cardData from './card_data.js';


function App() {
  return (
    <>
    <div className='body'>
      <div className='heading'>
        <h1>TOUR DATES</h1>
        <p>Remember to book your Tickets!</p>
      </div>
     {myData.map((e)=> {
      return(<Nav month={e.month_name} isSold={e.isSold} />)
     })}
    </div>
    <div className="cards">
      {cardData.map((e)=> {
      return(<Card name={e.name} imageId={e.imgSrc} date={e.date} detail={e.detail} />)
     })}
      
    </div>
    </>
  );
}

export default App;
