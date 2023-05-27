import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';





const Carusel = ({items}) => {

    const [thumbIndex, setThumbIndex] = useState(0);
    const [pref, setPrev] = useState(false);
    const [next, setNext] = useState(true);
    const [responsive, setResponsive] = useState(null);
   
    
   
    useEffect(() => {
        
        if( window.innerWidth >= 860)
        {
            setResponsive({
                30: { items: 1 },
                100: { items: 2 },
                1200: { items: 3 },
            });
        }
        else{
            setResponsive({
                400: { items: 1 },
            
            } );
        }
    
      

    }, []);

    const slideNext = () => {
        if ( thumbIndex < items.length - 1) {
            setThumbIndex(thumbIndex + 1);
            setPrev(true);
            if ( thumbIndex === items.length - 2)
                setNext(false);
        }
            
          
        
    };
    
    const slidePrev = () => {
        if ( thumbIndex > 0) {
            setThumbIndex(thumbIndex - 1);
            setNext(true);
            if ( thumbIndex === 1) {
                setPrev(false);
            }
        }
        
    };
    const syncThumbs = (e) => {
        setThumbIndex(e.item);
    };

  return (
    <div className='carousel-container'>
   
        <AliceCarousel   
                    disableDotsControls
                    disableButtonsControls
                    mouseTracking={false}                  
                    activeIndex={thumbIndex}
                    autoHeight  
                    responsive = {responsive}
                    onSlideChanged={syncThumbs}
                    items={items} />

        { 
            pref &&
                <button className="btn-prev" onClick={slidePrev}>&lang;</button>
        }
        {
            next &&
                <button className="btn-next" onClick={slideNext}>&rang;</button>
        }
       
    </div>
  );
}

export default Carusel;