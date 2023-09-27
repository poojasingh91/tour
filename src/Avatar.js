import React from 'react'
import {getImageUrl} from './utils.js'
const Avatar = ({filler, size}) => {
  return (
    <>
    <div className='cards'>
        <div className='card'>
            <img className='image' src={getImageUrl(filler, 'b')} alt='card1' width={size}></img>
            <p className='writing'>New York</p>
            <p className='gry'>Fri 27 Nov 2016</p>
            <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
            <button className='btn'>Buy tickets</button>
       </div>
        <div className='card'>
            <img className='image' src={getImageUrl(filler, 'b')} alt='card2' width={size}></img>
            <p className='writing'>Paris</p>
            <p className='gry'>Sat 28 Nov 2016</p>
            <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
            <button className='btn'>Buy tickets</button>
        </div>
        <div className='card'>
            <img className='image' src={getImageUrl(filler, 'b')} alt='card3' width={size}></img>
            <p className='writing'>San Fransisco</p>
            <p className='gry'>Sun 29 Nov 2016</p>
            <div className='writing'><b>Prasent tincidunt sed tellus utrutrum sed vitae justo</b></div>
            <button className='btn'>Buy tickets</button>
        </div>
    </div>
    </>);
}


export default Avatar
