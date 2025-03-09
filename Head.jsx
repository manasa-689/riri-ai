import React from 'react';
import myLogo from './assets/riri.svg'
import bird from './assets/birdd.svg'
function Head(){
    return(
        <div className="container">
            
            <img src={myLogo} className='img1' alt="riri logo"></img>
            <p className='text1'>Turning everything real,relaxing,rendering </p>
            <p className='text2'>Rit for your inner world</p>
            <img src={bird} className='img2' alt='bird'></img>
            <label for="txt" className="subtext">Type your text and click 'generate'</label><br></br>
            <textarea
             className="inputext"
             rows={3} cols={80} 
            placeholder="eg:A soft acoustic playing in the background with a hint of lo-fi beats">

            </textarea>
            <button className="button">Generate</button>

        
           
        </div>

    );
}
export default Head