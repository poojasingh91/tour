// import React from 'react'
// export default function Card({children}){
//   return(
//     {children}
//   );
// }

import React from 'react'
const Card = ({name, imageId, date, detail}) => {
  return (
    <>
    <div className='card'>
        <img className='card' src= {imageId} alt="newyork" />
        <p>{name}</p>
        <p className='gry'>{date}</p>
        <p className='writing'>{detail}</p>
        <button className='btn'>Buy Tickets</button>
    </div>
    </>
  )
}
export default Card

// function Card () {
//   return (
//     <>
//     <div className='cards'>
//         <div className='card'>
//             <img className='image' src='https://picsum.photos/640/360' alt='card1'></img>
//             <p className='writing'>New York</p>
//             <p className='gry'>Fri 27 Nov 2016</p>
//             <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
//             <button className='btn'>Buy tickets</button>
//        </div>
//         <div className='card'>
//             <img className='image' src='https://placebeard.it/640x360'alt='card2'></img>
//             <p className='writing'>Paris</p>
//             <p className='gry'>Sat 28 Nov 2016</p>
//             <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
//             <button className='btn'>Buy tickets</button>
//         </div>
//         <div className='card'>
//             <img className='image' src='https://placekitten.com/640/360' alt='card3'></img>
//             <p className='writing'>San Fransisco</p>
//             <p className='gry'>Sun 29 Nov 2016</p>
//             <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
//             <button className='btn'>Buy tickets</button>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Card