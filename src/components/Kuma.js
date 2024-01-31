import React, { useState } from 'react'
import kuma from '../images/kuma-wave.png';
import kuma_sparkle from '../images/kuma-wave-sparkle.png';

export const Kuma = () => {

  const clicky = () => {
    alert("Kumamon desu!");
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (event) => {
    console.log('Mouse position:', event.clientX, event.clientY);
    // Additional logic
  };

  return (
    <div id="overlay-mask">
        <div id="kuma-bot" 
          onClick={clicky}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {
            (isHover)
              ? <img style={{ width: 122, height: 168 }} src={kuma_sparkle} alt=''/>
              : <img style={{ width: 122, height: 168 }} src={kuma} alt=''/>
          }
        </div>
    </div>
  )
}
