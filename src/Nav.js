import React from 'react';
export default function Nav({month, isSold}) {
    return (
        <>
        <div className ='months'>
        {month}
       <span className='sold'> {isSold ? 'Sold out': ''} </span>
      </div>
        {/* <div>
            <h5>September <span> Sold out</span></h5>      
        </div>

        <hr></hr>

        <div>
            <h5>October <span> Sold out</span></h5>      
        </div>

        <hr></hr>

        <div>
            <h5>November <span> 3</span></h5>     
        </div> 
        
        <hr></hr> */}

        </>
    );
}